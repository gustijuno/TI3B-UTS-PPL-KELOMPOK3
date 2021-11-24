
context('Login', () =>{
    it('Sekanrio Login',() =>{
        //Muhammad Gusti Herjuno (18)
        //Login Test
        //Scenario 5 (username = locked_out_user & valid pssword)
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test=username]').type('locked_out_user')
        cy.get('[data-test=password]').type('salah')
        cy.get('[data-test=login-button]').click()

    })
})