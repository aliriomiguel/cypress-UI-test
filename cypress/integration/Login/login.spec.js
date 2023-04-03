When("Perform login", () => {
    cy.visit("https://the-internet.herokuapp.com/login")

    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('button').click()
    
    cy.wait(3000)

    cy.get("h2").should('have.text'," Secure Area")
    cy.get("h4").should('have.text',"Welcome to the Secure Area. When you are done click logout below.")

});
 