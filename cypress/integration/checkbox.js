/// <reference types="cypress" />

describe("E2E - Akcje kliknięcie checkbox", () => {
    it("Checkbox", () => {
        cy.visit("/index.php?id_category=3&controller=category")
       cy.get("#ul_layered_category_0").find("input").then(checkbox => {
        cy.get(checkbox).eq(0).check();
        //Force żeby się upewnić, że zostanie zaznaczony
        //cy.get(checkbox).eq(1).check({force: true});
        cy.get(checkbox).eq(1).check().invoke("prop", "checked").then(zaznaczony => {
            cy.log(zaznaczony)
        })

       })
       //Zaznaczanie kilku checkboxów
       cy.get("#ul_layered_id_attribute_group_1").find("input").check();
    })
})