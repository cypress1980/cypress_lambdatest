/// <reference types="cypress" />
it.skip("Open the Url", () => {
  cy.visit(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );
});
it.skip("Login into the application", () => {
  cy.get('[id="input-email"]').type("lambdatest@yopmail.com");
  cy.get('[id="input-password"]').type("lambdatest");
  cy.get('[type="submit"]').eq(0).click();
});
it.skip("Click on Lambdatest Logo", () => {
  cy.get('[title="Poco Electro"]').click();
  cy.wait(5000);
});
it.skip("Scroll to bottom and Click on Product Verify prooduct 'iPod Touch' ", () => {
  cy.get('[title="iPod Touch"]').eq(0).scrollIntoView().click();
});
