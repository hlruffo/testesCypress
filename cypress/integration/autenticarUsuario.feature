Feature: Autenticar usuário
    como um usuário cadastrado no sistema
    eu quero me autenticar
    para que eu possa acessar o sistema

  Scenario: Autenticar usuário com sucesso
    Given que o usuário está na página de login
    And o usuário preenche o campo de e-mail com "email@email.com"
    And o usuário preenche o campo de senha com "@Admin1234"
    When o usuário clica no botão de login
    Then o usuário deve ser redirecionado para a página de dashboard