import { ElementSize } from '@/types';
import { getElementSize } from '../../utils/common';

export class ImageModalComponent {
  public static readonly MODAL = '[data-cy="image-modal"]';
  public static readonly MODAL_CONTENT = '[data-cy="modal-content"]';
  public static readonly MODAL_IMAGE = '[data-cy="modal-image"]';
  public static readonly CLOSE_BUTTON = '[data-cy="close-modal-button"]';

  static isOpen() {
    return cy.get(this.MODAL).should('be.visible');
  }

  static closeModal() {
    cy.get(this.CLOSE_BUTTON).click();
  }

  static getModalImage() {
    return cy.get(this.MODAL_IMAGE);
  }

  static getModalContent() {
    return cy.get(this.MODAL_CONTENT);
  }

  static getModalSize() {
    return getElementSize(this.MODAL_CONTENT);
  }

  static getImageSize(): Cypress.Chainable<ElementSize> {
    return getElementSize(this.MODAL_IMAGE);
  }
}
