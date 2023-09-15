describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rejestracjapoznan.poznan.uw.gov.pl/')
    cy.contains('button', 'CUDZOZIEMCY - Złożenie wniosku:').click()
    cy.contains('button', 'Dalej').click()
  })
})