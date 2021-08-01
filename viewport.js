/// <reference types="cypress" />

describe('ui',() => { 
	it('ui-1',()=>{
		cy.visit("https://twitter.com/login?lang=en")
		//cy.get('#loginbutton').click() 
		cy.title().should('eq','Login on Twitter / Twitter') 
		cy.viewport('macbook-15') 
		cy.get('input[type=text]').should('be.visible').should('be.enabled')
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div').should('not.be.enabled')
		cy.wait(200)
	})
	
	it('ui-2',()=>{

	
		
		cy.viewport('macbook-13') 
		cy.get('input[type=text]').should('be.visible').should('be.enabled')
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div').should('not.be.enabled')

		cy.wait(200)
	}) 

	it('ui-3',()=>{
		cy.viewport('ipad-2')
		cy.get('input[type=text]').should('be.visible').should('be.enabled') 
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div').should('not.be.enabled')

		cy.wait(200) 
	}) 
	it('ui-3',()=>{
		cy.viewport('ipad-mini')
		cy.get('input[type=text]').should('be.visible').should('be.enabled')
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div').should('not.be.enabled')

		cy.wait(200) 
	}) 	
	it('ui-3',()=>{
		cy.viewport('iphone-6+')
		cy.get('input[type=text]').should('be.visible').should('be.enabled') 
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div').should('not.be.enabled').should('be.visible')
		cy.wait(200)

	})

})