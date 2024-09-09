export class NavBarComponent {
    public static readonly NAVBAR = '[data-cy="navbar"]';
    public static readonly TOGGLE_BUTTON = '[data-cy="navbar-toggle-button"]';
    public static readonly HOME_LINK = '[data-cy="navbar-home-link"]';
    public static readonly ABOUT_LINK = '[data-cy="navbar-about-link"]';
    public static readonly PROJECTS_LINK = '[data-cy="navbar-projects-link"]';
    public static readonly RESUME_LINK = '[data-cy="navbar-resume-link"]';
    public static readonly RECOMMENDATIONS_LINK = '[data-cy="navbar-recommendations-link"]';
    public static readonly CONTACT_LINK = '[data-cy="navbar-contact-link"]';
    public static readonly MOBILE_MENU = '[data-cy="navbar-mobile-menu"]';
    public static readonly MOBILE_HOME_LINK = '[data-cy="navbar-mobile-home-link"]';
    public static readonly MOBILE_ABOUT_LINK = '[data-cy="navbar-mobile-about-link"]';
    public static readonly MOBILE_PROJECTS_LINK = '[data-cy="navbar-mobile-projects-link"]';
    public static readonly MOBILE_RESUME_LINK = '[data-cy="navbar-mobile-resume-link"]';
    public static readonly MOBILE_RECOMMENDATIONS_LINK = '[data-cy="navbar-mobile-recommendations-link"]';
    public static readonly MOBILE_CONTACT_LINK = '[data-cy="navbar-mobile-contact-link"]';
  
    static clickHome() {
      cy.get(this.HOME_LINK).click();
    }
  
    static clickAbout() {
      cy.get(this.ABOUT_LINK).click();
    }
  
    static clickProjects() {
      cy.get(this.PROJECTS_LINK).click();
    }
  
    static clickResume() {
      cy.get(this.RESUME_LINK).click();
    }
  
    static clickRecommendations() {
      cy.get(this.RECOMMENDATIONS_LINK).click();
    }
  
    static clickContact() {
      cy.get(this.CONTACT_LINK).click();
    }
  
    static toggleMobileMenu() {
      cy.get(this.TOGGLE_BUTTON).click();
    }
  
    static clickMobileHome() {
      cy.get(this.MOBILE_HOME_LINK).click();
    }
  
    static clickMobileAbout() {
      cy.get(this.MOBILE_ABOUT_LINK).click();
    }
  
    static clickMobileProjects() {
      cy.get(this.MOBILE_PROJECTS_LINK).click();
    }
  
    static clickMobileResume() {
      cy.get(this.MOBILE_RESUME_LINK).click();
    }
  
    static clickMobileRecommendations() {
      cy.get(this.MOBILE_RECOMMENDATIONS_LINK).click();
    }
  
    static clickMobileContact() {
      cy.get(this.MOBILE_CONTACT_LINK).click();
    }

  }
  