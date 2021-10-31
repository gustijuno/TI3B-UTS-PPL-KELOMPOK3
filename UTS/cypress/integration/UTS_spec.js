
context('Cypress Demo-Login', () =>{
    it('UTS',() =>{
        //Muhammad Gusti Herjuno (18)
        //Login Test
        //Scenario 1 (valid username & valid password)
        //cy.visit('https://www.saucedemo.com/')
        //cy.get('[data-test=username]').type('standard_user')
        //cy.get('[data-test=password]').type('secret_sauce')
        //cy.get('[data-test=login-button]').click()

        //Scenario 2 (valid username & invalid password)
        //cy.visit('https://www.saucedemo.com/')
        //cy.get('[data-test=username]').type('standard_user')
        //cy.get('[data-test=password]').type('salah')
        //cy.get('[data-test=login-button]').click()

        //Scenario 3 (invalid username & valid password)
        //cy.visit('https://www.saucedemo.com/')
        //cy.get('[data-test=username]').type('salah')
        //cy.get('[data-test=password]').type('secret_sauce')
        //cy.get('[data-test=login-button]').click()

        //Scenario 4 (invalid username & invalid password)
        //cy.visit('https://www.saucedemo.com/')
        //cy.get('[data-test=username]').type('salah')
        //cy.get('[data-test=password]').type('salah')
        //cy.get('[data-test=login-button]').click()

        //Scenario 5 (username = locked_out_user & valid pssword)
        //cy.visit('https://www.saucedemo.com/')
        //cy.get('[data-test=username]').type('locked_out_user')
        //cy.get('[data-test=password]').type('salah')
        //cy.get('[data-test=login-button]').click()


        //Ella Amelia Widodo (11)
        //Add card test
        //skenario 1
                /*cy.get('[data-test=username]').type('standard_user')
                cy.get('[data-test=password]').type('secret_sauce')
                cy.get('[data-test=login-button]').click()
                cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
                cy.get('.shopping_cart_badge').click()*/

        //skenario 2
                /*cy.get('[data-test=username]').type('standard_user')
                cy.get('[data-test=password]').type('secret_sauce')
                cy.get('[data-test=login-button]').click()
                cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
                cy.get('.shopping_cart_badge').click()
                cy.get('[data-test=remove-sauce-labs-backpack]').click()*/

        //Skenario 3
                /*cy.get('[data-test=username]').type('problem_user')
                cy.get('[data-test=password]').type('secret_sauce')
                cy.get('[data-test=login-button]').click()
                cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
                cy.get('.shopping_cart_badge').click()*/

        //Skenario 4
                /*cy.get('[data-test=username]').type('problem_user')
                cy.get('[data-test=password]').type('secret_sauce')
                cy.get('[data-test=login-button]').click()
                cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
                cy.get('.shopping_cart_badge').click()
                cy.get('[data-test=remove-sauce-labs-backpack]').click()*/

        //Skenario 5
                /*cy.get('[data-test=username]').type('locked_out_user')
                cy.get('[data-test=password]').type('secret_sauce')
                cy.get('[data-test=login-button]').click()
                cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
                cy.get('.shopping_cart_badge').click()
                cy.get('[data-test=remove-sauce-labs-backpack]').click()*/
     

        //Nada Alya Kamila (19)
        //Logout test
      

        //Zidan Shabira (26)
        //Checkout test

        // skenario 1 test backpack
                /*cy.visit('https://www.saucedemo.com/')
                cy.get('[data-test=username]').type('standard_user')
                cy.get('[data-test=password]').type('secret_sauce')
                cy.get('[data-test=login-button]').click()
                cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
                cy.get('.shopping_cart_link').click()
                cy.get('[data-test=checkout]').click()
                cy.get('[data-test=firstName]').type('Zidan')
                cy.get('[data-test=lastName]').type('Shabira')
                cy.get('[data-test=postalCode]').type('000')
                cy.get('[data-test=continue]').click()
                cy.get('[data-test=finish]').click()
                cy.get('[data-test=back-to-products]').click()*/
        
                // skenario 2 test kaos onesie
                /*cy.visit('https://www.saucedemo.com/')
                cy.get('[data-test=username]').type('standard_user')
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
                cy.get('[data-test=back-to-products]').click()*/
        
                // skenario 3 test menggunakan username locked_out_user
        
                /*cy.visit('https://www.saucedemo.com/')
                cy.get('[data-test=username]').type('locked_out_user')
                cy.get('[data-test=password]').type('secret_sauce')
                cy.get('[data-test=login-button]').click()*/
        
                // skenario 4 menggunakan username performance_glitch_user
        
                /*cy.visit('https://www.saucedemo.com/')
                cy.get('[data-test=username]').type('performance_glitch_user')
                cy.get('[data-test=password]').type('secret_sauce')
                cy.get('[data-test=login-button]').click()
                cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
                cy.get('.shopping_cart_link').click()
                cy.get('[data-test=checkout]').click()*/
        
                // skenario 5 menggunakan username problem_user
                /*cy.visit('https://www.saucedemo.com/')
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
                cy.get('[data-test=back-to-products]').click()*/

        
        //Rizal Whisnu Wiratama (23)
        //Sortir produk test  

        //Scenario 1
        //cy.visit('https://www.saucedemo.com/')
        //cy.get('[data-test=username]').type('standard_user')
        //cy.get('[data-test=password]').type('secret_sauce')
        //cy.get('[data-test=login-button]').click()
        //cy.get('[data-test=product_sort_container]').select('Name (A to Z)')

        //Scenario 2
        //cy.visit('https://www.saucedemo.com/')
        //cy.get('[data-test=username]').type('Locked_Out_User')
        //cy.get('[data-test=password]').type('secret_sauce')
        //cy.get('[data-test=login-button]').click()
        //cy.get('[data-test=product_sort_container]').select('Name (Z to A)')

        //Scenario 3
        //cy.visit('https://www.saucedemo.com/')
        //cy.get('[data-test=username]').type('problem_user')
        //cy.get('[data-test=password]').type('secret_sauce')
        //cy.get('[data-test=login-button]').click()
        //cy.get('[data-test=product_sort_container]').select('Price (low to high)')

        //Scenario 4\
        //cy.visit('https://www.saucedemo.com/')
        //cy.get('[data-test=username]').type('performance_glitch_user')
        //cy.get('[data-test=password]').type('secret_sauce')
        //cy.get('[data-test=login-button]').click()
        //cy.get('[data-test=product_sort_container]').select('Price (high to low)')


        //Risky Wisnu Oktovianto (22)
        //Detail Product test

    })
})