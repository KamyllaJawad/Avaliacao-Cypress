# Cypress Test Suite for User Registration:

Este projeto contém cenários de teste para avaliar o fluxo de cadastramento de usuários nos sites da Natura e Aesop.
Utilizamos o Cypress para simular o processo de cadastramento de um usuário com sucesso, garantindo que todos os campos sejam preenchidos corretamente e que o usuário seja registrado no sistema.

## Requisitos

- Node.js versão 12 ou superior
- Cypress versão 9 ou superior

## Instalação

Clone este repositório.

Instale as dependências com o seguinte comando:

`npm install`

## Estrutura do Projeto

- cypress/integration: Contém os arquivos de teste específicos para cada site.
- cypress/support/commands.js: Contém comandos personalizados para geração de dados aleatórios.

## Execução dos Testes

Você pode executar os testes utilizando o Cypress Test Runner ou por linha de comando.

Execute o seguinte comando para abrir o Cypress Test Runner:

`npx cypress open`

Depois, selecione o arquivo de teste desejado para executá-lo no Dashboard de testes cases.

##### Linha de Comando:

Você também pode executar os testes diretamente na linha de comando usando:

`npx cypress run --spec "caminho/para/arquivo_de_teste.spec.js"`



## Testes Incluídos

Cadastramento de Usuário na Natura:

Testa o processo de cadastramento de um novo usuário no site da Natura, com validação completa, incluindo CPF, telefone e aceite dos termos.

Cadastramento de Usuário na Aesop:

Simula o cadastramento de um novo usuário no site da Aesop, seguindo os passos para o preenchimento correto dos campos.





#### Contribuições

Se você encontrou um bug ou deseja contribuir com melhorias, sinta-se à vontade para abrir uma Issue ou Pull Request.

#### Licença

Este projeto é licenciado sob a licença MIT.

*Este README pode ser usado como um guia geral para qualquer pessoa que queira entender ou contribuir com o projeto. Sinta-se à vontade para personalizar conforme necessário.*