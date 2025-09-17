class DesignStudioPage {
  openElementsTab() {
    cy.contains('span.modeName', 'Elements').click();
  }

  dragContainerToArtboard() {
    cy.get('div[data-testid="Container"]')
      .trigger('mousedown', { which: 1 });
    this.getArtboard()
      .trigger('mousemove')
      .trigger('mouseup', { force: true });
  }
  visit() {
  cy.visit('/', { timeout: 120000 }); // 2 minutes timeout for page load
  }

  // Click the Artboard option in the left menu
  openArtboardMenu() {
    cy.get('#draw-drawing-panel').click();
  }

  // Select the first artboard template (with one section)
  selectFirstArtboardTemplate() {
    cy.get('img[alt="With One Section"]').first().click();
  }

  // Get the artboard canvas
  getArtboard() {
    return cy.get('.artboard-canvas'); // adjust selector if needed
  }


  // Drag Chart element from element list to stack container
  dragChartToStackContainer() {
    cy.get('div[data-testid="Chart"]').scrollIntoView();
    cy.get('div[data-testid="Chart"]').trigger('mousedown', { which: 1 });
    this.getStackContainer()
      .trigger('mousemove')
      .trigger('mouseup', { force: true });
  }

  // Example: Drag Bar Chart type to stack container
  dragBarChartToStackContainer() {
    cy.get('div[data-testid="Bar Chart"]').scrollIntoView();
    cy.get('div[data-testid="Bar Chart"]').trigger('mousedown', { which: 1 });
    this.getStackContainer()
      .trigger('mousemove')
      .trigger('mouseup', { force: true });
  }

  // Get stack container
  getStackContainer() {
    return cy.get('.stack-container');
  }

  // Center justify content and container
  centerJustify() {
    cy.get('[data-testid="center-justify-btn"]').click();
  }

  // Resize Chart element to fit container
  resizeChartToFitContainer() {
    cy.get('.stack-container .chart-element .resize-handle')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 400, clientY: 200 })
      .trigger('mouseup');
  }

  // Negative: Drop Chart outside valid area
  dragChartToInvalidArea() {
    cy.get('[data-testid="chart-palette-item"]').trigger('mousedown', { which: 1 });
    cy.get('body').trigger('mousemove', { clientX: 10, clientY: 10 }).trigger('mouseup', { force: true });
  }

  // Negative: Resize Chart beyond container limits
  resizeChartBeyondContainer() {
    cy.get('.stack-container .chart-element .resize-handle')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 2000, clientY: 200 })
      .trigger('mouseup');
  }
}

export default new DesignStudioPage();
