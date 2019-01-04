FROM cypress/base:latest
WORKDIR /app
RUN npm install
RUN npm install cypress --save-dev
RUN npm install --save-dev cypress-cucumber-preprocessor
# Copy our test page and test files
COPY cypress.json ./
COPY cypress ./cypress
COPY package.json ./

# Running tests
CMD ./node_modules/.bin/cypress run \
