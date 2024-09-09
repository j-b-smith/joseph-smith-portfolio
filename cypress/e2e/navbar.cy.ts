import { NavBarComponent } from "../support/components/NavBar";

describe('Navbar E2E Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should render the Navbar with all links on desktop', () => {
      cy.get('[data-cy="navbar-home-link"]').should('be.visible');
      cy.get('[data-cy="navbar-about-link"]').should('be.visible');
      cy.get('[data-cy="navbar-projects-link"]').should('be.visible');
      cy.get('[data-cy="navbar-resume-link"]').should('be.visible');
      cy.get('[data-cy="navbar-recommendations-link"]').should('be.visible');
      cy.get('[data-cy="navbar-contact-link"]').should('be.visible');
    });
  
    it('should navigate to the correct pages when clicking links on desktop', () => {
      cy.get('[data-cy="navbar-home-link"]').click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  
      cy.get('[data-cy="navbar-about-link"]').click();
      cy.url().should('include', '/about');
  
      cy.get('[data-cy="navbar-projects-link"]').click();
      cy.url().should('include', '/projects');
  
      cy.get('[data-cy="navbar-resume-link"]').click();
      cy.url().should('include', '/resume');
  
      cy.get('[data-cy="navbar-recommendations-link"]').click();
      cy.url().should('include', '/recommendations');
  
      cy.get('[data-cy="navbar-contact-link"]').click();
      cy.url().should('include', '/contact');
    });
  
    it('should toggle the mobile menu and display links', () => {
      cy.viewport('iphone-x');
  
      cy.get('[data-cy="navbar-toggle-button"]').click();
      cy.get('[data-cy="navbar-mobile-menu"]').should('be.visible');
  
      cy.get('[data-cy="navbar-mobile-home-link"]').should('be.visible');
      cy.get('[data-cy="navbar-mobile-about-link"]').should('be.visible');
      cy.get('[data-cy="navbar-mobile-projects-link"]').should('be.visible');
      cy.get('[data-cy="navbar-mobile-resume-link"]').should('be.visible');
      cy.get('[data-cy="navbar-mobile-recommendations-link"]').should('be.visible');
      cy.get('[data-cy="navbar-mobile-contact-link"]').should('be.visible');
    });
  
    it('should navigate to correct pages when clicking links in the mobile menu', () => {
      cy.viewport('iphone-x');
  
      cy.get('[data-cy="navbar-toggle-button"]').click();
      cy.get('[data-cy="navbar-mobile-menu"]').should('be.visible');
  
      cy.get('[data-cy="navbar-mobile-home-link"]').click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  
      cy.get('[data-cy="navbar-toggle-button"]').click();
      cy.get('[data-cy="navbar-mobile-about-link"]').click();
      cy.url().should('include', '/about');
  
      cy.get('[data-cy="navbar-toggle-button"]').click();
      cy.get('[data-cy="navbar-mobile-projects-link"]').click();
      cy.url().should('include', '/projects');
  
      cy.get('[data-cy="navbar-toggle-button"]').click();
      cy.get('[data-cy="navbar-mobile-resume-link"]').click();
      cy.url().should('include', '/resume');
  
      cy.get('[data-cy="navbar-toggle-button"]').click();
      cy.get('[data-cy="navbar-mobile-recommendations-link"]').click();
      cy.url().should('include', '/recommendations');
  
      cy.get('[data-cy="navbar-toggle-button"]').click();
      cy.get('[data-cy="navbar-mobile-contact-link"]').click();
      cy.url().should('include', '/contact');
    });

    it('should highlight the active page link for all pages', () => {
        const activeClass = 'bg-indigo-700';
      
        // Helper function to test active link
        const testActiveLink = (path: string, activeLink: string, otherLinks: string[]) => {
          cy.visit(path);
          cy.get(activeLink).should('have.class', activeClass);
      
          // Ensure other links do not have the active class
          otherLinks.forEach(link => {
            cy.get(link).should('not.have.class', activeClass);
          });
        };
      
        // Test all pages with the helper function
        testActiveLink(
          '/',
          NavBarComponent.HOME_LINK,
          [
            NavBarComponent.ABOUT_LINK,
            NavBarComponent.PROJECTS_LINK,
            NavBarComponent.RESUME_LINK,
            NavBarComponent.RECOMMENDATIONS_LINK,
            NavBarComponent.CONTACT_LINK,
          ]
        );
      
        testActiveLink(
          '/about',
          NavBarComponent.ABOUT_LINK,
          [
            NavBarComponent.HOME_LINK,
            NavBarComponent.PROJECTS_LINK,
            NavBarComponent.RESUME_LINK,
            NavBarComponent.RECOMMENDATIONS_LINK,
            NavBarComponent.CONTACT_LINK,
          ]
        );
      
        testActiveLink(
          '/projects',
          NavBarComponent.PROJECTS_LINK,
          [
            NavBarComponent.HOME_LINK,
            NavBarComponent.ABOUT_LINK,
            NavBarComponent.RESUME_LINK,
            NavBarComponent.RECOMMENDATIONS_LINK,
            NavBarComponent.CONTACT_LINK,
          ]
        );
      
        testActiveLink(
          '/resume',
          NavBarComponent.RESUME_LINK,
          [
            NavBarComponent.HOME_LINK,
            NavBarComponent.ABOUT_LINK,
            NavBarComponent.PROJECTS_LINK,
            NavBarComponent.RECOMMENDATIONS_LINK,
            NavBarComponent.CONTACT_LINK,
          ]
        );
      
        testActiveLink(
          '/recommendations',
          NavBarComponent.RECOMMENDATIONS_LINK,
          [
            NavBarComponent.HOME_LINK,
            NavBarComponent.ABOUT_LINK,
            NavBarComponent.PROJECTS_LINK,
            NavBarComponent.RESUME_LINK,
            NavBarComponent.CONTACT_LINK,
          ]
        );
      
        testActiveLink(
          '/contact',
          NavBarComponent.CONTACT_LINK,
          [
            NavBarComponent.HOME_LINK,
            NavBarComponent.ABOUT_LINK,
            NavBarComponent.PROJECTS_LINK,
            NavBarComponent.RESUME_LINK,
            NavBarComponent.RECOMMENDATIONS_LINK,
          ]
        );
      });
      
  });
  