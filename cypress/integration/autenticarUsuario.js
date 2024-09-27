import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Given("que o usuário está na página de login", () => {
    cy.visit('http://hlruffo-002-site1.ctempurl.com/')
})

Given('o usuário preenche o campo de e-mail com "email@email.com"', () => {
    cy.get('#Email').type('email@email.com')
})

Given('o usuário preenche o campo de senha com "@Admin1234"', () => {
    cy.get('#Senha').type('@Admin1234')
})

When('o usuário clica no botão de login', () => {
    cy.get('.btn-primary').click()
})

Then('o usuário deve ser redirecionado para a página de dashboard', () => {
    cy.get('.navbar-brand').contains('Aplicativo de Finanças').should('be.visible')
})