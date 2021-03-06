const faker = require('faker'),
    _ = require('lodash');

/* Create fake data for forms */
let rand = faker.internet.password(8, true);
let data = {
 page: 'https://goo.gl/6rj684',
 pwd : 'qweqwe123',
 firstName: faker.name.firstName(),
 lastName: faker.name.lastName(),
 email : `a-${rand}@mailinator.com`,
 emailGetStarted : `b-${rand}@mailinator.com`,
};

/* Scenarios for "windowSize": "maximize" */
Feature('Demo');

Scenario('User can create account', (I) => {
    I.amOnPage(data.page);
    I.waitForText('Create Account', 80);
  }
);
