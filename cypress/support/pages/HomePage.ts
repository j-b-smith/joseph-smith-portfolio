export class HomePage {
    public static readonly PROFILE_IMAGE = '[data-cy="profile-image"]';
    public static readonly MAIN_HEADING = '[data-cy="main-heading"]';
    public static readonly SUB_HEADING = '[data-cy="sub-heading"]';
    public static readonly VIEW_PROJECTS_BUTTON = '[data-cy="view-projects-button"]';
    public static readonly BADGES_CONTAINER = '[data-cy="badges-container"]';
  
    static clickViewProjectsButton() {
      cy.get(this.VIEW_PROJECTS_BUTTON).click();
    }
  
    static getProfileImage() {
      return cy.get(this.PROFILE_IMAGE);
    }
  
    static getMainHeading() {
      return cy.get(this.MAIN_HEADING);
    }
  
    static getSubHeading() {
      return cy.get(this.SUB_HEADING);
    }
  
    static getBadge(badgeAlt: string) {
      return cy.get(`[data-cy="badge-${badgeAlt.toLowerCase()}"]`);
    }
  
    static getAllBadges() {
      return cy.get(this.BADGES_CONTAINER).find('img');
    }
  
    static setMobileViewport() {
      cy.viewport('iphone-x');
    }
  }
  