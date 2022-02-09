describe('Eerste testen', () => {
    beforeEach(() => {
        cy.visit('https://sacdemostorage.z6.web.core.windows.net/index.html')
    })

    it('Log in', () => {
        cy.get('#logout').click()
        cy.get('#username').type('admin')
        cy.get('#password').type('superduper')
        cy.get('[onclick="login()"]').click()

        cy.get('#welcome h1').should('have.text', 'Welcome')
    })

    it('Show bear', () => {
        cy.get('#logout').click()
        cy.get('#username').type('admin')
        cy.get('#password').type('superduper')
        cy.get('[onclick="login()"]').click()
        cy.get('#welcome input').click()

        cy.get('#bear').should('be.visible')
    })

})