let server = require('../server');
let chai = require('chai');
// let chaiHttp = require('chai-http');
const { response } = require('express');

//assertion
chai.should();
// chai.use(chaiHttp);

describe('Task APIs', () => {
    describe('Test GET api', () => {
        it('it should return all tasks', (done) => {
            chai.request(server)
            .get('/getBookList')
            .end(() => {
                response.should.have.status(200);
                done();
            });
        });
    });
});