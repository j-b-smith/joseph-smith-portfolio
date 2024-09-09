export class ResumePage {
    public static readonly PAGE = '[data-cy="resume-page"]';
    public static readonly SUMMARY_CARD = '[data-cy="resume-summary-card"]';
    public static readonly SUMMARY_HEADING = '[data-cy="resume-summary-heading"]';
    public static readonly SUMMARY_LIST = '[data-cy="resume-summary-list"]';
    public static readonly DOWNLOAD_BUTTON = '[data-cy="resume-download-button"]';
    public static readonly PDF_VIEWER_CARD = '[data-cy="resume-pdf-viewer"]';
    public static readonly PDF_VIEWER = '[data-cy="pdf-viewer"]';
  
    static visit() {
      cy.visit('/resume');
    }
  
    static getSummaryCard() {
      return cy.get(this.SUMMARY_CARD);
    }
  
    static getSummaryHeading() {
      return cy.get(this.SUMMARY_HEADING);
    }
  
    static getSummaryList() {
      return cy.get(this.SUMMARY_LIST);
    }
  
    static getDownloadButton() {
      return cy.get(this.DOWNLOAD_BUTTON);
    }
  
    static clickDownloadButton() {
      this.getDownloadButton().click();
    }
  
    static getPdfViewerCard() {
      return cy.get(this.PDF_VIEWER_CARD);
    }
  
    static getPdfViewer() {
      return cy.get(this.PDF_VIEWER);
    }
  
    static getPdfViewerSize() {
      return this.getPdfViewer().invoke('outerWidth').then((width) => {
        return this.getPdfViewer().invoke('outerHeight').then((height) => {
          return { width, height };
        });
      });
    }
  }
  