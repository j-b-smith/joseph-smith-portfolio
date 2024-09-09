export class FooterComponent {
    public static readonly FOOTER = '[data-cy="footer"]';
    public static readonly FOOTER_TEXT = '[data-cy="footer-text"]';
    public static readonly LINKEDIN_LINK = '[data-cy="footer-linkedin"]';
    public static readonly GITHUB_LINK = '[data-cy="footer-github"]';
    public static readonly LINKEDIN_ICON = '[data-cy="footer-linkedin-icon"]';
    public static readonly GITHUB_ICON = '[data-cy="footer-github-icon"]';
  
    static getFooterText() {
      return cy.get(this.FOOTER_TEXT);
    }
  
    static clickLinkedIn() {
      cy.get(this.LINKEDIN_LINK).click();
    }
  
    static clickGitHub() {
      cy.get(this.GITHUB_LINK).click();
    }
  
    static getLinkedInIcon() {
      return cy.get(this.LINKEDIN_ICON);
    }
  
    static getGitHubIcon() {
      return cy.get(this.GITHUB_ICON);
    }
  }
  