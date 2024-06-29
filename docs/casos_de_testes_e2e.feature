#language: pt
Feature: Botão de adicionar novo usuário

    Scenario: Verificar se o botão de adicionar novo usuário está visível
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário acessa a tela de listagem de usuários
        Then o botão "+ Novo Usuário" deve estar visível na tela
    
    Scenario: Verificar se o botão de adicionar novo usuário está funcionando
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário acessa a tela de listagem de usuários
        And o usuário clica no botão "+ Novo Usuário"
        Then o usuário visualizar um modal com o titulo "Cadastrar novo usuário"


Feature: Botão de editar usuário

    Scenario: Verificar se o botão de editar usuário está visível
        Given que o usuário está na página "http://localhost:5400/"
        And o usuário tem pelo menos um usuário cadastrado
        When o usuário acessa a tela de listagem de usuários
        And o usuário tem pelo menos um usuário cadastrado
        Then o botão de edição deve estar visível na tela

    Scenario: Verificar se o botão de editar usuário está funcionando
        Given que o usuário está na página "http://localhost:5400/"
        And o usuário tem pelo menos um usuário cadastrado
        When o usuário acessa a tela de listagem de usuários
        And o usuário tem pelo menos um usuário cadastrado
        And o usuário clica no botão de edição
        Then o usuário visualizar um modal com o titulo "Editar usuário"

Feature: Botão de excluir usuário
    
        Scenario: Verificar se o botão de excluir usuário está visível
            Given que o usuário está na página "http://localhost:5400/"
            And o usuário tem pelo menos um usuário cadastrado
            When o usuário acessa a tela de listagem de usuários
            And o usuário tem pelo menos um usuário cadastrado
            Then o botão de exclusão deve estar visível na tela
    
        Scenario: Verificar se o botão de excluir usuário está funcionando
            Given que o usuário está na página "http://localhost:5400/"
            And o usuário tem pelo menos um usuário cadastrado
            When o usuário acessa a tela de listagem de usuários
            And o usuário tem pelo menos um usuário cadastrado
            And o usuário clica no botão de exclusão
            Then o usuário visualizar um modal com o titulo "Excluir usuário"


Feature: Cadastrar novo usuário

    Scenario: Cadastrar novo usuário com sucesso
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário preencher os campos obrigatórios
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de sucesso
        And o usuário visualizar o novo usuário na lista de usuários

    Scenario: Cadastrar novo usuário sem preencher os campos obrigatórios
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário não preencher os campos obrigatórios
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de erro nos campos obrigatórios


    Scenario: Cadastrar novo usuário com email já cadastrado
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário preencher os campos obrigatórios
        And o usuário preencher um email já cadastrado
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de erro de email já cadastrado
        And o usuário não conseguir cadastrar o novo usuário
        

    Scenario: Cadastrar novo usuário com email inválido
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário preencher os campos obrigatórios
        And o usuário preencher o campo "Email" com valor "emailinvalido"
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de erro de email inválido
        And o usuário não conseguir cadastrar o novo usuário    

    Scenario: Cadastrar novo usuário com nome em formato inválido
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário preencher os campos obrigatórios
        And o usuário preencher o campo "Nome" com valor "123"
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de erro de nome inválido
        And o usuário não conseguir cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com telefone em formato inválido
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário preencher os campos obrigatórios
        And o usuário preencher o campo "Telefone" com valor "teste"
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de erro de telefone inválido
        And o usuário não conseguir cadastrar o novo usuário
    
    Scenario: Cadastrar novo usuário com data inválida
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário preencher os campos obrigatórios
        And o usuário preencher o campo de data com valor "01/01/2022"
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de erro de data de nascimento inválida
        And o usuário não conseguir cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com cidade de nascimento inválida
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário preencher os campos obrigatórios
        And o usuário preencher o campo "Cidade de Nascimento" com valor "123"
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de erro de cidade de nascimento inválida
        And o usuário não conseguir cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com empresa inexistente
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário preencher os campos obrigatórios
        And o usuário preencher o campo "Empresa" com valor "Empresa Inexistente"
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de erro de empresa inexistente
        And o usuário não conseguir cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com data futura
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário preencher os campos obrigatórios
        And o usuário preencher o campo de data com valor "01/01/2050"
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de erro de data de nascimento futura
        And o usuário não conseguir cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com data de nascimento muito antiga
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário preencher os campos obrigatórios
        And o usuário preencher o campo de data com valor "01/01/0001"
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de erro de data de nascimento muito antiga
        And o usuário não conseguir cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com data de nascimento com mais que 4 digitos no ano
        Given que o usuário está na página "http://localhost:5400/"
        When o usuário clicar no botão "+ Novo Usuário"
        And o usuário visualizar o modal de cadastro
        And o usuário preencher os campos obrigatórios
        And o usuário preencher o campo de data com valor "01/01/10000"
        And o usuário clicar no botão "Salvar"
        Then o usuário visualizar uma mensagem de erro de data de nascimento inválida
        And o usuário não conseguir cadastrar o novo usuário