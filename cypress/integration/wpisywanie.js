/// <reference types="cypress" />

describe("E2E - Akcja wpisywania", () => {
    it("Wpisywanie wartości w pole", () => {
        cy.visit("/");
        // {enter} to wybranie elementu, może też być {backspace}, żeby zasymulować wciśnięcie backspace, "delay" to opóźnienie przy działaniach, tutaj akurat wpisywania literek
        //cy.get("#search_query_top").type("Przykładowy produkt {enter}", {delay: 500})
        //Zastosowałem poniżej wprowadzone komendy w pliku commands.js
        cy.searchPhrase("Nowy tekst", 1200)
    })
it("Czyszczenie wartości z pola input", () => {
    cy.get("#search_query_top").clear();
})
})