describe('spec', () => {
  it('registrationMain', () => {
    // region visit

    cy.visit(Cypress.env('url'))

    // endregion

    // region chooseOperation

    // cy.contains('button', 'CUDZOZIEMCY - Złożenie wniosku:')
    //   .click()

    cy.contains('button', 'CUDZOZIEMCY - Uzyskanie stempla')
      .click()

    cy.contains('button', 'Dalej')
      .click()

    cy.suppressError()

    cy.waitSpinner()

    // endregion

    // region bypassCaptcha

    // cy.solveHCaptcha(Cypress.env('siteKey'), Cypress.env('url'))
    //   .then((result) => {
    //     // cy.wrap(result).should('have.property', 'data')
    //     cy.log('Received captcha response: ', result)
    //   })

    // cy.get('textarea[name="h-captcha-response"]')
    //   .invoke('removeAttr', 'style')
    //   .type('Text to type into the hidden input')

    // endregion

    // region selectDateTime

    // select the first available day
    cy.get('span[class="vc-day-content vc-focusable"]')
      .eq(0)
      .click()

    cy.waitSpinner()

    // select the first available time
    cy.get('#selectTime')
      .select(0)

    cy.contains('button', 'Dalej')
      .click()

    // endregion

    // region typeData

    cy.get('input[name="Nazwisko"]')
      .type(Cypress.env('user').lastName)

    cy.get('input[name="Imię"]')
      .type(Cypress.env('user').firstName)

    cy.get('input[name="e-mail"]')
      .type(Cypress.env('user').email)

    cy.get('input[name="Numer telefonu"]')
      .type(Cypress.env('user').phone)

    cy.contains('button', 'Dalej')
      .click()

    // endregion
  })
})