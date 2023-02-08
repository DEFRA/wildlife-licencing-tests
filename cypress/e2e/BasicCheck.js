const signIn = () => {
    cy.visit('/login');
    cy.fixture("users.json").then(users => {
        cy.get("#username").type(users.email1)
        cy.get("#password").type(users.password1)
        cy.get("#continue").click()
    })
}

const signOut = () => {
    cy.visit('/sign-out');
}

describe("Request the service", () => {
    it("Request the service / redirects to the species page", () => {
        cy.request({url: '/', followRedirect: false}).then(resp => {
            expect(resp.status).to.eq(302)
            expect(resp.redirectedToUrl).to.contain('/which-species')
            expect(resp.redirectedToUrl).to.contain(Cypress.env("baseUrl"))
        })
    })
})

describe("Time machine", () => {
    it("Request the service time-machine set", () => {
        cy.request('/set-sysdate?iso-string=2023-04-01T17:48:00.000Z').then(resp => {
            expect(resp.status).to.eq(200)
            expect(resp.body).property('now').to.equal('Sat Apr 01 2023 17:48:00 GMT+0000 (Coordinated Universal Time)')
        })
        cy.visit('/')
        cy.request('/reset-sysdate').then(resp => {
            expect(resp.status).to.eq(200)
        })
    })

    it("Request the service time-machine re-set", () => {
        cy.visit('/')
        cy.request('/reset-sysdate').then(resp => {
            expect(resp.status).to.eq(200)
        })
    })
})

describe("Authentication", () => {
    it('Sign-in', () => {
        signIn()
        cy.url().should('include', '/applications')
    })
    it('Sign-out', () => {
        signOut()
        cy.url().should('include', '/sign-out')
    })
})
