import { candidate, filter } from '../fixtures/locators';

describe('Preconditions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.title().should('equal', 'OOS: Crew applications')
  })

  describe('Filter functionality checks', () => {

    it('Invalid filter: blank', () => {
      cy.addFilter("{enter}", "{enter}")
      cy.get(candidate.profileContainer)
      .should('exist')
    })

    it('Invalid filter: unexisted', () => {
      cy.addFilter("fakeName", "fakeCity")
      cy.get(candidate.profileContainer)
      .should('not.exist')
    })

    it('Invalid filter: swapped data', () => {
      cy.addFilter("hereford", "lloyd")
      cy.get(candidate.profileContainer)
      .should('not.exist')
    })

    //Set invalid filter: name from one + city from other
    it('Invalid filter: mixed data', () => {
      cy.addFilter("lloyd", "sheffield")
      cy.get(candidate.profileContainer)
      .should('not.exist')
    })

    //Should fails. Supposed issue: search by full name doesn't work
    it('Valid filter: full name + city', () => {
      cy.addFilter("julia cunningham", "sheffield")
      cy.get(candidate.profileContainer)
        .should('exist')
        .and('contain', 'julia')
        .and('contain', 'cunningham')
        .and('contain', 'sheffield')
    })

    //Supposed issue: filter shouldn't be case sencitive
    it('Valid filter: case sensitive', () => {
      cy.addFilter("Julia", "Sheffield")
      cy.get(candidate.profileContainer)
        .should('exist')
        .and('contain', 'julia')
        .and('contain', 'sheffield')
    })

    it('Valid filter: by name', () => {
      cy.addFilter("julia", "{enter}")
      cy.get(candidate.profileContainer)
        .should('exist')
        .and('contain', 'julia')
    })

    it('Valid filter: by lustname', () => {
      cy.addFilter("cunningham", "{enter}")
      cy.get(candidate.profileContainer)
        .should('exist')
        .and('contain', 'cunningham')
    })

    it('Valid filter: by city', () => {
      cy.addFilter("julia", "{enter}")
      cy.get(candidate.profileContainer)
        .should('exist')
        .and('contain', 'julia')
    })

    it('Valid filter: name + city', () => {
      cy.addFilter("julia", "sheffield")
      cy.get(candidate.profileContainer)
        .should('exist')
        .and('contain', 'julia')
        .and('contain', 'sheffield')
    })
})

  describe('Clear filter functionality check', () => {
    it('Clear filter', () => {
      cy.addFilter("fake", "fake")
      cy.get(filter.clearButton).click()

      cy.get(candidate.profileContainer)
        .should('exist')
      cy.get(filter.nameInput)
        .should('have.value', null)
      cy.get(filter.cityInput)
        .should('have.value', null)

    })
})
})
