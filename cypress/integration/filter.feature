Feature: Filter functionality

Background:ature
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
  | fakeName | fakeCity  | # nonexistent
  | hereford | lloyd     | # swapped data
  | lloyd    | sheffield | # name from one + city from another

  Scenario Outline: positive cases
  When I set "<name>" and "<city>" in filter
  Then I see candidate profile
  And I see expected "<name>" and "<city>" in profile
  Examples:
  | name              | city      |
  | julia cunninghams | sheffield | # full name + city
  | Julia             | Sheffield | # case sensitive
  | julia             | {enter}   | # filtered by first name
  | cunningham        | {enter}   | # filtered by second name
  | {enter}           | sheffield | # filtered by city
  | julia             | sheffield | # name + city 

  Scenario: Clear filter
  Given I set "fakeName" and "fakeCity" in filter
  When I clear the filter
  Then I see candidate profile
  And input fields are empty
