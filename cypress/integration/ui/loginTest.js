/// <reference types="cypress" />
let loginPage = require('../../pages/loginpage-locator.js')
let homePage =  require('../../pages/homepage-locator.js')
describe('Login', () => {
  beforeEach(() => {
    //Navigating the website
    cy.navigateToWebsite('https://qa-practical.qa.swimlane.io/login')
    cy.title().should('eq', 'Swimlane')
  })

  it('login website with valid credential', () => {
    //Happy path scenario
    //I have added "login commands in commands.js file"
    cy.login('orhan.demirci','9dqcAUeKpv6ndV')
    cy.get(homePage.userInfoIcon).should('be.visible')
  })
  it('trying to login with invalid credential', () => {
    //Negative scenario with invalid credential
    //We should get "Login Failed Notification"
    cy.login('orhan.demirci123','9dfr3')
    cy.xpath(loginPage.failMessage).then(function ($elem) {
      let message = $elem.text()
      expect(message).equal(' Login failed. ')
    })
    
  })
})
