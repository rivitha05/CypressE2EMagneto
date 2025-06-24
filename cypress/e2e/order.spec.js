import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';

describe('Test Case B: Login and Place Order with Multiple Products', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();

  const products = [
    { name: 'Radiant Tee', quantity: 2 },
    { name: 'Breathe-Easy Tank', quantity: 1 }
  ];

  it('Logs in and places order with multiple products + price validation', () => {
    cy.visit('/customer/account/login/');

    const email = Cypress.env('user_email');
    const password = Cypress.env('user_password');

    loginPage.login(email, password);
    cy.contains('Account Information').should('be.visible');

    products.forEach((item) => {
      homePage.searchProduct(item.name);
      cy.get('.product-item-link')
        .contains(item.name)
        .click({ force: true });

      productPage.addToCart(item.quantity);
    });

    cartPage.goToCart();
    cartPage.validateTotal();
  });
});
