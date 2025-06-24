class ProductPage {
  addToCart(quantity = 1) {
    // Dynamically select first available option (size/color/etc.)
    cy.get('[option-label]').then(($options) => {
      if ($options.length) {
        // Click each unique option group once (size, then color, etc.)
        const clicked = new Set();
        cy.wrap($options).each(($el) => {
          const label = $el.attr('option-label');
          if (!clicked.has(label)) {
            clicked.add(label);
            cy.wrap($el).click({ force: true });
          }
        });
      }
    });

    // Click Add to Cart button
    cy.get('button#product-addtocart-button', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Confirm success message
    cy.get('.message-success', { timeout: 10000 })
      .should('contain', 'You added')
      .and('be.visible');
  }

  addToWishlist() {
    cy.contains('Add to Wish List').click({ force: true });
    cy.get('.message-success', { timeout: 10000 })
      .should('be.visible');
  }
}

export default ProductPage;
