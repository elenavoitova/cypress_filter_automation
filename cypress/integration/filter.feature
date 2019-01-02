Feature: Filter functionality

Background: before each
  Given I open api page
  Then I see "OOS: Crew applications" in the title

"""
 11 cases are covered: 8 pass | 3 fail
 Supposed issues are found:
  - search by full name doesn't work
  - filter is case sensitive
  - input fields aren't cleared after clear filter
"""

  Scenario: Set blank Filter
  When I set "{enter}" and "{enter}" in filter
  Then I see candidate profile

  Scenario Outline: negative cases
  When I set "<name>" and "<city>" in filter
  Then I don't see candidate profile
  Examples:
  | name     | city      |
  | fakeName | fakeCity  |
  | hereford | lloyd     |
  | lloyd    | sheffield |

  Scenario Outline: positive cases
  When I set "<name>" and "<city>" in filter
  Then I see candidate profile
  And I see expected "<name>" and "<city>" in profile
  Examples:
  | name              | city      |
  | julia cunninghams | sheffield |
  | Julia             | Sheffield |
  | julia             | {enter}   | 
  | cunningham        | {enter}   | 
  | {enter}           | sheffield |
  | julia             | sheffield |

  Scenario: Clear filter
  Given I set "fakeName" and "fakeCity" in filter
  When I clear the filter
  Then I see candidate profile
  And input fields are empty
