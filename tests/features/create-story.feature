Feature: Create new story
  As a writer
  I want to start a new story
  So that I can organize my ideas in a structured workspace

  #
  # HAPPY PATH
  #
  Scenario: Open new story modal from welcome page
    Given I am on the welcome page
    When I click on the button with id 'new-story-button'
    Then I should see a modal form with id 'new-story-modal'
    And the modal should have a field with id "story-title-input"
    And the modal should have a field with id "brief-description-input"
    And the modal should have a button with id "create-story-button"
    And the modal should have a button with id "cancel-button"
