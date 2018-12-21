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
