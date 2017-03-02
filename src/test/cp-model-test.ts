'use strict';

import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.use(sinonChai);

import * as loopback from 'loopback';
import * as cp from '../main/cp-model';

describe('Carrick Park model mixin', function () {

  it('Should contain host name on create', function () {
    const ctx = { req: { accessToken: 'testtoken', get: {} } };
    const Model: loopback.Model = { createOptionsFromRemotingContext: function (ctxin: any) { return null; }};

    ctx.req.get = sinon.stub().returns('testhost');

    cp.mixins.CPModel(Model, {});
    const options = Model.createOptionsFromRemotingContext(ctx);

    expect(options.host).to.equal('testhost');
    expect(options.accessToken).to.equal('testtoken');
  });

});
