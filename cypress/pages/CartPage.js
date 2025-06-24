class CartPage {
  goToCart() {
    cy.get('.showcart').click();
    cy.contains('View and Edit Cart').click();
  }

  validateTotal() {
    let subtotalSum = 0;

    cy.get('.cart.item .subtotal .price').each(($el) => {
      const price = parseFloat($el.text().replace('$', '').trim());
      subtotalSum += price;
    }).then(() => {
      cy.get('.grand.totals .price').invoke('text').then((totalText) => {
        const grandTotal = parseFloat(totalText.replace('$', '').trim());
        expect(grandTotal).to.be.closeTo(subtotalSum, 0.01); // Allow minimal rounding difference
      });
    });
  }
}

export default CartPage;