context('Detail', () =>{
    it('Sekanrio Detail Produk',() =>{
       cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test=username]').type('problem_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('#item_0_title_link > .inventory_item_name').click()



    })
})