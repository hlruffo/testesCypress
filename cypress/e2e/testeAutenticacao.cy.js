describe('template spec', () => {
  it('passes', () => {

    //criando uma variável para o email
    const email = 'email@email.com'

    //criando uma variável para a senha
    const senha = '@Admin1234'

    //acessando o site do sistema
    cy.visit('http://hlruffo-002-site1.ctempurl.com/')

    //encontrar o campo do email e passar o valor da variável email
    //criaremos o equivalente ao comando do Java abaixo
    //driver.findElement(By.id('Email')).sendKeys(email)
    cy.get('#Email').type(email)

    //encontrar o campo da senha e passar o valor da variável senha
    //criar o equivalente ao comando do Java abaixo
    //driver.findElement(By.id('Senha')).sendKeys(senha)
    cy.get('#Senha').type(senha)

    //clicar no botão de login
    //criar o equivalente ao comando do Java abaixo
    //driver.findElement(By.xpath('/html/body/div/div/div/div[1]/div/form/div[3]/input')).click()
    cy.get(':nth-child(3) > .btn').click()
    //cy.get('.btn-primary').click()
  })
})