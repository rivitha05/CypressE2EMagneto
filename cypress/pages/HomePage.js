class HomePage {
  searchProduct(productName) {
    cy.get('#search').clear().type(`${productName}{enter}`);
  }
}

export default HomePage;
