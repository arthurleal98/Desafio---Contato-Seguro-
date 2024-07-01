
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
        cy.get('.ReactModal__Body--open').should('be.visible')
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




