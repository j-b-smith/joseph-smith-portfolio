import { CustomProjectCardComponent } from '../components/CustomProjectCardComponent';

export class ProjectsPage {
  public static readonly PAGE = '[data-cy="projects-page"]';
  public static readonly PROJECT_CARD = '[data-cy="project-card"]';

  static visit() {
    cy.visit('/projects');
  }

  static getPage() {
    return cy.get(this.PAGE);
  }

  static getNumberOfProjects() {
    return cy.get(CustomProjectCardComponent.CARD).its('length');
  }

  static getProjectCards() {
    return cy.get(this.PROJECT_CARD);
  }

  static getProjectCard(index: number) {
    return cy.get(CustomProjectCardComponent.CARD).eq(index);
  }

  static getProjectCardTitle(index: number) {
    return CustomProjectCardComponent.getTitle(index);
  }

  static getProjectCardSummary(index: number) {
    return CustomProjectCardComponent.getSummary(index);
  }

  static getProjectCardBadges(index: number) {
    return CustomProjectCardComponent.getBadges(index);
  }

  static clickProjectLink(index: number) {
    CustomProjectCardComponent.clickProjectLink(index);
  }

  static getProjectCardSize(index: number) {
    return CustomProjectCardComponent.getCardSize(index);
  }

  static getProjectCardLink(index: number) {
    return CustomProjectCardComponent.getProjectLink(index);
  }

  static validateProjectLinkWorks(index: number) {
    CustomProjectCardComponent.getProjectLink(index)
      .invoke('attr', 'href')
      .then((href) => {
        if (href) {
          cy.request(href).its('status').should('eq', 200);
        } else {
          throw new Error(`Project link at index ${index} is undefined`);
        }
      });
  }
}
