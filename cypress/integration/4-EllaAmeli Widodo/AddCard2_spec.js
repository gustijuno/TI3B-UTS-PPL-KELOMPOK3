context('AddCard', () =>{
    it('Sekanrio AddCard',() =>{
        cy.visit('https://www.saucedemo.com/')
        get('[data-test=username]').type('standard_user')
                cy.get('[data-test=password]').type('secret_sauce')
                cy.get('[data-test=login-button]').click()
                cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
                cy.get('.shopping_cart_badge').click()
                cy.get('[data-test=remove-sauce-labs-backpack]').click

    })
})