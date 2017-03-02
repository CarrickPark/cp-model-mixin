'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var cp = require("../main/cp-model");
describe('Carrick Park model mixin', function () {
    it('Should contain host name on create', function () {
        var ctx = { req: { accessToken: 'testtoken', get: {} } };
        var Model = { createOptionsFromRemotingContext: function (ctxin) { return null; } };
        ctx.req.get = sinon.stub().returns('testhost');
        cp.mixins.CPModel(Model, {});
        var options = Model.createOptionsFromRemotingContext(ctx);
        expect(options.host).to.equal('testhost');
        expect(options.accessToken).to.equal('testtoken');
    });
});
