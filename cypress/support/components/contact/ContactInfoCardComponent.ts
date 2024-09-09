import { getElementSize } from "../../utils/common";

export class ContactInfoCardComponent {
    public static readonly INFO_CARD = '[data-cy="contact-info-card"]';
    public static readonly CONTACT_HEADING = '[data-cy="contact-heading"]';
    public static readonly CONTACT_DESCRIPTION = '[data-cy="contact-description"]';
    public static readonly LINKEDIN_ICON = '[data-cy="linkedin-icon"]';
    public static readonly LINKEDIN_LINK = '[data-cy="linkedin-link"]';
    public static readonly GITHUB_ICON = '[data-cy="github-icon"]';
    public static readonly GITHUB_LINK = '[data-cy="github-link"]';
    public static readonly EMAIL_INFO = '[data-cy="email-info"]';
    public static readonly PHONE_INFO = '[data-cy="phone-info"]';
    public static readonly PUPPY_IMAGE = '[data-cy="puppy-image"]';
  
    static clickLinkedIn() {
      cy.get(this.LINKEDIN_LINK).click();
    }
  
    static clickGitHub() {
      cy.get(this.GITHUB_LINK).click();
    }

    static getCardSize(){
      return getElementSize(this.INFO_CARD);
    }
}
  