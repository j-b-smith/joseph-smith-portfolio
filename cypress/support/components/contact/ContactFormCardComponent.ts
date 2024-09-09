import { getElementSize } from "../../utils/common";

export class ContactFormCardComponent {
    public static readonly FORM = '[data-cy="contact-form"]';
    public static readonly FORM_SUBMIT = '[data-cy="contact-form-submit"]';
    public static readonly INPUT_NAME = '[data-cy="input-name"]';
    public static readonly INPUT_EMAIL = '[data-cy="input-email"]';
    public static readonly INPUT_MESSAGE = '[data-cy="input-message"]';
    public static readonly SUBMIT_BUTTON = '[data-cy="submit-button"]';
    public static readonly MESSAGE_SENT = '[data-cy="message-sent"]';
  
    static fillName(name: string) {
      cy.get(this.INPUT_NAME).clear().type(name);
    }
  
    static fillEmail(email: string) {
      cy.get(this.INPUT_EMAIL).clear().type(email);
    }
  
    static fillMessage(message: string) {
      cy.get(this.INPUT_MESSAGE).clear().type(message);
    }
  
    static submitForm() {
      cy.get(this.SUBMIT_BUTTON).click();
    }

    static getFormSize(){
      return getElementSize(this.FORM);
    }
  }
  