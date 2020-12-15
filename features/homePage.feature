Feature: verify home page scenarios

    @SanityTest @Low
    Scenario: As a user, I want to verify Employee Distribution Chart on HomePage

        Given User login to the website
        When User is on the home page
        Then User see a pie chart
    @RegressionTest @High
    Scenario: As a user, I want to verify Leave Chart on HomePage

        Given I am on the home page
        Then I see Leave chart

    Scenario: As a user, I want to naviagte to User Roles page

        Given User navigates on the home page
        When User clicks on Admin tab
        Then User clicks on User Roles menu
        Then User naviagtes on User Roles page

