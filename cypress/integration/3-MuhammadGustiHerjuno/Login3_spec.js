
context('Login', () =>{
    it('Sekanrio Login',() =>{
        //Muhammad Gusti Herjuno (18)
        //Login Test
        //Scenario 3 (invalid username & valid password)
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test=username]').type('salah')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()

    })
})