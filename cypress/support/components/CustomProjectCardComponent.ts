import { getElementSize } from "../utils/common";

export class CustomProjectCardComponent {
    public static readonly CARD = '[data-cy="project-card"]';
    public static readonly TITLE = '[data-cy="project-title"]';
    public static readonly REPOSITORY = '[data-cy="project-summary"]';
    public static readonly BADGE = (tech: string) => `[data-cy="badge-${tech}"]`;
    public static readonly SUMMARY = '[data-cy="project-summary"]';
    public static readonly PROJECT_LINK = '[data-cy="project-link"]';
  
    static getTitle() {
      return cy.get(this.TITLE);
    }
  
    static getRepository() {
      return cy.get(this.REPOSITORY);
    }
  
    static getSummary() {
      return cy.get(this.SUMMARY);
    }
  
    static getBadge(tech: string) {
      return cy.get(this.BADGE(tech));
    }
  
    static clickProjectLink() {
      cy.get(this.PROJECT_LINK).click();
    }
  
    static getProjectLink() {
      return cy.get(this.PROJECT_LINK);
    }

    static getCardSize() {
      return getElementSize(this.CARD);
    }
  }
  