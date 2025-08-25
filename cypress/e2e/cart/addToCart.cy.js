/// <reference types="cypress" />

const Login = require("../../pages/login.page.cy");


describe("gestion du panier", () => {

    before(()=>{
        cy.fixture
    })

    context("valid cridentials",()=> {
        it('Login valid', {tags: ['@smoke']} ,()=>{
            cy.visit("https://www.saucedemo.com/");
            cy.fixture("login_cridentials").then((login_cridentials)=>{
                login_cridentials.valid.forEach(user => {
                    cy.session(user.username, ()=> {
                    cy.visit("https://www.saucedemo.com/");
                    Login.doLogin(user.username,user.password);
                    Login.accederDashboard();
                    })
                });
            }
            );
        })
    });

    
    context("invalid credentials", () => {
    it("Login invalid", {tags: '@negatif'} , () => {
        cy.fixture("login_cridentials").then((login_cridentials) => {
        cy.wrap(login_cridentials.invalid).each((user) => {
            cy.visit("https://www.saucedemo.com/");
            Login.doLogin(user.username, user.password);
            Login.genererErreur();
        });
        });
    });
    });

});
