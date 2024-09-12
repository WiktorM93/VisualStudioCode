/// <reference types="cypress" />

describe("E2E - Scrollowanie - najechanie", () => {
    it("Najechanie na dany element", () => {
        cy.visit("/")
        //Cypress najeżdża myszką, wyświetlają się nowe pola i klika w jedno z nich
        cy.get('a[title="Dresses"]').eq(1).trigger("focus")
        cy.get('li.sfHover a[title="Summer Dresses"]').click();
    })
    it("Scrollowanie do boxa Special", () => {
        cy.get('a[title="Specials"]').first().scrollIntoView();
    })
})