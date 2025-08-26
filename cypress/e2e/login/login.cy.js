/// <reference types="cypress" />

import Login from "../../pages/login.page.cy";


describe("Login feature test with pom",() => {

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
        
    })

    it("Login avec username correct et pass correct", {tags: 'positif'} ,()=>{
        Login.saisirUsername("standard_user");
        Login.saisirPassword("secret_sauce");
        Login.cliqueButton();
        Login.accederDashboard();
        cy.screenshot("login-success"); 
    })
    it("Login avec username incorrect et pass correct", {tags: 'negatif'} ,()=>{
        Login.saisirUsername("incorrect_user");
        Login.saisirPassword("secret_sauce");
        Login.cliqueButton();
        Login.genererErreur();
        cy.screenshot("login-unsuccess-incorrect-username"); 
    })

    it("Login avec username correct et pass incorrect", {tags: 'negatif'} ,()=>{
        Login.saisirUsername("standard_user");
        Login.saisirPassword("incorrect_password");
        Login.cliqueButton();
        Login.genererErreur();
        cy.screenshot("login-unsuccess-incorrect-password"); 
    })

})


