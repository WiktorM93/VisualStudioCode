/// <reference types="cypress" />

//import alertPage from "../support/page-object/alertPage";
describe("E2E - Alerty", () => {
    it("Test związany z alertem", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        // alertPage.clickOnBtnAlert1();
        // alertPage.verifyAlertText();
        //cy.get("#alert").click();
        //Weryfikowanie czy alert zawiera porządaną treść
        cy.on("window:alert", tresc => {
            //Wykorzystanie asercji (alert tylko z treścią, bez przycisków)
           expect(tresc).to.equal("Przykładowa treść alertu")
        })
    })
    //Alert z przyciskami (ok, anuluj itp.)
    it("Alert confirm", () => {
        // alertPage.clickOnBtnAlert2();
        // alertPage.verifyAlertConfirmText ();
       cy.get("#alert-confirm").click();
        cy.on("window:confirm", tresc => {
           expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
        })
        cy.on("window:confirm", () => false)
    })
})