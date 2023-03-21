class Link_PO
{
    link_click(links) {
        cy.contains(links).click();
    }
}
export default Link_PO;