declare namespace Cypress {
    interface Chainable<Subject> {
        login(email, password): Chainable<(string)>;
        navigateToWebsite(url): Chainable<(string)>;
        fillRequiredEmployeeInfo(url): Chainable<(string)>;
        
    }
  }