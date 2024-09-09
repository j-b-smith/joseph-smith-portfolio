import { ImageGalleryComponent } from "../components/about/ImageGalleryComponent";
import { ImageModalComponent } from "../components/about/ImageModalComponent";


export class AboutPage {
  public static readonly PAGE = '[data-cy="about-page"]';
  public static readonly CONTENT = '[data-cy="about-content"]';
  public static readonly HEADING = '[data-cy="about-heading"]';
  public static readonly DESCRIPTION = '[data-cy="about-description"]';
  public static readonly IMAGE_GALLERY_CARD = '[data-cy="image-gallery-card"]';

  static visit() {
    cy.visit('/about');
  }

  static getContent() {
    return cy.get(this.CONTENT);
  }

  static getHeading() {
    return cy.get(this.HEADING);
  }

  static getDescription() {
    return cy.get(this.DESCRIPTION);
  }

  static getImageGalleryCard() {
    return cy.get(this.IMAGE_GALLERY_CARD);
  }

  static interactWithImageGallery() {
    ImageGalleryComponent.getNumberOfImages().then((imageCount: number) => {
      for (let i = 0; i < imageCount; i++) {
        ImageGalleryComponent.clickThumbnail(i);
        ImageModalComponent.isOpen();
        ImageModalComponent.closeModal();
      }
    });
  }

  static getGalleryImageSize(index: number) {
    return ImageGalleryComponent.getImageSize(index);
  }

  static getModalSize() {
    return ImageModalComponent.getModalSize();
  }

  static getModalImageSize() {
    return ImageModalComponent.getImageSize();
  }
}
