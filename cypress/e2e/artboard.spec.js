import ArtboardPage from '../../Pages/DesignStudioPage';

describe('Artboard - Drag & Drop', () => {

  beforeEach(() => {
    ArtboardPage.visit();
    cy.wait(3000)
  });

  it('TC_ART_001 - Drag shape to artboard', () => {
    ArtboardPage.dragShapeToArtboard('Rectangle');
    ArtboardPage.getArtboard().find('.element').should('exist');
  });

  it('TC_ART_002 - Reposition element on artboard', () => {
    ArtboardPage.selectElementOnArtboard()
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 300, clientY: 300 })
      .trigger('mouseup');
    ArtboardPage.selectElementOnArtboard().should('exist');
  });

  it('TC_ART_003 - Place multiple elements', () => {
    ArtboardPage.dragShapeToArtboard('Rectangle');
    ArtboardPage.dragShapeToArtboard('Circle');
    ArtboardPage.getArtboard().find('.element').should('have.length.gte', 2);
  });

  it('TC_CHART_001 - Drag Chart element inside stack container', () => {
    ArtboardPage.dragElementToContainer('Chart', 'StackContainer');
    ArtboardPage.getContainer('StackContainer').find('.chart-element').should('exist');
  });

  it('TC_CHART_002 - Center justify content and container', () => {
    ArtboardPage.centerJustifyContainer('StackContainer');
    ArtboardPage.getContainer('StackContainer').should('have.class', 'center-justified');
    ArtboardPage.getContainer('StackContainer').find('.chart-element').should('have.class', 'center-justified');
  });

  it('TC_CHART_003 - Resize Chart element to fit container', () => {
    ArtboardPage.resizeElementToFitContainer('Chart', 'StackContainer');
    ArtboardPage.getContainer('StackContainer').find('.chart-element').should('have.css', 'width').and('eq', ArtboardPage.getContainerWidth('StackContainer'));
  });

  it('TC_CHART_004 - Negative: Drop Chart outside valid area', () => {
    ArtboardPage.dragElementToInvalidArea('Chart');
    ArtboardPage.getArtboard().find('.chart-element').should('not.exist');
  });

  it('TC_CHART_005 - Negative: Resize Chart beyond container limits', () => {
    ArtboardPage.dragElementToContainer('Chart', 'StackContainer');
    ArtboardPage.resizeElementBeyondContainer('Chart', 'StackContainer');
    ArtboardPage.getContainer('StackContainer').find('.chart-element').should('have.css', 'width').and('not.gt', ArtboardPage.getContainerWidth('StackContainer'));
  });
});
