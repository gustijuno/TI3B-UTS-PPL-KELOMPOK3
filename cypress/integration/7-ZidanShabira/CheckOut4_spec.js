context('Checkout', () =>{
    it('Sekanrio Checkout',() =>{
       
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test=username]').type('performance_glitch_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test=checkout]').click()

    })
})