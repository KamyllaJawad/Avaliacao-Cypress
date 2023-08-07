describe('Sign In Success in Aesop', () => {
    it('Create a valid profile in Aesop', () => {
    cy.visit('https://www.natura.com.br/', {failOnStatusCode: false})
    cy.visit('https://www.aesop.com.br/');
      cy.get('.natds27').click(); // botao cadastre-se
      cy.get('#onetrust-accept-btn-handler').click(); // aceitar os cookies 
      cy.intercept('POST', 'https://production.na01.natura.com/s/AesopBrazil/dw/shop/v20_4/customers').as('createUser')
  
      cy.fillRandomUserData(); // Chame o comando personalizado aqui
  
      cy.get('#password-field').type('Password@1');
      cy.get('#confirmPassword-field').type('Password@1');
  
      cy.generateCPF().then((cpf) => {
        cy.get('input[name="cpf"]').type(cpf);
      });
  
      cy.get('input[name="gender"][value="female"]').click();
      cy.get('input[name="dateOfBirth"]').type('01/01/2000');
      cy.get('#receiveNewsLetter').check(); // aceitar receber newsletter
      cy.get('#infContOptIn').check(); // aceitar receber informações de email e telefone com a Aesop
      cy.get('#acceptedterms').check(); // aceitar os termos e condições
  
      cy.get('button[type="submit"].MuiButton-containedPrimary').click();
      cy.wait('@createUser').its('response.statusCode').should('eq', 200);
    });
  });
  