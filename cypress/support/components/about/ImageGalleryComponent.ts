import { getElementSize } from "../../utils/common";

export class ImageGalleryComponent {
    public static readonly GALLERY = '[data-cy="image-gallery"]';
    public static readonly IMAGE = (index: number) => `[data-cy="image-${index}"]`;
    public static readonly THUMBNAIL = (index: number) => `[data-cy="image-thumbnail-${index}"]`;
  
    static clickThumbnail(index: number) {
      cy.get(this.THUMBNAIL(index)).click();
    }
  
    static getImage(index: number) {
      return cy.get(this.IMAGE(index));
    }

    static getImageSize(index: number) {
        return getElementSize(this.IMAGE(index));
    }
  
    static getNumberOfImages() {
      return cy.get(this.GALLERY).find('div[data-cy^="image-"]').its('length');
    }

    static getImageGallerySize() {
        return getElementSize(this.GALLERY);
    }
  }
  