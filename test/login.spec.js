// const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
    return client.init().url('http://localhost:8080/admin#/login');
});


test('на странице есть кнопка авторизоваться', () => {
    return client
        .isExisting('.authorization__btn')
        .then(browsers => {
            for ( const browserName in browsers){
                expect(browsers[browserName]).toBe(true);
            }
        })

});

afterAll(() => {
    return client.end();
});
