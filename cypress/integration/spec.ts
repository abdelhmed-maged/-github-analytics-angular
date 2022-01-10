describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title().should('equal', 'GithubAnalyticsAngular')
  })
  it('Search for a user', () => {
    const userName = 'abdelhmed-maged';
    cy.get('#searchUser').type(userName)
    cy.title().should('equal', 'GithubAnalyticsAngular')
    cy.intercept('GET', 'https://api.github.com/search/users?page=1&per_page=10&q=abdelhmed-maged').as('search')
    cy.get('.btn-secondary').click()
    cy.wait('@search')
    cy.intercept('GET', 'https://api.github.com/users/abdelhmed-maged/followers').as('getFollowers')
    cy.intercept('GET', 'https://api.github.com/users/abdelhmed-maged/following').as('getFollowings')
    cy.intercept('Get', 'https://api.github.com/users/abdelhmed-maged/repos').as('getRepo')
    cy.get('.user-card').click()
    cy.wait('@getFollowers')
    cy.wait('@getFollowings')
    cy.wait('@getRepo')
  })
})
