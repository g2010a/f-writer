Feature: Create new story
  As a writer
  I want to start a new story
  So that I can organize my ideas in a structured workspace

  Scenario: Open new story modal from welcome page
    Given I am on the welcome page
    When I click on the "New Story" button
    Then I should see a modal form
    And the modal should have a field labeled "Story title"
    And the modal should have a field labeled "Brief description (optional)"
    And the modal should have a button labeled "Create Story"
    And the modal should have a button labeled "Cancel"
