Feature: Demo Online Shop

Scenario: Customer navigation through product categories
  Given I am on the homepage
  When I click on "Phones"
  When I click on "Laptops"
  When I click on "Monitors"
  When I click on "Laptops"
  And I click on "Sony vaio i5"
  And I click on "Add to cart"
  Then I should see a confirmation pop-up
  Then I go to the homepage
  And I click on "Laptops"
  And I click on "Dell i7 8gb"
  And I click on "Add to cart"
  Then I should see a confirmation pop-up
  When I click on "Cart"
  And I delete "Dell i7 8gb" from cart
  And I click on "Place Order"
  And I fill in the form with valid data
  And I click on "Purchase" button
  Then I capture and log the purchase ID and amount
  And I assert that the purchase amount equals the expected value
  And I click on "OK"