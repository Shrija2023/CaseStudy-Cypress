class HomePage_PO
{
    visitHomepage() {
        cy.visit(Cypress.env("OrangeHRM_HomePage"))
        cy.wait(6000)
    }

    Login() {
        cy.wait(6000)
        cy.get('input[name="username"][placeholder="Username"]').type('Admin')
        cy.wait(6000)
        cy.get('input[name="password"][placeholder="Password"]').type('admin123')
        cy.get('.oxd-button').click()
    }
}
export default HomePage_PO;