import { candidate, filter, hiringSection } from '../fixtures/locators';

Cypress.Commands.add('addFilter', (name, city) => {
  cy.get(filter.name).type(name)
  cy.get(filter.city).type(city)
  cy.get(filter.submit).click()
});

Cypress.Commands.add('checkProfile', (name, city) => {
  if (name !=='{enter}') cy.get(candidate.fullName).contains(name)
  if (city !=='{enter}') cy.get(candidate.city).contains(city)
});
