[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

# About
Tests were written in Cypress.io JavaScript framework with using cucumber-preprocessor for BDD style

Tests cover filter functionality of application which represents dashboard with candidates. Filter is possible by name and city. User could sets or clears the filter.

App locally available on http://localhost:3000
Or via CI on http://localhost:5000

# Installation

## Install Cypress
`npm install cypress --save-dev`

## Install Cucumber plagin

`npm install --save-dev cypress-cucumber-preprocessor`

Add to cypress/plugins/index.js :
```
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

