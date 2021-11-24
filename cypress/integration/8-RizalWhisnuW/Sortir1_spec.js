context('Sortir', () =>{
    it('Sekanrio Sortir',() =>{
       
cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=product_sort_container]').select('Name (A to Z)')

    })
})