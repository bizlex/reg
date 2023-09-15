describe('spec', () => {
  it('registrationMain', () => {
    // region visit

    cy.visit('https://rejestracjapoznan.poznan.uw.gov.pl/')

    // endregion

    // region chooseOperation

    cy.contains('button', 'CUDZOZIEMCY - Złożenie wniosku:').click()

    cy.contains('button', 'Dalej').click()

    // endregion
  })
})