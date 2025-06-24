class LoginPage {
  login(email, password) {
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
    cy.get('#send2').click();
  }
}

export default LoginPage;