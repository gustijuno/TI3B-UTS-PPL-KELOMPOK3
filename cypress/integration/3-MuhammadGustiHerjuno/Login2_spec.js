
context('Login', () =>{
    it('Sekanrio Login',() =>{
        //Muhammad Gusti Herjuno (18)
        //Login Test
        //Scenario 2 (valid username & invalid password)
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('salah')
        cy.get('[data-test=login-button]').click()


    })
})