Feature: US001 performs user login operations
    Scenario: TC001 login page must include username password and login
    Given login homepage
    And confirms that is on the user login page
    And confirms that the username box is visible
    And confirms that the password box is visible
    And confirms that the login button is visible
    Given login homepage
    And user clicks login button
    And confirms that the there is a validation error below the user username box
    And confirms that the there is a validation error below the password box
    And user fills the username box
    And user fills the password box
    And user clicks the login button
    Given user should got to the panel and see the welcome text