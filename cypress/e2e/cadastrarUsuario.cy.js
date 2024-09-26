require('cypress-xpath')
import {faker} from '@faker-js/faker';

describe('template spec', () => {
  it('passes', () => {

    //criar uma variavel para o nome do usuario com faker
    const nome = faker.person.fullName()

    //criar uma variavel para o email com faker
    const email = faker.internet.email()

    cy.visit('http://hlruffo-002-site1.ctempurl.com/Account/Register')

    cy.get('#Nome').type(nome)
    cy.get('#Email').type(email)
    cy.get('#Senha').type('@Admin1234')
    cy.get('#SenhaConfirmacao').type('@Admin1234')

    //usando o xpath para clicar no botão de registro
    cy.xpath('/html/body/div/div/div/div[1]/div/form/div[5]/input').click()

    //criar uma asserção para verificar se o elemento é visível
    cy.get('.alert > strong').should('be.visible')
    //criar uma asserção para verificar se o texto do elemento contém "sua conta de usuário foi criada com sucesso!"
    cy.get('.alert > strong').should('contain.text','sua conta de usuário foi criada com sucesso!')

  })
})