/// <reference types="cypress" />
describe('initialVisibility',()=>{
	it('1-to check all fields visible',()=>{
		cy.visit("https://twitter.com/login?lang=en") 
		cy.get('input[type=text]').should('be.visible').should('be.enabled')
		cy.get('input[type=password]').should('be.visible').should('be.enabled')
	}) 
	it('2-button is disabled',()=>{
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div > div').should('not.be.enabled')
	}) 


	it('3-when fields filled',()=>{
		cy.get('input[type=text]').type('jdhbhfbbrbgrwoufbb')  
		cy.get('input[type=password]').type('jnkjnkjrjgnkbfkgbkgk')
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div > div').should('not.be.disabled')
	})
})