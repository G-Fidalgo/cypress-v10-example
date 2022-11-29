import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 30000,
  env: {
    domain: "userDomain",
    userName: "tst_user",
    passWord: "test1234",
    layerNames: ["test123", "123test"],
    newLayerName: "NewLayerName",
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // setupNodeEvents(on, config) {
    //   return require('./cypress/plugins/index.js')(on, config);
    // },
    baseUrl: "https://www.google.com/",
    slowTestThreshold: 1000,
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
  },
});
