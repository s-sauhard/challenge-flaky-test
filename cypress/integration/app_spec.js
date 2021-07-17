describe('Sign Up', () => {
  it('Adds person to course', () => {
    cy.visit('/')

    cy.get('input[name="name"]')
      .click()
      .type('Some Name')
      .should('have.value', 'Some Name')

    cy.get('input[name="email"]')
      .click()
      .type('some@email.com')

    cy.get('[data-cy="select-department"]')
      .select('core')
      .should('have.value', 'core')

    cy.get('[data-cy="select-course"]')
      .select('git-it')
      .should('have.value', 'git-it')

    cy.get('[data-cy="submit"]')
      .click()

    cy.get('[data-cy="submit-visible"]', {timeout : 10000}).should('be.visible')

    cy.get('li')
      .should('contain', 'Some Name - some@email.com - core - git-it')
  })
})
