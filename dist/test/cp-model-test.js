"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var CPModel = require("../main/cp-model");
var expect = chai.expect;
chai.use(sinonChai);
describe('Carrick Park model mixin', function () {
    it('Should contain host name on create', function () {
        var ctx = {
            req: {
                accessToken: 'testtoken',
                get: {}
            }
        };
        var Model = {
            createOptionsFromRemotingContext: sinon.stub()
        };
        ctx.req.get = sinon.stub().returns('testhost');
        CPModel(Model, {});
        var options = Model.createOptionsFromRemotingContext(ctx);
        expect(options.host).to.equal('testhost');
        expect(options.accessToken).to.equal('testtoken');
    });
});
