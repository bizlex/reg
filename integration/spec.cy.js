describe('spec', () => {
  it('registrationMain', () => {
    // region visit

    cy.visit(Cypress.env('url'))

    // endregion

    // region chooseOperation

    cy.contains('button', 'CUDZOZIEMCY - Złożenie wniosku:').click()

    cy.contains('button', 'Dalej').click()

    cy.waitSpinner()

    cy.suppressError()

    // endregion

    // bypassCaptcha

    cy.solveHCaptcha(Cypress.env('siteKey'), Cypress.env('url'))
      .then((result) => {
        // cy.wrap(result).should('have.property', 'data')
        cy.log('Received captcha response: ', result)
      })

    // endregion
  })
})