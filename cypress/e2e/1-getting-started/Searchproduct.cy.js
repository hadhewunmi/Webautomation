import{login} from "/cypress/fixtures/selector.js";
/// <reference types="cypress" />
describe("Login ", function () {
    before(function () {
    cy.visit("/")
    });



it('Should login and Search a product and checkout', function(){
cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link').click()   
cy.url().should('contains', 'https://ecommerce-playground.lambdatest.io/index.php');
cy.get('#input-email').type('test@yopmail.com');
cy.get('#input-password').type('Test123#');
cy.get('#input-email').click();
cy.get('#input-email').type('{backspace}');
cy.get('#input-password').click();
cy.get('#input-password').click();
cy.get('#input-password').type('{backspace}');
cy.get('.btn:nth-child(3)').click();
cy.get('#entry_217822 .flex-fill > input').click();
cy.get('#entry_217822 .flex-fill > input').type('phone');
cy.get('.type-text').click();
cy.url().should('contains', 'https://ecommerce-playground.lambdatest.io/index.php');
cy.url().should('contains', 'https://ecommerce-playground.lambdatest.io/index.php');
cy.get('#mz-product-grid-image-78-212469 > .carousel-inner > .active > .lazy-load').click();
cy.url().should('contains', 'https://ecommerce-playground.lambdatest.io/index.php');
cy.get('#entry_216842 > .text').click();
cy.get('.form-row > :nth-child(2) > .btn').click();
cy.get('.form-group > :nth-child(3) > .custom-control-label').click();
cy.get('#input-payment-firstname').click();
cy.get('#input-payment-firstname').type('Tosij');
cy.get('#input-payment-lastname').click();
cy.get('#input-payment-lastname').type('Adekola');
cy.get('#input-payment-email').click();
cy.get('#input-payment-email').type('ade@yopmail.com');
cy.get('#input-payment-telephone').click();
cy.get('#input-payment-telephone').type('08077112711');
cy.get('#input-payment-company').click();
cy.get('#input-payment-company').type('Nedu');
cy.get('#input-payment-address-1').click();
cy.get('#input-payment-address-1').type('Lagos ogun');
cy.get('#input-payment-city').click();
cy.get('#input-payment-city').type('Lagos');
cy.get('#input-payment-postcode').click();
cy.get('#input-payment-postcode').type('23433');

cy.get('.custom-control:nth-child(6) > .custom-control-label').click({force:true});
// cy.get('#input-agree').click({force:true});
cy.get('#button-save').click({force:true});
cy.url().should('contains', 'https://ecommerce-playground.lambdatest.io/index.php');
cy.get('#button-confirm').click();
cy.contains('Your order has been placed!').should('be.visible')
cy.url().should('contains', 'https://ecommerce-playground.lambdatest.io/index.php');









})


})
