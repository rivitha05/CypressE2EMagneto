import HomePage from '../pages/HomePage';

describe('Test Case D: Search Validation', () => {
  const homePage = new HomePage();

  it('Searches for a product and verifies it appears', () => {
    cy.visit('/');
    homePage.searchProduct('Radiant Tee');
    cy.contains('Radiant Tee').should('be.visible');
  });
});