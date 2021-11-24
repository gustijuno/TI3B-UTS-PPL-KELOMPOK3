
context('Login', () =>{
    it('Sekanrio Login',() =>{
        //Muhammad Gusti Herjuno (18)
        //Login Test
        //Scenario 1 (valid username & valid password)
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()



    })
})