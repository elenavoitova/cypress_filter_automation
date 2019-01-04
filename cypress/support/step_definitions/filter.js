import { candidate, filter } from '../../fixtures/locators';
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

//const url = `http://localhost:3000`
//const url = `http://localhost:5000`

Given(`I open api page`, () => {
    cy.visit(`http://${Cypress.env('TARGET_HOST')}:5000/`)
})

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})

When (`I set {string} and {string} in filter`, (name, city) => {
    cy.addFilter(name, city)
  })

Then(/I (don\'t |)see candidate profile/, (condition) => {
    let present = (condition==='don\'t ') ? 'not.exist' : 'exist'
    cy.get('.CrewMember-container').should(present)
  })

Then(`I see expected {string} and {string} in profile`, (name, city) => {
    cy.checkProfile(name, city)
})

When(`I clear the filter`, () => {
    cy.get('[type=button]').click()
})

Then(`input fields are empty`, () => {
    cy.get('#name').should('have.value', null)
    cy.get('#city').should('have.value', null)
})
