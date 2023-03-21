class Logout_PO
{
    logout() {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.wait(6000)
        cy.get('.oxd-userdropdown-menu').find('.oxd-userdropdown-link').eq(3).contains('Logout').then((lastlink) => {
            cy.wait(6000)
            const linkname = lastlink.text()
            //you want me to print this where
            cy.log(linkname)
            cy.wrap(lastlink).click()
        })
        cy.wait(6000)
    }
}
export default Logout_PO;