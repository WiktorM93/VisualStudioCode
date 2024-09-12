/// <reference types="cypress" />

import SelectPage from "../support/page-object/selectPage";
describe("E2E - Akcja wybrania opcji Select", () => {
    it("Wybieranie opcji", () => {
        cy.visit("/index.php?id_category=3&controller=category");
        
        // Wybieranie po nazwie
        cy.get("#selectProductSort").select("In stock")
        
        //Wybieranie po value
        cy.get("#selectProductSort").select("price:asc")

        //Wybieranie po indeksach (czyli który od góry (pierwsza wartość to "0", dalej "1,2,3...""))
        cy.get("#selectProductSort").select(7)
    })
        //Wybieranie wszystkich wartości z listy (defacto tak najczęściej się będzie testowało)
        it.only("Wybieranie wszystkich opcji", () => {
            cy.visit("/index.php?id_category=3&controller=category");
            SelectPage.selectAllOption();
            //Poniżej zakomentowane, bo wprowadziłem zamiast tego page object SelectPage, zadeklarowany w folderze support
            // cy.get("#selectProductSort").then(select => {
            //     cy.wrap(select).find("option").each(opcja => {
            //         cy.wrap(select).select(opcja.text())
            //     })
            // })
        })
})
