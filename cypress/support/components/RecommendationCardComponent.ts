export class RecommendationCardComponent {
    public static readonly CARD = '[data-cy="recommendation-card"]';
    public static readonly HEADER = '[data-cy="recommendation-header"]';
    public static readonly IMAGE = '[data-cy="recommendation-image"]';
    public static readonly REVIEWER_NAME = '[data-cy="reviewer-name"]';
    public static readonly REVIEWER_JOB = '[data-cy="reviewer-job"]';
    public static readonly REVIEWER_RELATIONSHIP = '[data-cy="reviewer-relationship"]';
    public static readonly REVIEW_CONTENT = '[data-cy="review-content"]';
    public static readonly LINKEDIN_LINK = '[data-cy="linkedin-recommendation-link"]';
  
    static getCard(index: number) {
      return cy.get(`${this.CARD}-${index}`);
    }
  
    static getHeader(index: number) {
      return this.getCard(index).find(this.HEADER);
    }
  
    static getImage(index: number) {
      return this.getCard(index).find(this.IMAGE);
    }
  
    static getReviewerName(index: number) {
      return this.getCard(index).find(this.REVIEWER_NAME);
    }
  
    static getReviewerJob(index: number) {
      return this.getCard(index).find(this.REVIEWER_JOB);
    }
  
    static getReviewerRelationship(index: number) {
      return this.getCard(index).find(this.REVIEWER_RELATIONSHIP);
    }
  
    static getReviewContent(index: number) {
      return this.getCard(index).find(this.REVIEW_CONTENT);
    }
  
    static getLinkedInLink(index: number) {
      return this.getCard(index).find(this.LINKEDIN_LINK);
    }
  
    static clickLinkedInLink(index: number) {
      this.getLinkedInLink(index).click();
    }
  }
  