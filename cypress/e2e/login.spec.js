describe('Login Page (smoke)', () => {
    it('should load the app base URL', () => {
cy.visit('/', { failOnStatusCode: false })
        cy.url().should('include', '/apps')
    })
})


