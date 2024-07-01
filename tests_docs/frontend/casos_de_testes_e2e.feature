#language: pt
Feature: Botão de adicionar novo usuário

    Scenario: Verificar se o botão de adicionar novo usuário está visível
        Given estou na página "http://localhost:5400/"
        When vejo a tela de listagem de usuários
        Then o botão "+ Novo Usuário" deve estar visível na tela
    
    Scenario: Verificar se o botão de adicionar novo usuário está funcionando
        Given estou na página "http://localhost:5400/"
        When vejo a tela de listagem de usuários
        And realizo um click no botão "+ Novo Usuário"
        Then vejo um modal com o titulo "Cadastrar novo usuário"


Feature: Botão de editar usuário

    Scenario: Verificar se o botão de editar usuário está visível
        Given estou na página "http://localhost:5400/"
        And tenho pelo menos um usuário cadastrado
        When acesso a tela de listagem de usuários
        Then o botão de edição deve estar visível na tela

    Scenario: Verificar se o botão de editar usuário está funcionando
        Given estou na página "http://localhost:5400/"
        And tenho pelo menos um usuário cadastrado
        When acesso a tela de listagem de usuários
        And realizo um click no botão de edição
        Then vejo um modal com o titulo "Editar usuário"

Feature: Botão de excluir usuário
    
        Scenario: Verificar se o botão de excluir usuário está visível
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            Then o botão de exclusão deve estar visível na tela
    
        Scenario: Verificar se o botão de excluir usuário está funcionando
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de exclusão
            Then vejo um modal com o titulo "Excluir usuário"


Feature: Cadastrar novo usuário

    Scenario: Cadastrar novo usuário com sucesso
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And preencho os campos obrigatórios
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de sucesso
        And o novo usuário cadastrado na lista de usuários

    Scenario: Cadastrar novo usuário sem preencher os campos obrigatórios
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And não preencho os campos obrigatórios
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de erro nos campos obrigatórios


    Scenario: Cadastrar novo usuário com email já cadastrado
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And preencho os campos obrigatórios
        And preencho um email já cadastrado
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de erro de email já cadastrado
        And não consigo cadastrar o novo usuário
        

    Scenario: Cadastrar novo usuário com email inválido
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And preencho os campos obrigatórios
        And preencho o campo "Email" com valor "emailinvalido"
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de erro de email inválido
        And não consigo cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com nome em formato inválido
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And preencho os campos obrigatórios
        And preencho o campo "Nome" com valor "123"
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de erro de nome inválido
        And não consigo cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com telefone em formato inválido
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And preencho os campos obrigatórios
        And preencho o campo "Telefone" com valor "teste"
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de erro de telefone inválido
        And não consigo cadastrar o novo usuário
    
    Scenario: Cadastrar novo usuário com data inválida
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And preencho os campos obrigatórios
        And preencho o campo de data com valor "01/01/2022"
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de erro de data de nascimento inválida
        And não consigo cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com cidade de nascimento inválida
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And preencho os campos obrigatórios
        And preencho o campo "Cidade de Nascimento" com valor "123"
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de erro de cidade de nascimento inválida
        And não consigo cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com empresa inexistente
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And preencho os campos obrigatórios
        And preencho o campo "Empresa" com valor "Empresa Inexistente"
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de erro de empresa inexistente
        And não consigo cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com data futura
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And preencho os campos obrigatórios
        And preencho o campo de data com valor "01/01/2050"
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de erro de data de nascimento futura
        And não consigo cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com data de nascimento muito antiga
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And preencho os campos obrigatórios
        And preencho o campo de data com valor "01/01/0001"
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de erro de data de nascimento muito antiga
        And não consigo cadastrar o novo usuário

    Scenario: Cadastrar novo usuário com data de nascimento com mais que 4 digitos no ano
        Given estou na página "http://localhost:5400/"
        When realizo um click no botão "+ Novo Usuário"
        And vejo o modal de cadastro
        And preencho os campos obrigatórios
        And preencho o campo de data com valor "01/01/10000"
        And realizo um click no botão "Salvar"
        Then vejo uma mensagem de erro de data de nascimento inválida
        And não consigo cadastrar o novo usuário


Feature: Editar usuário
    
        Scenario: Editar usuário com sucesso
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de edição
            And vejo o modal de edição
            And preencho os campos obrigatórios
            And realizo um click no botão "Salvar"
            Then vejo uma mensagem de sucesso
            And o usuário editado na lista de usuários

    
        Scenario: Editar usuário sem preencher os campos obrigatórios
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de edição
            And vejo o modal de edição
            And não preencho os campos obrigatórios
            And realizo um click no botão "Salvar"
            Then vejo uma mensagem de erro nos campos obrigatórios
            And o usuário não é editado

        Scenario: Editar usuário com email inválido
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de edição
            And vejo o modal de edição
            And preencho os campos obrigatórios
            And preencho o campo "Email" com valor "emailinvalido"
            And realizo um click no botão "Salvar"
            Then vejo uma mensagem de erro de email inválido
            And o usuário não é editado

        Scenario: Editar usuário com nome em formato inválido
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de edição
            And vejo o modal de edição
            And preencho os campos obrigatórios
            And preencho o campo "Nome" com valor "123"
            And realizo um click no botão "Salvar"
            Then vejo uma mensagem de erro de nome inválido
            And o usuário não é editado

        Scenario: Editar usuário com telefone em formato inválido
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de edição
            And vejo o modal de edição
            And preencho os campos obrigatórios
            And preencho o campo "Telefone" com valor "teste"
            And realizo um click no botão "Salvar"
            Then vejo uma mensagem de erro de telefone inválido
            And o usuário não é editado

        Scenario: Editar usuário com data inválida  
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de edição
            And vejo o modal de edição
            And preencho os campos obrigatórios
            And preencho o campo de data com valor "01/01/2022"
            And realizo um click no botão "Salvar"
            Then vejo uma mensagem de erro de data de nascimento inválida
            And o usuário não é editado

        Scenario: Editar usuário com cidade de nascimento inválida  
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de edição
            And vejo o modal de edição
            And preencho os campos obrigatórios
            And preencho o campo "Cidade de Nascimento" com valor "123"
            And realizo um click no botão "Salvar"
            Then vejo uma mensagem de erro de cidade de nascimento inválida
            And o usuário não é editado

        Scenario: Editar usuário com empresa inexistente
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de edição
            And vejo o modal de edição
            And preencho os campos obrigatórios
            And preencho o campo "Empresa" com valor "Empresa Inexistente"
            And realizo um click no botão "Salvar"
            Then vejo uma mensagem de erro de empresa inexistente
            And o usuário não é editado

        Scenario: Editar usuário com data futura
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de edição
            And vejo o modal de edição
            And preencho os campos obrigatórios
            And preencho o campo de data com valor "01/01/2050"
            And realizo um click no botão "Salvar"
            Then vejo uma mensagem de erro de data de nascimento futura
            And o usuário não é editado

        Scenario: Editar usuário com data de nascimento muito antiga
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de edição
            And vejo o modal de edição
            And preencho os campos obrigatórios
            And preencho o campo de data com valor "01/01/0001"
            And realizo um click no botão "Salvar"
            Then vejo uma mensagem de erro de data de nascimento muito antiga
            And o usuário não é editado

        Scenario: Editar usuário com data de nascimento com mais que 4 digitos no ano
            Given estou na página "http://localhost:5400/"
            And tenho pelo menos um usuário cadastrado
            When acesso a tela de listagem de usuários
            And realizo um click no botão de edição
            And vejo o modal de edição
            And preencho os campos obrigatórios
            And preencho o campo de data com valor "01/01/10000"
            And realizo um click no botão "Salvar"
            Then vejo uma mensagem de erro de data de nascimento inválida
            And o usuário não é editado

            

Feature: Excluir usuário

    Scenario: Excluir usuário com sucesso
        Given estou na página "http://localhost:5400/"
        And tenho pelo menos um usuário cadastrado
        When acesso a tela de listagem de usuários
        And realizo um click no botão de exclusão
        And vejo o modal de exclusão
        And realizo um click no botão "Confirmar"
        Then vejo uma mensagem de sucesso
        
    Scenario: Excluir usuário com erro
        Given estou na página "http://localhost:5400/"
        And tenho pelo menos um usuário cadastrado
        When acesso a tela de listagem de usuários
        And realizo um click no botão de exclusão
        And vejo o modal de exclusão
        And realizo um click no botão "Cancelar"
        Then vejo uma mensagem de erro

        