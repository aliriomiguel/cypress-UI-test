let expectedPurchaseAmount;
var actualPurchaseAmount; 
  
Given("I am on the homepage", () => {
  cy.visit("https://www.demoblaze.com/index.html");
});

When("I click on {string}", (category) => {
  cy.contains(category).click();
});

And("I click on {string} button", (purchase) => {
  cy.contains(purchase).click();
});

Then("I should be on the {string} page", (category) => {
  cy.url().should("contain", category.toLowerCase());
});

When("I click on {string}", (product) => {
  cy.contains(product).click();
});

And('I click on "Add to cart"', () => {
  cy.contains("Add to cart").click();
});

Then("I should see a confirmation pop-up", () => {
  cy.on("window:alert", (alertText) => {
    expect(alertText).to.equal("Product added");
  });
});

Then('I go to the homepage', () => {
  cy.visit("https://www.demoblaze.com/index.html");
});

And('I delete {string} from cart', (product) => {
  cy.contains('td', product).parent().within($tr => {
      cy.get('td a').contains('Delete').click();
  });
  cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deletedItem');
  cy.wait('@deletedItem');
  cy.get('table').should('be.visible');
});

When('I click on "Place order"', () => {
  cy.wait(30000);
  amount = cy.get('#totalp').text();
  cy.log(amount);
  cy.contains("Place Order").click();
  cy.get('#orderModal').should('be.visible');
});

When('I fill in the form with valid data', () => {
  cy.get('#orderModal').should('be.visible');
  
  cy.wait(3000);
  cy.get("#name").type("John Doe");
  cy.get("#country").type("United States");
  cy.get("#city").type("New York");
  cy.get("#card").type("1234567890123456");
  cy.get("#month").type("12");
  cy.get("#year").type("2035");
});


Then('I capture and log the purchase ID and amount', () => {
  
  cy.wait(3000);
  cy.xpath('/html/body/div[10]/p/text()[1]').then(($content) => {
    var purchaseID = $content.text().split(' ');
    cy.log("Purchase ID: " + purchaseID[1]);
  });
  
  cy.xpath('/html/body/div[10]/p/text()[2]').then(($content) => {
    actualPurchaseAmount = $content.text().split(' ');
    cy.log("Actual Amount: " + actualPurchaseAmount[1]);
  });
});

Then('I assert that the purchase amount equals the expected value', () => {
  expectedPurchaseAmount = "790";
  expect(actualPurchaseAmount[1]).to.eq(expectedPurchaseAmount);
});