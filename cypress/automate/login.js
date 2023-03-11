///<reference types = "Cypress"/>
///<reference types = "@cypress/xpath"/>

describe('New Tours', () => {
    before(() => {
        cy.fixture('example').then(function(data) {
            globalThis.data = data
        })
    });
    beforeEach(() => {
        cy.visit('https://demo.guru99.com/test/newtours/')
    });
    it('Register & Login', () => {
        cy.get('[width="77"] > a').click()
        cy.get('input[name="firstName"]').type(data.firstName)
        cy.get('input[name="lastName"]').type(data.lastName)
        cy.get('input[name="phone"]').type(data.phone)
        cy.get('input[name="userName"]').type(data.userName)
        cy.get('input[name="address1"]').type(data.address1)
        cy.get('input[name="city"]').type(data.city)
        cy.get('input[name="state"]').type(data.state)
        cy.get('input[name="postalCode"]').type(data.postalCode)
        cy.get('select').select('INDIA').should('have.value', 'INDIA')
        cy.get('input[name="email"]').type(data.userName)
        cy.get('input[name="password"]').type(data.password)
        cy.get('input[name="confirmPassword"]').type(data.password)
        cy.get('input[name="submit"]').click()
        cy.get('a[href*="login.php"]').click()
        cy.get('input[name="userName"]').type(data.userName)
        cy.get('input[name="password"]').type(data.password)
        cy.get('input[name="submit"]').click()
    });
    it('Book a Flight', () => {
        cy.get('input[name="userName"]').type(data.userName)
        cy.get('input[name="password"]').type(data.password)
        cy.get('input[name="submit"]').click()
        cy.get('a[href*="reservation.php"]').click()
        cy.get('[value="oneway"]').check()
        cy.get('select[name="passCount"]').select(data.passCount)
        cy.get('select[name="fromPort"]').select(data.fromPort)
        cy.get('select[name="fromMonth"]').select(data.fromMonth)
        cy.get('select[name="fromDay"]').select(data.fromDay)
        cy.get('select[name="toPort"]').select(data.toPort)
        cy.get('select[name="toMonth"]').select(data.toMonth)
        cy.get('select[name="toDay"]').select(data.toDay)
        cy.get('[value="First"]').check()
        cy.get('select[name="airline"]').select(data.airline)
        cy.get('td > input').click()
        cy.get('img[width="118"][height="23"]').click()
    });
    it('Book a Hotel', () => {
        cy.get('input[name="userName"]').type(data.userName)
        cy.get('input[name="password"]').type(data.password)
        cy.get('input[name="submit"]').click()
        cy.get('a[href*="support.php"]').contains('Hotels').click()
        cy.url().should('include','support.php')
    });
});