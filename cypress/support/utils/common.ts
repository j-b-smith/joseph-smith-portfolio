import { ElementSize } from "@/types";

export const getElementSize = (selector: string): ElementSize => {
    let elementSize: ElementSize = { width: 0, height: 0 };
    cy.get(selector).invoke('outerWidth').then((width) => {
      cy.get(selector).invoke('outerHeight').then((height) => {
        if (width && height) {
            elementSize = { width, height };
        }
      });
    });
    return elementSize;
  };
  