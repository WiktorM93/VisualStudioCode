
describe("test nagrania 1", () => {
  it("tests test nagrania 1", () => {
    cy.viewport(811, 607);
    cy.visit("http://www.automationpractice.pl/index.php?");
    cy.get("li.sfHover > a").click();
    cy.location("href").should("eq", "undefined");
    cy.get("li.sfHover li:nth-of-type(1) > a").click();
    cy.location("href").should("eq", "http://www.automationpractice.pl/index.php?id_category=9&controller=category");
    cy.get("#center_column img").click();
    cy.location("href").should("eq", "http://www.automationpractice.pl/index.php?id_product=3&controller=product");
    cy.get("#group_1").click();
    cy.get("#group_1").type("2");
    cy.get("#send_friend_button").click();
    cy.get("#friend_name").click();
    cy.get("#friend_name").type("Tomaszek");
    cy.get("#friend_email").type("tomaszek@");
    cy.get("#friend_email").type("tomaszek@wp.pl");
    cy.get("div.fancybox-overlay span").click();
    cy.get("div.fancybox-wrap input").click();
  });
});
//# recorderSourceMap=BCBDBEBFCHCJCLBMBNBOBPBQAQAQBRARBSBTB
