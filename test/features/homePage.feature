Feature: verify Home Page of Abtracta website

    Scenario: verify logo of Abstracta on HomePage
        Given user is on home page
        When user should see Abtracta Logo
        Then user clicks on it