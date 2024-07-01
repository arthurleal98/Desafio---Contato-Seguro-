describe('Excluir usuário', () => {
    it('Excluir usuário com sucesso', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de exclusão
        cy.get('img[alt="delete"]').first().should('be.visible').click()

        // Confirmar a exclusão
        cy.get('button').contains('Sim').click()

        // Verificar se o modal foi fechado
        cy.get('.ReactModal__Body--open').should('not.exist')

        // Verificar se a quantidade de usuários cadastrados diminuiu
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd - 1)

    })

    it('Excluir usuário sem confirmação', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de exclusão
        cy.get('img[alt="delete"]').first().should('be.visible').click()

        // Confirmar a exclusão
        cy.get('button').contains('Não').click()

        // Verificar se o modal foi fechado
        cy.get('.ReactModal__Body--open').should('not.exist')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)
    })

    it('Excluir usuário com erro', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de exclusão
        cy.get('img[alt="delete"]').first().should('be.visible').click()

        // Confirmar a exclusão
        cy.get('button').contains('Sim').click()

        
        // Verificar se a quantidade de usuários cadastrados diminuiu
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)
    })
})

describe('Editar usuário', () => {
    it('Editar usuário com sucesso', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="Email"]').clear().type("")
        cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar se o modal foi fechado
        cy.get('.ReactModal__Body--open').should('not.exist')
    })

    it('Editar usuário sem preencher os campos obrigatórios', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        
        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo nome
        cy.get('input[placeholder="Nome"]').should('contain', 'Por favor, preencha este campo')
    })

    it('Editar usuário com email inválido', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="Email"]').clear().type("teste")
        cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo email
        cy.get('input[placeholder="Email"]').should('contain', 'Email inválido')
    })

    it('Editar usuário com nome em formato inválido', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="Email"]').clear().type("123+_)_()_*(&")
        cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo nome
        cy.get('input[placeholder="Nome"]').should('contain', 'Nome inválido')
    })

    it('Editar usuário com telefone inválido', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="Email"]').clear().type("")
        cy.get('input[placeholder="Telefone"]').clear().type("231asdf34")
        cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo telefone
        cy.get('input[placeholder="Telefone"]').should('contain', 'Telefone inválido')
    })

    it('Editar usuário com data inválida', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("1")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="Email"]').clear().type("")
        cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').clear().type("200000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo data
        cy.get('input[placeholder="Data de nascimento"]').should('contain', 'Data inválida')

    })

    it('Editar usuário com cidade de nascimento inválida', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("1")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="Email"]').clear().type("teste@teste.com")
        cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste12312312312")
        cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo cidade
        cy.get('input[placeholder="Cidade de nascimento"]').should('contain', 'Cidade inválida')
    })

    it('Editar usuário com empresa inexistente', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("teste@teste.com")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="Email"]').clear().type("teste@teste.com")
        cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

        // Escolher a empresa
        cy.get('#search_input').type('Teste')
        

        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo empresa
        cy.get('#search_input').should('contain', 'Empresa inválida')
    })

    it('Editar usuário com data futura', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("email@email.com")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("2000-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="Email"]').clear().type("email@adfa.com")
        cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').clear().type("2050-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo data
        cy.get('input[placeholder="Data de nascimento"]').should('contain', 'Data inválida')
    })

    it('Editar usuário com data de nascimento muito antiga', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("teste@teste.com")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("0001-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="Email"]').clear().type("email@adfa.com")
        cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').clear().type("2050-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo data
        cy.get('input[placeholder="Data de nascimento"]').should('contain', 'Data inválida')
    })
    it('Editar usuário com data de nascimento com mais que 4 digitos no ano', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        if (qtd == 0) {
            cy.get('#new-user').click()
            // Preencher os campos do formulário
            cy.get('input[placeholder="Nome"]').clear().type('Teste')
            cy.get('input[placeholder="Email"]').clear().type("teste@teste.com")
            cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
            cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
            cy.get('input[placeholder="Data de nascimento"]').clear().type("000102-01-01")

            // Escolher a empresa
            cy.get('#search_input').click()
            cy.get('li[class="option  highlightOption highlight  "]').click()

            // clicar fora do campo de empresa
            cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
            cy.get('button').contains('Salvar').click()
        }

        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="Email"]').clear().type("email@adfa.com")
        cy.get('input[placeholder="Telefone"]').clear().type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').clear().type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').clear().type("2050-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal __Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo data
        cy.get('input[placeholder="Data de nascimento"]').should('contain', 'Data inválida')
    })
})


describe('Cadastrar novo usuário', () => {
    it('Cadastrar novo usuário com sucesso', () => {
        cy.visit('http://localhost:5400/')

        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()
        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Teste')
        cy.get('input[placeholder="Email"]').type("Teste@teste.com")
        cy.get('input[placeholder="Telefone"]').type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').type("2000-01-01")
        

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal__Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        // Validar se há um novo elemento na tabela
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd + 1)
    })

    it('Cadastrar novo usuário sem preencher os campos obrigatórios', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })
        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()
        // Preencher os campos do formulário
        cy.get('button').contains('Salvar').click()

        //Verificar a mensagem de erro na tela
        cy.get('input[placeholder="Nome"]').should('contain', 'Por favor, preencha este campo')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)


    })

    it('Cadastrar novo usuário com email já cadastrado', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })
        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()
        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Teste')
        cy.get('input[placeholder="Email"]').type("Teste@teste.com")
        cy.get('input[placeholder="Telefone"]').type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').type("2000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

         // clicar fora do campo de empresa
        cy.get('div[class="ReactModal__Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

         //Verificar mensagem de erro no campo de email
        cy.get('input[placeholder="Email"]').should('contain', 'Email já cadastrado')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)

    })

    it('Cadastrar novo usuário com telefone já cadastrado', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })
        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()
        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Teste')
        cy.get('input[placeholder="Email"]').type("Teste@teste.com")
        cy.get('input[placeholder="Telefone"]').type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').type("2000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

         // clicar fora do campo de empresa
        cy.get('div[class="ReactModal__Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

            //Verificar mensagem de erro no campo de telefone
        cy.get('input[placeholder="Telefone"]').should('contain', 'Telefone já cadastrado')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)
    })

    it('Cadastrar novo usuário com email inválido', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })
        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()
        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Teste')
        cy.get('input[placeholder="Email"]').type("Teste")
        cy.get('input[placeholder="Telefone"]').type("5583991184598")
        cy.get('input[placeholder="Cidade de nascimento"]').type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').type("2000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

         // clicar fora do campo de empresa
        cy.get('div[class="ReactModal__Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo de email
        cy.get('input[placeholder="Email"]').should('contain', 'Email inválido')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)
    })

    it('Cadastrar novo usuário com telefone inválido', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })
        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()
        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Teste')
        cy.get('input[placeholder="Email"]').type("Teste@teste.com")
        cy.get('input[placeholder="Telefone"]').type("12341123412342342")
        cy.get('input[placeholder="Cidade de nascimento"]').type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').type("2000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

         // clicar fora do campo de empresa
         cy.get('div[class="ReactModal__Content ReactModal__Content--after-open react-modal-content"]').click()
         cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo de telefone
        cy.get('input[placeholder="Telefone"]').should('contain', 'Telefone inválido')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)
    })

    it('Cadastrar novo usuário com data inválida', () => {
        cy.visit('http://localhost:5400/')
        
        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()

        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })

        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Teste')
        cy.get('input[placeholder="Email"]').type("Teste@teste.com")
        cy.get('input[placeholder="Telefone"]').type("12341123412342342")
        cy.get('input[placeholder="Cidade de nascimento"]').type("Teste")
        cy.get('input[placeholder="Data de nascimento"]').type("20000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()

         // clicar fora do campo de empresa
         cy.get('div[class="ReactModal__Content ReactModal__Content--after-open react-modal-content"]').click()
         cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo de data
        cy.get('input[placeholder="Data de nascimento"]').should('contain', 'Data inválida')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)

    })

    it('Cadastrar novo usuário com cidade de nascimento inválida', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })
        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()
        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Teste')
        cy.get('input[placeholder="Email"]').type("Teste@teste.com")
        cy.get('input[placeholder="Telefone"]').type("12341123412342342")
        cy.get('input[placeholder="Cidade de nascimento"]').type("123")
        cy.get('input[placeholder="Data de nascimento"]').type("20000-01-01")

        // Escolher a empresa
        cy.get('#search_input').click()
        cy.get('li[class="option  highlightOption highlight  "]').click()
 
        // clicar fora do campo de empresa
        cy.get('div[class="ReactModal__Content ReactModal__Content--after-open react-modal-content"]').click()
        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro no campo de cidade
        cy.get('input[placeholder="Cidade de nascimento"]').should('contain', 'Cidade inválida')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)
    })

    it('Cadastrar novo usuário com empresa inexistente', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })
        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()
        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Teste')
        cy.get('input[placeholder="Email"]').type("Teste@teste.com")
        cy.get('input[placeholder="Telefone"]').type("12341123412342342")
        cy.get('input[placeholder="Cidade de nascimento"]').type("123")
        cy.get('input[placeholder="Data de nascimento"]').type("20000-01-01")

        // Digitar o nome da empresa
        cy.get('#search_input').type('Teste')

        cy.get('button').contains('Salvar').click()

        //Verificar mensagem de erro ao nao encontrar a empresa
        cy.get('#swal2-html-container').should('have.text', 'Insira as empresas do usuário!')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)
    })

    it('Cadastrar novo usuário com data futura', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })
        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()
        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Teste')
        cy.get('input[placeholder="Email"]').type("Teste@teste.com")
        cy.get('input[placeholder="Telefone"]').type("12341123412342342")
        cy.get('input[placeholder="Cidade de nascimento"]').type("123")
        cy.get('input[placeholder="Data de nascimento"]').type("2111-01-01")

        // Digitar o nome da empresa
        cy.get('#search_input').type('Teste')

        cy.get('button').contains('Salvar').click()

        //Verificar erro ao inserir data futura
        cy.get('input[placeholder="Data de nascimento"]').should('contain', 'Data inválida')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)
    })

    it('Cadastrar novo usuário com data de nascimento muito antiga', () => { 
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })
        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()
        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Teste')
        cy.get('input[placeholder="Email"]').type("Teste@teste.com")
        cy.get('input[placeholder="Telefone"]').type("12341123412342342")
        cy.get('input[placeholder="Cidade de nascimento"]').type("123")
        cy.get('input[placeholder="Data de nascimento"]').type("0001-01-01")

        // Digitar o nome da empresa
        cy.get('#search_input').type('Teste')

        cy.get('button').contains('Salvar').click()

        //Verificar erro ao inserir data futura
        cy.get('input[placeholder="Data de nascimento"]').should('contain', 'Data inválida')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)
    })

    it('Cadastrar novo usuário com data de nascimento com mais que 4 digitos no ano', () => {
        cy.visit('http://localhost:5400/')
        // Quantidade de usuarios cadastrados
        let qtd;
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').then(($el) => {
            qtd = $el.length
        })
        // Clicar no botão de adicionar novo usuário
        cy.get('#new-user').click()
        // Preencher os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Teste')
        cy.get('input[placeholder="Email"]').type("Teste@teste.com")
        cy.get('input[placeholder="Telefone"]').type("12341123412342342")
        cy.get('input[placeholder="Cidade de nascimento"]').type("123")
        cy.get('input[placeholder="Data de nascimento"]').type("000100-01-01")

        // Digitar o nome da empresa
        cy.get('#search_input').type('Teste')

        cy.get('button').contains('Salvar').click()

        //Verificar erro ao inserir data futura
        cy.get('input[placeholder="Data de nascimento"]').should('contain', 'Data inválida')

        // Verificar se a quantidade de usuários cadastrados é a mesma
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length', qtd)
    })
})


describe('Botão de excluir usuário', () =>{
    it('Verificar se o botão de excluir usuário está visível', () => {
        cy.visit('http://localhost:5400/')

        // Verificar se há usuários cadastrados
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length.greaterThan', 0)
        // Verifica se o botão está visível na tela
        cy.get('img[alt="delete"]').should('be.visible')

        
    })
    it('Verificar se o botão de excluir usuário está funcionando', () => {
        cy.visit('http://localhost:5400/')

        // Verificar se há usuários cadastrados
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length.greaterThan', 0)
        // Clicar no botão de exclusão
        cy.get('img[alt="delete"]').first().should('be.visible').click()

        // Verifica se o modal está visível na tela
        cy.get('#swal2-html-container').should('have.text', 'Usuário deletado com sucesso!')
    })

})


describe('Botão de editar usuário', () => {
    it('Verificar se o botão de editar usuário está visível', () => {
        cy.visit('http://localhost:5400/')

        // Verificar se há usuários cadastrados
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length.greaterThan', 0)
        // Verifica se o botão está visível na tela
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').should('be.visible')

        
    })

    it('Verificar se o botão de editar usuário está funcionando', () => {
        cy.visit('http://localhost:5400/')

        // Verificar se há usuários cadastrados
        cy.get('div[class="sc-gsDKAQ JSdkd"] > table > tbody > tr').should('have.length.greaterThan', 0)
        // Clicar no botão de edição
        cy.get('img[src="/static/media/edit.c616ad0b.png"]').first().should('be.visible').click()

        // Verifica se o modal está visível na tela
        cy.get('.ReactModal__Body--open').should('be.visible')
    })
})

describe('Botão de adicionar novo usuário', () => {
    it('Verificar se o botão de adicionar novo usuário está visível', () => {
        cy.visit('http://localhost:5400/')

        // Verifica se o botão está visível na tela
        cy.get('#new-user').should('be.visible')
    })

    it('Verificar se o botão de adicionar novo usuário está funcionando', () => {
        cy.visit('http://localhost:5400/')

        // Verifica se o botão está visível na tela
        cy.get('#new-user').should('be.visible')
        // Click no botão
        cy.get('#new-user').click()

        // Verifica se o modal está visível na tela
        cy.get('.ReactModal__Body--open').should('be.visible')
        // Verifica se o titulo do modal está correto
        cy.get('.ReactModal__Content').get('h2').should('have.text', 'Cadastrar novo usuário')

    })
})




