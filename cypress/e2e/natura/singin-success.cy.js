describe('Sign In Success in Natura', () => {
  it('Create a valid profile in Natura', () => {
    cy.visit('https://www.natura.com.br/')
    cy.get('.natds40').click()
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('.MuiButton-outlined').click()
    cy.intercept('POST', 'https://apigw.natura.com.br/v1/legacyweb/ecommerce/rest/model/atg/userprofiling/ProfileActor/create').as('createUser')

    cy.fillRandomUserData(); // Chame o comando personalizado aqui

    cy.get('#password-field').type('Password@1');
    cy.get('#confirmPassword-field').type('Password@1');

    cy.generateCPF().then((cpf) => {
      cy.get('input[name="cpf"]').type(cpf);
    });

    cy.get('input[name="gender"][value="female"]').click();
    cy.get('input[name="dateOfBirth"]').type('01/01/2000');

    cy.get('#pushOptInWP').check()
    cy.get('#acceptedterms').check()

    cy.get('button[type="submit"].MuiButton-containedPrimary').click();
    cy.wait('@createUser').its('response.statusCode').should('eq', 200);
  });
});
