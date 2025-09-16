import ArtboardPage from '../../Pages/DesignStudioPage';

describe('Artboard - Drag & Drop', () => {

  beforeEach(() => {
    ArtboardPage.visit();
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
});
