/// <reference types="Cypress" />
import {Given, And, Then } from "cypress-cucumber-preprocessor/steps";


const username = "automationtest"
const password = "123456789"



Given('login homepage', ()=>{
    cy.visit('https://e2e-assessment.piton.com.tr')
    cy.clearCookies()
})

And('confirms that is on the user login page', ()=>{
    cy.title().should('eq', 'EventManagement')
})

And ('confirms that the username box is visible', ()=>{
    cy.get('#username').should('be.visible')

})

And ('confirms that the password box is visible', ()=>{
cy.get('#password').should('be.visible')
})

And ('confirms that the login button is visible', ()=>{
    cy.get('.mat-card-content > .mat-focus-indicator').should('be.visible')
})



    And ('user clicks login button', ()=>{
       
        cy.get('.mat-button-wrapper').click()
    })

    And ('confirms that the there is a validation error below the user username box', ()=>{
        cy.get('#mat-error-0').should('be.visible')
    })


    And ('confirms that the there is a validation error below the password box',()=>{
    cy.get('#mat-error-1').should('be.visible')
    })

    And ('user fills the username box', ()=>{
        cy.get('#username').type(username)
    })

    And ('user fills the password box', ()=>{
        cy.get('#password').type(password)
    })

    And ('user clicks the login button', ()=>{
        cy.get('.mat-card-content > .mat-focus-indicator').click()
        cy.wait(1000)
        cy.get("mat-card[id='welcomeUserMessage'] strong").should('contain.text', 'Welcome')
    })

      
        Given ('user should got to the panel and see the welcome text', ()=>{
            //cy.get("mat-card[id='welcomeUserMessage'] strong").should('contain.text', 'Welcome')
        })
    
    

