/// <reference types="cypress" />

describe("E2E - Akcje kliknięcia", () => {
    it("Kliknięcie w element", () => {
        cy.visit("/")
        cy.contains('[title="Contact Us"]', 'Contact us').click();
        cy.get('[title="Return to home"]').click();
    })
})