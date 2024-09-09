import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here for e2e tests if needed
    },
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',
    supportFile: 'cypress/support/e2e.ts',
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here for component tests if needed
    },
    specPattern: 'cypress/component/**/*.cy.{js,ts,jsx,tsx}',
    supportFile: 'cypress/support/component.ts',
  },
});
