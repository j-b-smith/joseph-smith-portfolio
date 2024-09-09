import { projectData } from '../../../public/projects/projectData';
import { ProjectsPage } from '../../support/pages/ProjectsPage';

describe.skip('Projects Page Tests', () => {
  
  beforeEach(() => {
    ProjectsPage.visit();
  });

  it('should display all project cards with correct data', () => {
    ProjectsPage.getNumberOfProjects().then((projectCount: number) => {
      expect(projectCount).to.equal(projectData.length);  // Ensure the number of projects matches

      projectData.forEach((project: any, index: number) => {
        ProjectsPage.getProjectCardTitle(index).should('contain.text', project.customTitle);  // Verify title
        ProjectsPage.getProjectCardSummary(index).should('contain.text', project.summary);  // Verify summary

        project.technologies.forEach((tech: string) => {
          ProjectsPage.getProjectCardBadges(index).should('contain.text', tech);  // Verify badges/technologies
        });
      });
    });
  });

  it('should have uniform size for all project cards', () => {
    ProjectsPage.getNumberOfProjects().then((projectCount: number) => {
      ProjectsPage.getProjectCardSize(0).then((initialSize) => {
        for (let i = 1; i < projectCount; i++) {
          ProjectsPage.getProjectCardSize(i).should((size) => {
            expect(size.width).to.equal(initialSize.width);  // Compare widths
            expect(size.height).to.equal(initialSize.height);  // Compare heights
          });
        }
      });
    });
  });

  it('should display one column of project cards on mobile screens', () => {
    cy.viewport('iphone-x');

    ProjectsPage.getNumberOfProjects().then((projectCount: number) => {
      for (let i = 0; i < projectCount; i++) {
        ProjectsPage.getProjectCard(i)
          .invoke('outerWidth')
          .then((width) => {
            cy.window().its('innerWidth').should('equal', width);  // Card width should equal viewport width
          });
      }
    });
  });

  it('should verify that each project card link works', () => {
    ProjectsPage.getNumberOfProjects().then((projectCount: number) => {
      for (let i = 0; i < projectCount; i++) {
        ProjectsPage.validateProjectLinkWorks(i);
      }
    });
  });
});
