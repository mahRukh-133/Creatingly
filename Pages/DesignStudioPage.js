class ArtboardPage {
  
  visit() {
    cy.visit('/');
  }

  getShape(shapeName) {
    return cy.contains('div', shapeName); // adjust selector based on actual DOM
  }

  getArtboard() {
    return cy.get('.artboard-canvas'); // adjust selector
  }

  dragShapeToArtboard(shapeName) {
    this.getShape(shapeName)
      .trigger('mousedown', { which: 1 });
    this.getArtboard()
      .trigger('mousemove')
      .trigger('mouseup', { force: true });
  }

  selectElementOnArtboard() {
    return this.getArtboard().find('.element').first(); // adjust selector
  }

  resizeElement() {
    this.selectElementOnArtboard()
      .find('.resize-handle') // adjust selector
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 200, clientY: 200 })
      .trigger('mouseup');
  }

  alignElements(alignType) {
    cy.get(`[data-testid="align-${alignType}"]`).click(); // e.g., align-left, align-center
  }
}

export default new ArtboardPage();
