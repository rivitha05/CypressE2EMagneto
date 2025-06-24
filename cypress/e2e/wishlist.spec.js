import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import WishlistPage from '../pages/WishlistPage';
import CartPage from '../pages/CartPage';

describe('Combined Test: Login, Wishlist flow + Place Order with multiple products', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const wishlistPage = new WishlistPage();
  const cartPage = new CartPage();

  const products = [
    { name: 'Radiant Tee', quantity: 2 },
    { name: 'Breathe-Easy Tank', quantity: 1 }
  ];

  it('Logs in with existing user from env and adds product to wishlist then moves it to checkout', () => {
    cy.visit('/customer/account/login/');
    
    const email = Cypress.env('user_email');
    const password = Cypress.env('user_password');

    loginPage.login(email, password);
    cy.contains('Account Information').should('be.visible');
    homePage.searchProduct('Radiant Tee');
    cy.get('.product-item-link').contains('Radiant Tee').click();
    productPage.addToWishlist();
  });
});


