/**
 * @memberOf cy
 * @method waitSpinner
 * @param {Alias[]} [aliases]
 * @param {CommandOptions} [options={}] Command options
 * @return {Cypress.Chainable}
 */
Cypress.Commands.add('waitSpinner', (aliases, options = {}) => {
  const {log = true} = options

  let cypressLog

  if (log) {
    cypressLog = Cypress.log({
      autoEnd: false,
    })
  }

  cy.get('div[class="vld-overlay is-active is-full-page"]', {log: false})
    .should('exist')

  if (aliases) {
    cy.wait(aliases, {log: false})
  }

  cy.get('div[class="vld-overlay is-active is-full-page"]', {log: false})
    .should('not.exist')
    .and(() => {
      if (log) {
        cypressLog.end()
      }
    })
})