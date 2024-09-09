import { ElementSize } from "@/types";

export const getElementSize = (selector: string): Cypress.Chainable<ElementSize> => {
  return cy.get(selector).then(($el) => {
    const width = $el.outerWidth();
    const height = $el.outerHeight();
    return { width, height } as ElementSize;
  });
};
