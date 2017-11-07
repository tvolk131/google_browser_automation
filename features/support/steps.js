const { Given, When, Then, And } = require('cucumber');
const { expect } = require('chai');
const webdriverio = require('webdriverio');
const options = require('../../config/config.json');

let client;

Given('the Google home page', (callback) => {
  client = webdriverio.remote(options);
  client
    .init()
    .url('https://google.com/')
    .then(() => {
      callback();
    });
});

When('I search for {string}', (query, callback) => {
  client
    .setValue('#lst-ib', `${query}\n`)
    .click('.rc .r a')
    .then(() => {
      callback();
    });
});

When('click on the top link', (callback) => {
  client
    .then(() => {
      callback();
    });
});

Then('I will be redirected to {string}', function (expectedUrl, callback) {
  client
    .getUrl()
    .then((url) => {
      expect(url).to.equal(expectedUrl);
    })
    .end()
    .then(() => {
      callback();
    });
});