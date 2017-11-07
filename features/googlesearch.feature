Feature: GoogleSearch
  As an internet surfer
  I want to receive relevant results from a search

  Scenario Outline: Search
    Given the Google home page
    When I search for <query>
    And click on the top link
    Then I will be redirected to <website>

    Examples:
      |         query |                                   website |
      |  'cucumberjs' | 'https://github.com/cucumber/cucumber-js' |
      | 'webdriverio' |                    'http://webdriver.io/' |