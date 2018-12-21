import { candidate, filter, hiringSection } from '../fixtures/locators';

/*
* Selectors
* filter.clearButton
* filter.submitButton
* filter.nameInput
* filter.cityInput
* candidate.profileName
* candidate.profileImage
* candidate.profileContainer
*/
Cypress.Commands.add('addFilter', (name, city) => {
    cy.get(filter.nameInput).type(name)
    cy.get(filter.cityInput).type(city)
    cy.get(filter.submitButton).click()
});
 //Cypress.$(filter.submitButton).click()
//  cy.get($searchCity).type(city)
//  cy.get($submit).click()
//  return cy.get($person).its('length')
  // let items = cy.get($person).its('length')
  // if (items.length == 0){
  //     return items.length;
  // } else {
  //     let person = cy.get($name)
  //     return result = {
  //               count: items.length,
  //               person: person
  //   }
  // }
