const Captcha = require('2captcha')

/**
 * @description Solve hCaptcha
 * @memberOf cy
 * @method solveHCaptcha
 * @param {string} siteKey
 * @param {string} url
 * @param {CommandOptions} [options={}] Command options
 * @return {Cypress.Chainable<Record>|null}
 */

Cypress.Commands.add('solveHCaptcha', (siteKey, url, options = {}) => {
  const {log = true} = options

  let cypressLog

  if (log) {
    cypressLog = Cypress.log({
      autoEnd: false,
    })
  }

  const solver = new Captcha.Solver(Cypress.env('2Captcha').apiKey)

  solver.hcaptcha(siteKey, url)
    .then(async (response) => {
      if (log) {
        Cypress.log({
          consoleProps: () => {
            return {
              Yields: response,
            }
          },
        })
      }
      console.log('response = ', response)
      return response
    })
    .catch((error) => {
      console.error(error.message)
    })
})