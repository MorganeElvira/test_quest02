describe('test note api', () => {
    before('login', () => {
        // Using a command in commands.js in folder "support"
        cy.loginInApi.then(response => {
            expect(response.status).to.eql(200)
            expect(response.message).to.be.eq('Login successful')
        })
    })

    it('Create a new note with the first note in notes.json', () => {

        let notesData = require('../../fixtures/notes.json')

        cy.request({
            method: 'POST',
            url: 'https://practice.expandtesting.com/notes/api/notes',
            hearders: {
                "x-auth-token": "ce15e0a84ba044848af00638370a7ce324602f32d07644399297fc19a695c97d"
            },
            failOnStatusCode: false,
            body: notesData[0]
        }).then(response => {
            expect(response).to.have.property('headers')
            expect(response.status).to.eq(200)
            expect(response.message).to.be.eq('Note successfully created')
            expect(response.body[0].data.title).to.eq(notesData[0].title)
        })
    })

    it('Create a new note with the second note in notes.json', () => {

        let notesData = require('../../fixtures/notes.json')

        cy.request({
            method: 'POST',
            url: 'https://practice.expandtesting.com/notes/api/notes',
            hearders: {
                "x-auth-token": "ce15e0a84ba044848af00638370a7ce324602f32d07644399297fc19a695c97d"
            },
            failOnStatusCode: false,
            body: notesData[1]
        }).then(response => {
            expect(response).to.have.property('headers')
            expect(response.status).to.eq(200)
            expect(response.message).to.be.eq('Note successfully created')  //Unauthorized Request
            expect(response.body[1].data.title).to.eq(notesData[1].title)
        })
    })

    it('Create a new note with an "unauthorized request" response with an invalid token', () => {

        let notesData = require('../../fixtures/notes.json')

        cy.request({
            method: 'POST',
            url: 'https://practice.expandtesting.com/notes/api/notes',
            // Enter an invalid token here
            hearders: {
                "x-auth-token": "blablabla"
            },
            failOnStatusCode: false,
            body: notesData[0]
        }).then(response => {
            expect(response.success).to.be.false
            expect(response.status).to.eq(401)
            expect(response.message).to.be.eq('Unauthorized Request')
        })
    })

    it('Get all notes', () => {
        cy.request({
            url: 'https://practice.expandtesting.com/notes/api/notes',
            headers: {
                "x-auth-token": 'ce15e0a84ba044848af00638370a7ce324602f32d07644399297fc19a695c97d'
            },
            failOnStatusCode: false,
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.message).to.eq('Notes successfully retrieved')
        })
    })
})