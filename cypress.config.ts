import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here for e2e tests if needed
    },
    baseUrl: 'http://localhost:3000',  // Replace with your local or production base URL
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',  // Where Cypress looks for e2e tests
    supportFile: 'cypress/support/e2e.ts',
  },
  component: {
    devServer: {
      framework: 'next', // Use the built-in Next.js framework
      bundler: 'webpack', // Use the default Webpack bundler from Next.js
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here for component tests if needed
    },
    specPattern: 'cypress/component/**/*.cy.{js,ts,jsx,tsx}',  // Where Cypress looks for component tests
    supportFile: 'cypress/support/component.ts',
  },
});
