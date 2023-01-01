Feature: US002 the user operates in the event module

    Scenario: user in the event module
    Given user go to url
    Given user logs in with the given information
    |Username|Password|
    |automationtest|123456789|
    When user creates an event and displays the event form
    And displays errors when the user clicks the create button without filling out the event form
    And User should be able to add new participant when click the Add Participant button
    And User should view error message if removes all participants
    And User should be able to create new event if fills all required fields and redirect to dashboard page with create successful message
    And User should be able to edit event. When user click the edit button all event fields must be filled according to editing event
    And User should be able to update event if required fields filled and redirect to dashboard page with update successful message
