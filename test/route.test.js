/*global beforeAll,afterAll,expect*/
'use strict';

const expect = require('expect');
const server = require('../lib/server');
const request = require('superagent');
require('dotenv').config();

describe('Testing Lab 8 POST', () => {
    before((done) => {
        server.start(process.env.PORT || 5000);
        done();
    });

    after((done) => {
        server.stop();
        done();
    });

    it('', () => {

    });

});

describe('Testing Lab 8 GET', () => {
    before((done) => {
        server.start(process.env.PORT || 5000);
        done();
    });

    after((done) => {
        server.stop();
        done();
    });

    it('', () => {

    });

});

describe('Testing Lab 8 DELETE', () => {
    before((done) => {
        server.start(process.env.PORT || 5000);
        done();
    });

    after((done) => {
        server.stop();
        done();
    });

    // error if no ?uuid= passed in POSt
    it('Should Ask user to POST parameters if no body on POSt', (done) => {
        request.delete('localhost:5000/api/notes').end((err, res) => {
            expect(res.text).toEqual('Please send a ?uuid= parameter with your POST request');
            done();
        });
    });

    //error if note not found
    it('Should reply that no note was found if uuid does not exist', (done) => {
        request.delete('localhost:5000/api/notes?uuid=234234234').end((err, res) => {
            expect(res.text).toEqual('Note not found. Please try another uuid');
            done();
        });
    });

    // note is correctly deleted
    it('Shoud reply that a note is successfully deleted when a uuid exists and is deleted', (done) => {
        request.delete('localhost:5000/api/notes?uuid=12345').end((err, res) => {
            expect(res.text).toEqual('Note Deleted.');
            done();
        });
    });
});