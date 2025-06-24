import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';

describe('Test Case A: Registration and Login with fully random user data', () => {
  const registrationPage = new RegistrationPage();
  const loginPage = new LoginPage();

  it('Registers a new user with random data and validates login', () => {
    const user = generateRandomUser();

    cy.visit('/customer/account/create/');

    registrationPage.fillRegistrationForm(user);
    registrationPage.submit();
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible');

    cy.contains('Sign Out').click({force: true});
    cy.wait(6000);
    cy.visit('/customer/account/login/');
    loginPage.login(user.email, user.password);
    cy.contains('Account Information').should('be.visible');
  });
});

function generateRandomUser() {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8); // random 6 chars

  return {
    firstName: `TestFirst${randomString}`,
    lastName: `TestLast${randomString}`,
    email: `testuser_${timestamp}@example.com`,
    password: `Pass!${randomString}123`
  };
}