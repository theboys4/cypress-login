describe('functionality',()=>{
	it("1-invalid id and password",()=>{
		cy.visit("https://twitter.com/login?lang=en") 
		cy.get('input[type=text]').type('jdhbhfbbrbgrwoufbb')  
		cy.get('input[type=password]').type('jnkjnkjrjgnkbfkgbkgk')
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div > div').click()
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div:nth-child(1) > div > div > div > div > div > div').should('have.text','The username and password you entered did not match our records. Please double-check and try again.')
	}) 

	/*it("2-for correct details",()=>{
		cy.visit("https://twitter.com/login?lang=en") 
		cy.get('input[type=text]').type('giri****')  
		cy.get('input[type=password]').type('***********')
		cy.get('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div > div').click()
		
	}) 

*/
})