/**
 * @memberOf cy
 * @method waitProgressive
 * @param {number} multiplier
 * @param {CommandOptions} [options={}] Command options
 * @return {Cypress.Chainable<undefined>}
 */
Cypress.Commands.add('waitProgressive', (multiplier, options = {}) => {
  const {log = true} = options

  let cypressLog

  if (log) {
    cypressLog = Cypress.log({
      autoEnd: false,
    })
  }

  const currentRetry = Cypress._.get(cy.state('runnable'), '_currentRetry', 0)

  cy.wait(currentRetry * multiplier)
    .then(() => {
      if (log) {
        cypressLog.end()
      }
    })
})