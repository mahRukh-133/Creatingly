import DesignStudioPage from '../../Pages/DesignStudioPage';

describe('Artboard - Drag & Drop', () => {

  beforeEach(() => {
    DesignStudioPage.visit();
   
  });



  it.only('TC_ART_001 - Add Artboard via left menu and select template', () => {
    DesignStudioPage.openArtboardMenu();
    cy.get('.sys-form-modal-content').should('be.visible');
    DesignStudioPage.selectFirstArtboardTemplate();
    DesignStudioPage.getArtboard().should('exist');
  });


  it('TC_CONTAINER_001 - Add Container to Artboard', () => {
    DesignStudioPage.openElementsTab();
    DesignStudioPage.dragContainerToArtboard();
    DesignStudioPage.getArtboard().find('.container-element, .stack-container').should('exist'); // Adjust selector as needed
  });

  it('TC_CHART_001 - Drag Chart element inside stack container', () => {
    // Ensure container is present before adding chart
    DesignStudioPage.openElementsTab();
    DesignStudioPage.dragContainerToArtboard();
    DesignStudioPage.dragChartToStackContainer();
    DesignStudioPage.getStackContainer().find('.chart-element').should('exist');
  });


  it('TC_CHART_002 - Center justify content and container', () => {
    DesignStudioPage.centerJustify();
    DesignStudioPage.getStackContainer().should('have.class', 'center-justified');
    DesignStudioPage.getStackContainer().find('.chart-element').should('have.class', 'center-justified');
  });


  it('TC_CHART_003 - Resize Chart element to fit container', () => {
    DesignStudioPage.resizeChartToFitContainer();
    DesignStudioPage.getStackContainer().find('.chart-element').should($el => {
      const chartWidth = $el.width();
      const containerWidth = $el.closest('.stack-container').width();
      expect(chartWidth).to.be.closeTo(containerWidth, 2);
    });
  });


  it('TC_CHART_004 - Negative: Drop Chart outside valid area', () => {
    DesignStudioPage.dragChartToInvalidArea();
    cy.get('body .chart-element').should('not.exist');
  });


  it('TC_CHART_005 - Negative: Resize Chart beyond container limits', () => {
    DesignStudioPage.resizeChartBeyondContainer();
    DesignStudioPage.getStackContainer().find('.chart-element').should($el => {
      const chartWidth = $el.width();
      const containerWidth = $el.closest('.stack-container').width();
      expect(chartWidth).to.be.lte(containerWidth);
    });
  });




});
