/// <reference types="cypress" /> 
describe('contains',()=>{
	it('1-id password and login button',()=>{
		cy.visit("https://twitter.com/login?lang=en") 
		cy.get('input[type=text]').should('be.visible')
		cy.get('input[type=password]').should('be.visible') 
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div > div').should('be.visible')
	}) 

	it('2-contains signup',()=>{ 
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div:nth-child(3) > div > div > a:nth-child(3) > span').click() 
		cy.title().should('eq','Sign up for Twitter / Twitter')

	})
})