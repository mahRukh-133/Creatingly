// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom commands + helpers

// Visit the Design Studio directly (login skipped)
Cypress.Commands.add('openDesignStudio', () => {
  cy.visit('/') // uses baseUrl from config
  // wait for canvas to be ready - update selector if needed
  cy.get('[data-testid="design-canvas"]', { timeout: 15000 }).should('exist')
})

/**
 * Drag-and-drop helper using DataTransfer (works for most HTML5 dnd implementations)
 * Usage: cy.get(sourceSelector).dragTo(targetSelector)
 */
Cypress.Commands.add('dragTo', { prevSubject: 'element' }, (subject, targetSelector) => {
  const dataTransfer = new DataTransfer()
  cy.wrap(subject)
    .trigger('dragstart', { dataTransfer, force: true })
  cy.get(targetSelector)
    .trigger('dragover', { dataTransfer, force: true })
    .trigger('drop', { dataTransfer, force: true })
  cy.wrap(subject).trigger('dragend', { dataTransfer, force: true })
})

/**
 * Simulate resize by dragging the resize handle from element to a target coordinate.
 * You need to pass either the handle selector or rely on page object's resize handle
 *
 * Usage:
 *  cy.get(handleSelector).then($h => {
 *    cy.resizeElement($h, targetX, targetY)
 *  })
 */
Cypress.Commands.add('resizeElement', (handle, toX, toY) => {
  cy.wrap(handle)
    .trigger('mousedown', { which: 1, force: true })
  cy.get('body')
    .trigger('mousemove', { clientX: toX, clientY: toY, force: true })
    .trigger('mouseup', { force: true })
})
