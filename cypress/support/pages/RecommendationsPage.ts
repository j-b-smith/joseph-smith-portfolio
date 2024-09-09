import { RecommendationCardComponent } from '../components/RecommendationCardComponent';

export class RecommendationsPage {
  public static readonly PAGE = '[data-cy="recommendations-page"]';

  static visit() {
    cy.visit('/recommendations');
  }

  static getRecommendationCard(index: number) {
    return RecommendationCardComponent.getCard(index);
  }

  static getReviewerName(index: number) {
    return RecommendationCardComponent.getReviewerName(index);
  }

  static getReviewerJob(index: number) {
    return RecommendationCardComponent.getReviewerJob(index);
  }

  static getReviewerRelationship(index: number) {
    return RecommendationCardComponent.getReviewerRelationship(index);
  }

  static getReviewContent(index: number) {
    return RecommendationCardComponent.getReviewContent(index);
  }

  static clickLinkedInLink(index: number) {
    RecommendationCardComponent.clickLinkedInLink(index);
  }
}
