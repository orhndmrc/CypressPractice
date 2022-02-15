/// <reference types="cypress" />
let loginPage = require('../../pages/loginpage-locator.js')
let homePage = require('../../pages/homepage-locator.js')
describe('Create New Record', () => {
    let num = parseInt(Math.random()*100)
    let firstname=`User${num}`
    let lastname=`Lastname${num}`
    let city=`City${num}`
    before(() => {
        //Navigating the website
        cy.navigateToWebsite('https://qa-practical.qa.swimlane.io/login')
        cy.title().should('eq', 'Swimlane')
    })

    it('create new record with required inputs', () => {
        cy.login('orhan.demirci', '9dqcAUeKpv6ndV')
        cy.get(homePage.userInfoIcon).should('be.visible')
        cy.xpath(homePage.applicationRecordBtn).trigger('mouseover')
        cy.get(homePage.createRecordBtn).click()
        cy.get(homePage.newRecordTab).should('be.visible')
        cy.fillRequiredEmployeeInfo(firstname, lastname, city)
        cy.contains('Full Time').click()
        cy.contains('Engineering').click()
        cy.xpath(homePage.saveNewRecordBtn).click()
        cy.xpath(homePage.timeSpentSave).click()

    })

})