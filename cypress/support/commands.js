const { generate } = require('gerador-validador-cpf');

Cypress.Commands.add('generateCPF', () => {
    return generate();
});

Cypress.Commands.add('fillRandomUserData', () => {
    const userData = {
      firstName: `Nome${Math.floor(Math.random() * 1000)}`,
      lastName: `Sobrenome${Math.floor(Math.random() * 1000)}`,
      email: `email${Math.floor(Math.random() * 1000)}@test.com`,
      phone: `479${Math.floor(Math.random() * 100000000)}`
    };
  
    cy.get('input[name="firstName"]').type(userData.firstName, { delay: 50 });
    cy.get('input[name="lastName"]').type(userData.lastName, { delay: 50 });
    cy.get('input[name="email"]').type(userData.email, { delay: 50 });
    cy.get('input[name="homePhone"]').type(userData.phone, { delay: 50 }); // Ajuste o seletor conforme necessário
  });
  