import { AboutPage } from '../../support/pages/AboutPage';

describe('About Page Tests', () => {
    
    beforeEach(() => {
        AboutPage.visit();
    });

    it('should display the about page correctly', () => {
        cy.get(AboutPage.PAGE).should('be.visible');
    });

    it('should display the correct heading', () => {
        AboutPage.getHeading().should('contain.text', 'About Me 🚀');
    });

    it.skip('should display all description paragraphs', () => {
        AboutPage.getAllDescriptions().should('have.length', 6);
        const descriptions = [
            "Hey there! 👋 I’m Joseph, and when I’m not diving deep into the world of quality automation, you’ll probably find me scaling a rock face...",
            "My perfect weekend? It’s all about climbing and camping with my friends, my girlfriend Halle, and my dog Himi...",
            "One of my favorite adventures was a 90-hour solo road trip...",
            "I’ve learned from powerlifting that every rep adds up, just like every small action in our lives...",
            "If I had my ultimate adventure, I’d take a road trip down the coastal highway from Washington...",
            "I’m a fast-paced, excited person with a lot of ideas, always looking for the next challenge..."
        ];

        descriptions.forEach((desc, index) => {
            AboutPage.getDescription(index).its('text').should('contain.text', desc);
        });
    });

    it('should display the image gallery correctly', () => {
        AboutPage.getImageGalleryCard().should('be.visible');
        AboutPage.interactWithImageGallery();
    });

    it('should open and close the image modal when an image is clicked', () => {
        AboutPage.openImageModal(0)
        AboutPage.getModalSize().should('exist');
    });

    it.skip('should check the size of gallery images', () => {
        AboutPage.getGalleryImageSize(0).should((size) => {
            expect(size.width).to.be.greaterThan(0);
            expect(size.height).to.be.greaterThan(0);
        });
    });

    it('should be responsive on mobile devices', () => {
        cy.viewport('iphone-x');
        AboutPage.getContent().should('be.visible');
    });

    it.skip('should verify the size of the image modal', () => {
        AboutPage.getModalImageSize().should((size) => {
            expect(size.width).to.be.greaterThan(100);
            expect(size.height).to.be.greaterThan(100);
        });
    });

    it('should verify the modal is closed after clicking close button', () => {
        AboutPage.interactWithImageGallery();
        cy.get(AboutPage.PAGE).should('not.contain', '[data-cy="image-modal"]');
    });

    it('should check the size of the about content container', () => {
        AboutPage.getContent().should((element) => {
            const size = element[0].getBoundingClientRect();
            expect(size.width).to.be.greaterThan(300);
            expect(size.height).to.be.greaterThan(400);
        });
    });
});
