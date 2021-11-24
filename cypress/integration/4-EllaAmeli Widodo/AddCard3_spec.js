context('AddCard', () =>{
    it('Sekanrio AddCard',() =>{
        
        cy.get('[data-test=username]').type('problem_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_badge').click()
    })
})