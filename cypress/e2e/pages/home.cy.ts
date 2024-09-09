import { HomePage } from '../../support/pages/HomePage';

describe('Home Page E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the correct heading and subheading text', () => {
    HomePage.getMainHeading().should('contain.text', "Hello, I'm Joseph Smith");
    HomePage.getSubHeading().should('contain.text', 'A passionate Software Engineer specializing in Quality Automation.');
  });

  it('should display the profile image', () => {
    HomePage.getProfileImage().should('be.visible').and('have.attr', 'src').should('include', 'profile.jpeg');
  });

  it('should navigate to projects page when "View My Projects" button is clicked', () => {
    HomePage.clickViewProjectsButton();
    cy.url().should('include', '/projects');
  });

  it('should display all badges', () => {
    const badges = ['Cypress', 'TypeScript', 'Selenium', 'Playwright', 'PyTest', 'Python', 'React', 'Django', 'NextJS'];

    badges.forEach((badge) => {
      HomePage.getBadge(badge).should('be.visible');
    });
  });

  it('should display the homepage correctly on mobile viewport', () => {
    HomePage.setMobileViewport();

    HomePage.getMainHeading().should('be.visible');
    HomePage.getSubHeading().should('be.visible');
    HomePage.getProfileImage().should('be.visible');
    HomePage.getAllBadges().should('have.length', 9);
  });
});
