/// <reference types="cypress" />

describe("E2E - Testy API", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {    
            this.daneApi = data;
        })
    })

    it("Weryfikacja tagów API", () => {
       cy.intercept("GET", "https://angular-realworld.netlify.app/api/tags").as("requestTag");
       cy.visit("https://angular.realworld.io/");
       cy.wait("@requestTag")
       cy.get("@requestTag").then(res => {
           console.log(res)
           expect(res.response.statusCode).to.equal(200)
           expect(res.response.body.tags).to.contain("welcome").and.to.contain("implementations")
       })
    })

    it("Niepoprawne logowanie", function() {
        cy.intercept("POST", "https://angular-realworld.netlify.app/api/users/login").as("requestLogin")
        cy.get("a.nav-link").contains("Sign in").click();
        cy.login("witek12@wp.pl", "witek12")
        cy.wait("@requestLogin")
        cy.get("@requestLogin").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(403)
            expect(res.response.statusMessage).to.equal(this.daneApi.statusMessage403)
        })
    })

    it("Poprawne logowanie", function() {
        cy.intercept("GET", "https://angular-realworld.netlify.app/api/tags", { fixture: 'tags.json' }).as("requestTag");
        cy.login("rafal-podraza@test.pl", "rafalpodraza@")
        cy.wait("@requestTag")
    })

})