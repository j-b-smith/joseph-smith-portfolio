import { ContactFormCardComponent } from '../components/contact/ContactFormCardComponent';
import { ContactInfoCardComponent } from '../components/contact/ContactInfoCardComponent';

export class ContactPage {
    public static readonly PAGE = '[data-cy="contact-page"]';

    static visit() {
        cy.visit('/contact');
    }

    static fillForm(name: string, email: string, message: string) {
        ContactFormCardComponent.fillName(name);
        ContactFormCardComponent.fillEmail(email);
        ContactFormCardComponent.fillMessage(message);
    }

    static submitForm() {
        ContactFormCardComponent.submitForm();
    }

    static getFormSize() {
        return ContactFormCardComponent.getFormSize();
    }

    static getInfoCardSize() {
        return ContactInfoCardComponent.getCardSize();
    }

    static clickLinkedIn() {
        ContactInfoCardComponent.clickLinkedIn();
    }

    static clickGitHub() {
        ContactInfoCardComponent.clickGitHub();
    }
}
