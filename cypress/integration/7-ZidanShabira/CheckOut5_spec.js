context('Checkout', () =>{
    it('Sekanrio Checkout',() =>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test=username]').type('problem_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test=checkout]').click()
        cy.get('[data-test=firstName]').type('Zidan')
        cy.get('[data-test=lastName]').type('Shabira')
        cy.get('[data-test=postalCode]').type('000')
        cy.get('[data-test=continue]').click()
        cy.get('[data-test=finish]').click()
        cy.get('[data-test=back-to-products]').click()


    })
})