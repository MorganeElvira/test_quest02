// auto complete form

describe ("auto complete test", () => {
    it('test', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.get('#userName').type('Mon Nom')
        cy.get('#userEmail').type('monadresse@test.com')
        cy.get('#currentAddress').type("ici un test d'adresse")
        cy.get('#permanentAddress').type("ici un test d'adresse")
        cy.get('#submit').click()
    })
}
) 