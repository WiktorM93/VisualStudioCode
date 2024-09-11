/// <reference types="cypress" />

describe("E2E - Lesson", () => {
    // it to każdy kolejny test case
    it("Lokalizatory", () => {
        cy.visit("/")

        //Po znaczniku
        cy.get("a");

        //Po identyfikatorze (najlepiej) - na początku "#"
        cy.get("#search_query_top")

        //Po klasie (na początku ".")
        cy.get(".form-control")

        //Po atrybutach (może być cokolwiek innego z opisu znacznika na stronie, atrybuty umieszcza się w nawiasach kwadratowych, pojedyncze apostrofy zamiast podwójnych bo apka nie wie co jest początkiem a co końcem)
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //Po dokładniejszym atrybucie, wraz z podaniem znacznika
        cy.get('input[placeholder="Search"]')

        //Pobieranie elementów po kilku atrybutach
        cy.get('[src="http://www.automationpractice.pl/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

        //Zalecana przez Cypress technika pobierania elementów (poprosić programistów o stosowanie atrybutów (np. data-cy="wyszukiwarka"))
        cy.get('[data-cy="wyszukiwarka"]')
    })
})
// .only czyli będzie wykonywany tylko ten, te powyżej już nie
it.only("Lokalizatory Część 2", () => {
    cy.visit("/");
    cy.contains("Shop now!");
    cy.contains('[title="Contact Us"]', 'Contact us');

    //po "rodzicu" atrybutu, "eq" oznacza który z tych atrybutów, o tej samej nazwie (może też być ".first()")
    cy.get("li").parents("#home-page-tabs").find("li").eq(1)
    cy.get("li").parents("#home-page-tabs").find("li").contains("Best sellers")



})