/// <reference types="Cypress" />
import {Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Given ('User should redirect to login page if not authenticated',(dataTable)=>{
    cy.get('.mat-form-field.ng-tns-c37-0 > .mat-form-field-wrapper > .mat-form-field-flex').type(dataTable.rawTable[1][0])
    cy.get('#password').type(dataTable.rawTable[1][1])
    cy.get('.mat-card-content > .mat-focus-indicator').click()
    cy.get('.login-header').should('include.text', 'Event Manager Login')
})

When ('User should view dashboard if authenticated', (dataTable)=>{
    cy.get('.mat-form-field.ng-tns-c37-0 > .mat-form-field-wrapper > .mat-form-field-flex').clear().type(dataTable.rawTable[1][0])
    cy.get('#password').clear().type(dataTable.rawTable[1][1])
    cy.get('.mat-card-content > .mat-focus-indicator').click()
})

And ('user should view notification message states no registered event found',()=>{
    cy.get('.mat-card-content').should('be.visible', 'No registered event has been found!!')
    cy.get('.mat-button-wrapper').click()
    cy.get('#name').type('piton')
    cy.get('#description').type('test')
    cy.get('.mat-datepicker-toggle-default-icon').click()
    cy.get('.mat-calendar-body-active').click()
    cy.wait(1000)
    cy.get('#mat-input-5').type('berah')
    cy.get('#mat-input-6').type('zulem')
    cy.get('#mat-input-7').type('zulkifergin26@gmail.com')
    cy.get('.mat-button-base.mat-flat-button.mat-primary > .mat-button-wrapper').click()
})

And ('User should be able navigate edit event when click the edit event button',()=>{
    cy.get('.mat-primary').click()
    cy.get('#name').clear().type('piton')
    cy.get('#description').clear().type('test')
    cy.get('.mat-datepicker-toggle-default-icon').click()
    cy.get('.mat-calendar-body-active').click()
    cy.get('#mat-input-11').clear().type('zulem')
    cy.get('#mat-input-12').clear().type('berah')
    cy.get('.mat-snack-bar-container').should('be.visible')
    cy.get('.mat-button-base.mat-flat-button.mat-primary > .mat-button-wrapper').click()
    cy.wait(1000)
    cy.get('.mat-primary').click()
    cy.get('#name').type('piton')
    cy.get('#description').type('test')
    cy.get('.mat-datepicker-toggle-default-icon').click()
    cy.get('.mat-calendar-body-active').click()
    cy.get('#mat-input-17').clear().type('zulem')
    cy.get('#mat-input-18').clear().type('berah')
    cy.get('#mat-input-19').clear().type('zulkifergin26@gmail.com')
    cy.get('.mat-snack-bar-container').should('be.visible')
    cy.get('[style="display: flex; align-items: center; justify-content: end; margin-top: 20px;"] > .mat-focus-indicator').click()
})


And ('User should be able to view event participants', ()=>{
    cy.wait(2000)
    cy.get('.mat-warn > .mat-button-wrapper > .mat-icon').click()
    cy.get('.mat-dialog-title').should('contain.text', 'Participiants')
    cy.reload()
    
})

And ('User should be able to delete event when click the delete button', ()=>{
    cy.wait(1000)
    cy.get('tbody tr:nth-child(1) td:nth-child(5) button:nth-child(2) span:nth-child(1) mat-icon:nth-child(1)').click()
})