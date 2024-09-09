import { getElementSize } from "../utils/common";

export class CustomProjectCardComponent {
  public static readonly CARD = '[data-cy="project-card"]';
  public static readonly TITLE = '[data-cy="project-title"]';
  public static readonly SUMMARY = '[data-cy="project-summary"]';
  public static readonly BADGE = (tech: string) => `[data-cy="badge-${tech}"]`;
  public static readonly PROJECT_LINK = '[data-cy="project-link"]';

  static getTitle(index: number) {
    return cy.get(this.CARD).eq(index).find(this.TITLE);
  }

  static getSummary(index: number) {
    return cy.get(this.CARD).eq(index).find(this.SUMMARY);
  }

  static getBadges(index: number) {
    return cy.get(this.CARD).eq(index).find(`img[data-cy^="badge-"]`);
  }

  static clickProjectLink(index: number) {
    cy.get(this.CARD).eq(index).find(this.PROJECT_LINK).click();
  }

  static getProjectLink(index: number) {
    return cy.get(this.CARD).eq(index).find(this.PROJECT_LINK);
  }

  static getCardSize(index: number) {
    return getElementSize(this.CARD);
  }
}
