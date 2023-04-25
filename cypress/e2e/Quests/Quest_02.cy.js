describe("Automatisation de formulaire d'authentification", () => {
    it("Automatiser un scénario de test d'inscription réussie", () => {
        cy.visit("https://preprod.backmarket.fr/register")
        cy.get('[data-qa=accept-cta]').click()
        cy.get('#firstName').type('Jane')
        cy.get('#lastName').type('Shepard')
        cy.get('#signup-email').type('wateh65779@syinxun.com')
        cy.get('#signup-password').type('dARiw@rAsw5Sop3osteQ')
        cy.get('[data-qa=signup-submit-button]').click()
    })

    it("Automatiser un scénario de test d'inscription échouée", () => {
        cy.visit("https://preprod.backmarket.fr/register")
        cy.get('[data-qa=accept-cta]').click()
        cy.get('#firstName').type('Jane')
        cy.get('#lastName').type('Shepard')
        //e-mail invalide
        cy.get('#signup-email').type('test invalide')
        cy.get('#signup-password').type('dARiw@rAsw5Sop3osteQ')
        cy.get('[data-qa=signup-submit-button]').click()
    })
    
    it("Automatiser un scénario de connexion", () => {
        cy.visit("https://preprod.backmarket.fr/register")
        cy.get('[data-qa=accept-cta]').click()
        cy.get('#signin-email').type('wateh65779@syinxun.com')
        cy.get('#signin-password').type('dARiw@rAsw5Sop3osteQ')
        cy.get('[data-qa=signin-submit-button]').click()
    })
}
)