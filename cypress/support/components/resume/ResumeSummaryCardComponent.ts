import { getElementSize } from "../../utils/common";

export class ResumeSummaryCardComponent {
    public static readonly SUMMARY_CARD = '[data-cy="resume-summary-card"]';
    public static readonly SUMMARY_HEADING = '[data-cy="resume-summary-heading"]';
    public static readonly SUMMARY_LIST = '[data-cy="resume-summary-list"]';
    public static readonly DOWNLOAD_BUTTON = '[data-cy="resume-download-button"]';
  
    static clickDownloadButton() {
      cy.get(this.DOWNLOAD_BUTTON).click();
    }
  
    static getDownloadButton() {
      return cy.get(this.DOWNLOAD_BUTTON);
    }
  
    static getHeadingText() {
      return cy.get(this.SUMMARY_HEADING);
    }
  
    static getSummaryList() {
      return cy.get(this.SUMMARY_LIST);
    }
  
    static getCardContainer() {
      return cy.get(this.SUMMARY_CARD);
    }

    static getCardSize(){
        return getElementSize(this.SUMMARY_CARD);
    }
  }
  