/**
 * @memberof cy
 * @method suppressError
 * @return {Cypress.Chainable<undefined>}
 */
Cypress.Commands.add('suppressError', () => {
  cy.on('uncaught:exception', () => {
    return false
  })
})