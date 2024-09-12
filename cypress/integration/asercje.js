/// <reference types="cypress" />

describe("E2E - Asercje", () => {
    it("Asercje expect oraz should", () => {
        cy.visit("/")
        
        //Weryfikacja tekstu po "should"
        cy.get('a[title="Contact us"]').should("contain", "Contact us");

        //Po "expect"
        cy.get('a[title="Contact us"]').then(zakladka => {
            expect(zakladka).to.contain("Contact us")
        })

        //Weryfikacja czy ta zakładka nie zawiera danego tekstu
        cy.get('a[title="Contact us"]').should("not.contain", "Kontakt")
        //Inaczej zapisane
        cy.get('a[title="Contact us"]').then(zakladka => {
            expect(zakladka).not.to.contain("Piotruś")
        })

        //Weryfikacja czy znacznik posiada daną klasę
        cy.get("#search_query_top").should('have.class', "form-control")
        //Inaczej zapisane
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.class("form-control")
        })

        //Czy element jest widoczny? Np. w sytuacji kiedy chcemy sprawdzić, czy wgl się wczytał jakiś element
        cy.get("#search_query_top").should("be.visible");

        //Czy nie jest widoczny?
        //cy.get("#search_query_top").should("not.be.visible");

        //Innymi słowy
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.be.visible
    })
    //Weryfikacja ilości pobranych elementów
    cy.get("ul.sf-menu").find("li").should("have.length", 16)
    cy.get("ul.sf-menu").find("li").then(zakladki => {
        expect(zakladki).to.have.length(16)
    })
    //Weryfikacja wartości "css" danego elementu (w nawiasie podajemy komendt po sobie, czyli na tym przykładzie sprawdzamy czy CSS, w atrybucie LINE-HEIGHT ma wartość 45PX)
    cy.get("#search_query_top").should("have.css", "line-height", "18.5714px")

    //Innymi słowy
    cy.get("#search_query_top").then(wyszukiwarka => {
        expect(wyszukiwarka).to.have.css("line-height", "18.5714px")
    })
})
})