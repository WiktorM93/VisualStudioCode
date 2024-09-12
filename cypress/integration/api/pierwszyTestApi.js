/// <reference types="cypress" />

const { data } = require("cypress/types/jquery");

describe("E2E - Testy API", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })
    it("Weryfikacja tagów API", () => {
       cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
       cy.visit("https://angular-realworld.netlify.app/");
       //"@" stosujemy przy odniesieniu do aliasu, a określamy go najpierw przez "as"
       cy.wait("@requestTag")
       cy.get("@requestTag").then(res => {
        console.log(res);
        //Przyrówanie kodu odpowiedzi do pożądanej (200)
        expect(res.response.statusCode).to.equal(200)
        expect(res.response.body.tags).to.contain("welcome").and.to.contain("implementation")
        
       })
    })
    it("Niepoprawne logowanie", function() {
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLogin")
        cy.get("a.nav-link").contains("Sign in").click();
        cy.login("test@123.pl", "haslo123");
        cy.wait("@requestLogin");
        cy.get("@requestLogin").then(res => {
            console.log(res);
            expect(res.response.statusCode).to.equal(403);
            //Zakomentowane bo na górze określiłem "beforeEach..."
            //cy.fixture("example").then(data => {
                expect(res.response.statusMessage).to.equal(data.statusMessage403);
           // })
            

        })
    })
})