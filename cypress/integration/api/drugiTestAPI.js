/// <reference types="cypress" />

describe("Wykonywanie zapytania bezpośrednio do API", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {    
            this.daneApi = data;
        })
    })

    it("Autoryzacja + Dodawanie nowego artykułu", () => {
        const daneAutoryzacja = {
            "user": {
                "email": "rafal-podraza@test.pl",
                "password": "rafalpodraza@"
            }
        }

        const daneArtykul = {
            "article": {
                "tagList": [],
                "title": "test tytuł bezpośrednio z API",
                "description": "test",
                "body": "test"
            }
        }

        cy.request("POST", "https://angular-realworld.netlify.app/api/users/login", daneAutoryzacja)
        .its("body").then(res => {
            const authToken = res.user.token;
            
            cy.request({
                method: "POST",
                url: "https://angular-realworld.netlify.app/api/articles/",
                body: daneArtykul,
                headers: {
                    'Authorization': 'Token ' + authToken
                } 
            }).then(res => {
                expect(res.status).to.equal(200)
            })
        })
    })

})