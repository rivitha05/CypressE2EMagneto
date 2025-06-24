class RegistrationPage {
  fillRegistrationForm(user) {
    cy.get('#firstname').type(user.firstName);
    cy.get('#lastname').type(user.lastName);
    cy.get('#email_address').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('#password-confirmation').type(user.password);
  }

  submit() {
    cy.get('button[title="Create an Account"]').click();
  }
}

export default RegistrationPage;