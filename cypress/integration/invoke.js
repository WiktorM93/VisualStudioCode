/// <reference types="cypress" />

describe("E2E - Metoda invoke", () => {
    it("Invoke", () => {
        cy.visit("/")
        cy.get('[title="Contact us"]').invoke("text").then(tekst => {
           //Żeby nam zwrócił zawartość tego elementu (tekstową)
            cy.log(tekst)
        })

        //Uzyskanie dostępu do wartości atrybutu
        cy.get('[title="Contact us"]').invoke("attr", "href").then(link => {
            cy.log(link)
        })

        cy.get('[title="Contact us"]').invoke("attr", "title").then(title => {
            cy.log(title)
        })    
        //Pobieranie wartości value (trzeba otworzyć jeszcze Properties w konsoli strony, "prop" określa properties a po po przecinku które z properties)
cy.get("#search_query_top").type("Przykładowa wartość").invoke("prop", "value").then(wartosc => {
    cy.log(wartosc)
    })

})
})