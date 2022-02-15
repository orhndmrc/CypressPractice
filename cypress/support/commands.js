// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import 'cypress-wait-until';
let loginPage = require('../pages/loginpage-locator.js')
let homePage =  require('../pages/homepage-locator.js')


Cypress.Commands.add('login', (email, password) => { 
    cy.xpath(loginPage.usernameBox).should('be.visible').type(email)
    cy.get(loginPage.passwordBox).should('be.visible').type(password)
    cy.get(loginPage.loginBtn).should('not.be.disabled').click()
})

Cypress.Commands.add('navigateToWebsite', (url) => { 
    cy.visit(url)
})

Cypress.Commands.add('fillRequiredEmployeeInfo', (firstname,lastname,city) => { 
    cy.xpath(homePage.firstNameBox).type(firstname)
    cy.xpath(homePage.lastNameBox).type(lastname)
    cy.xpath(homePage.cityBox).type(city)
})
  
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
