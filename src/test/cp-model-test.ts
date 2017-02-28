'use strict';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var mixin = require('../src/cp-model');

describe('Carrick Park model mixin', function () {

  it('Should contain host name on create', function () {
    var ctx = { req: { accessToken: "testtoken"} };
    var Model = {};

    ctx.req.get = sinon.stub().returns('testhost');

    mixin(Model);

    var options = Model.createOptionsFromRemotingContext(ctx);

    expect(options.host).to.equal('testhost');
    expect(options.accessToken).to.equal('testtoken');
  });

});
