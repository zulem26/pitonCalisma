/// <reference types="Cypress" />
import {Given, And, Then } from "cypress-cucumber-preprocessor/steps";


Given ('user go to url', ()=>{
    cy.visit('https://e2e-assessment.piton.com.tr')
})

Given ('user logs in with the given information', (dataTable)=>{
    cy.get('.mat-form-field.ng-tns-c37-0 > .mat-form-field-wrapper > .mat-form-field-flex').type(dataTable.rawTable[1][0])
    cy.get('#password').type(dataTable.rawTable[1][1])
    cy.get('.mat-card-content > .mat-focus-indicator').click()
})

When ('user creates an event and displays the event form', ()=>{
    cy.get('.mat-button-wrapper').click()

    cy.get('.section-title').should('contain.text', 'Create')
})

And ('displays errors when the user clicks the create button without filling out the event form', ()=>{
    cy.get('[style="display: flex; align-items: center; justify-content: end; margin-top: 20px;"] > .mat-focus-indicator').click()
    cy.get('#mat-error-2').should('include.text', 'Event name field is required')
    cy.get('#mat-error-3').should('include.text', 'Please choose a valid date')
    cy.get('#mat-error-4').should('include.text', 'Participant name is required')
    cy.get('#mat-error-5').should('include.text', 'Participant last name is required')
    cy.get('#mat-error-6').should('include.text', 'Please enter email or phone number')
})

And ('User should be able to add new participant when click the Add Participant button', ()=>{
    cy.get('#name').type('piton')
    cy.get('#description').type('test')
    cy.get('.mat-datepicker-toggle-default-icon').click()
    cy.get('.mat-calendar-body-active').click()
    cy.get('#mat-input-5').type('zulem')
    cy.get('#mat-input-6').type('berah')
    cy.get('#mat-input-7').type('zulkifergin26@gmail.com')
    cy.get('.mat-button-base.mat-flat-button.mat-primary > .mat-button-wrapper').click()
})

And ('User should view error message if removes all participants', ()=>{
    cy.get('.mat-accent > .mat-button-wrapper > .mat-icon').click()
    cy.get('.mat-card-content').should('be.visible', 'No registered event has been found!!')
})

And ('User should be able to create new event if fills all required fields and redirect to dashboard page with create successful message', ()=>{
    cy.get('.mat-button-wrapper').click()
    cy.get('#name').type('piton')
    cy.get('#description').type('test')
    cy.get('.mat-datepicker-toggle-default-icon').click()
    cy.get('.mat-calendar-body-active').click()
    cy.wait(1000)
    cy.get('#mat-input-11').type('berah')
    cy.get('#mat-input-12').type('zulem')
    cy.get('#mat-input-13').type('zulkifergin26@gmail.com')
    cy.get('.mat-button-base.mat-flat-button.mat-primary > .mat-button-wrapper').click()
    
    
})

And ('User should be able to edit event. When user click the edit button all event fields must be filled according to editing event', ()=>{
    cy.get('.mat-primary').click()
    cy.get('#name').clear().type('piton')
    cy.get('#description').clear().type('test')
    cy.get('.mat-datepicker-toggle-default-icon').click()
    cy.get('.mat-calendar-body-active').click()
    cy.get('#mat-input-17').clear().type('zulem')
    cy.get('#mat-input-18').clear().type('berah')
    cy.get('.mat-button-base.mat-flat-button.mat-primary > .mat-button-wrapper').click()
})

And ('User should be able to update event if required fields filled and redirect to dashboard page with update successful message',()=>{
    cy.get('.mat-snack-bar-container').should('be.visible')
    cy.get('.mat-card-title').should('include.text', 'Events')
})
