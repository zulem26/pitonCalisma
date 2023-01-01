Feature: US003 user dashboard

    Scenario: user can view the dashboard
    Given user go to url
    Given User should redirect to login page if not authenticated
    |Username|Password|
    |automationtest|1234567890|
    When User should view dashboard if authenticated
     |Username|Password|
    |automationtest|123456789|
    And user should view notification message states no registered event found
    And User should be able navigate edit event when click the edit event button
    And User should be able to view event participants
    And User should be able to delete event when click the delete button