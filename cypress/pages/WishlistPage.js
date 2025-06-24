class WishlistPage {
  visit() {
    cy.visit('/wishlist/');
  }

  moveToCart() {
    cy.get('[data-action="tocart"]').first().click();
    cy.contains('Add to Cart').click();
  }

  proceedToCheckout() {
    cy.get('.action.primary.checkout').click({ force: true });
  }
}

export default WishlistPage;