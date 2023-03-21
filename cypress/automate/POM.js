import HomePage_PO from "../support/pageObjects/OrangeHRM/HomePage_PO";
import Logout_PO from "../support/pageObjects/OrangeHRM/Logout_PO";
import Link_PO from "../support/pageObjects/OrangeHRM/Link_PO";

///<reference types = "Cypress"/>
describe('This is my first Test Suite', () => {
    const homepage_po = new HomePage_PO();
    const logout_po = new Logout_PO();
    const link_po = new Link_PO();

    beforeEach(function() {
        homepage_po.visitHomepage();    
        homepage_po.Login();
    });
    it('This is my first Test Case', () => {
        //cy.SelectName('Admin');
        cy.wait(6000)
        link_po.link_click('Admin');
        cy.wait(6000)
        logout_po.logout();
    })
});