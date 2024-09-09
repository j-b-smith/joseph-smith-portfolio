import { FooterComponent } from "@/cypress/support/components/Footer";


describe('Footer Component E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the correct footer text', () => {
    FooterComponent.getFooterText().should('contain.text', `Joseph Smith. All rights reserved.`);
  });

  it('should have the correct LinkedIn link', () => {
    FooterComponent.getLinkedInIcon().should('be.visible');
    FooterComponent.getLinkedInIcon().parent().should('have.attr', 'href', 'https://linkedin.com/in/joseph-b-smith-eng');
  });

  it('should have the correct GitHub link', () => {
    FooterComponent.getGitHubIcon().should('be.visible');
    FooterComponent.getGitHubIcon().parent().should('have.attr', 'href', 'https://github.com/j-b-smith');
  });
});
