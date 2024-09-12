/// <reference types="cypress" />

describe("E2E - Wgrywanie pliku", () => {
    it("Wgrywanie pliku do inputa w Contact Us", () => {
        cy.visit("/index.php?controller=contact")
        //Wskazanie ścieżki pliku, ".." to wyjście do poprzedniego folderu (bo teraz jestem w /integration, a plik mam w /fixtures )
        cy.get("#fileUpload").attachFile("../fixtures/burak.jpg")
        //Potwierdzenie, że plik poszedł na stronę
        cy.get("span.filename").should("contain", "burak.jpg")
    })
})