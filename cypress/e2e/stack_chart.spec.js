import ArtboardPage from '../../Pages/DesignStudioPage'

describe('Stack Container - Chart placement, alignment, resize', () => {

  beforeEach(() => {
    ArtboardPage.visit()
  })

  it('drops an Artboard', () => {
    // Adjust selectors to actual UI when available
    cy.contains('button,div', 'New Artboard').click({ force: true })
    ArtboardPage.getArtboard().should('exist')
  })

  it('drops a Chart inside a Stack container', () => {
    // Open elements panel and drag Chart into Stack container
    cy.contains('div,button', 'Elements').click({ force: true })
    const dataTransfer = new DataTransfer()
    cy.contains('div', 'Chart').trigger('dragstart', { dataTransfer })
    cy.contains('div', 'Stack').trigger('drop', { dataTransfer })
    cy.contains('.stack-container .chart-element', 'Chart').should('exist')
  })

  it('centers content and container', () => {
    // Click center align on container and content
    cy.get('[data-testid="align-center"]').click({ force: true })
    cy.get('.stack-container').should('have.css', 'justify-content', 'center')
    cy.get('.stack-container').should('have.css', 'align-items', 'center')
  })

  it('resizes Chart to fit container', () => {
    // Drag resize handle and assert chart ~ container size
    cy.get('.stack-container .chart-element').as('chart')
    cy.get('@chart').find('.resize-handle').last()
      .trigger('mousedown', { which: 1 })
    cy.get('@chart')
      .trigger('mousemove', { clientX: 800, clientY: 600 })
      .trigger('mouseup', { force: true })

    cy.get('.stack-container').then($c => {
      const cw = $c.width()
      const ch = $c.height()
      cy.get('@chart').then($e => {
        const ew = $e.width()
        const eh = $e.height()
        expect(Math.abs(ew - cw)).to.be.lessThan(10)
        expect(Math.abs(eh - ch)).to.be.lessThan(10)
      })
    })
  })
})


