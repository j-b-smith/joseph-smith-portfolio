import { CustomProjectCardComponent } from '../components/CustomProjectCardComponent';

export class ProjectsPage {
  public static readonly PAGE = '[data-cy="projects-page"]';

  static visit() {
    cy.visit('/projects');
  }

  static getProjectCard(index: number) {
    return cy.get(`${CustomProjectCardComponent.CARD}:nth-child(${index + 1})`);
  }

  static getProjectCardTitle(index: number) {
    return CustomProjectCardComponent.getTitle();
  }

  static getProjectCardSummary(index: number) {
    return CustomProjectCardComponent.getSummary();
  }

  static getProjectCardRepository(index: number) {
    return CustomProjectCardComponent.getRepository();
  }

  static getProjectCardBadges(index: number) {
    return cy.get(`${CustomProjectCardComponent.CARD}:nth-child(${index + 1}) [data-cy^="badge-"]`);
  }

  static clickProjectLink(index: number) {
    return CustomProjectCardComponent.clickProjectLink();
  }

  static getProjectCardSize(index: number) {
    return CustomProjectCardComponent.getCardSize();
  }
}
