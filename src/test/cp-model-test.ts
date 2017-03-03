import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import * as loopback from 'loopback';
import CPModel = require('../main/cp-model');

const expect = chai.expect;

chai.use(sinonChai);

describe('Carrick Park model mixin', function () {
    it('Should contain host name on create', function () {

        const ctx = {
            req: {
                accessToken: 'testtoken',
                get: {}
            }
        };

        const Model: loopback.Model = {
            createOptionsFromRemotingContext: sinon.stub()
        };

        ctx.req.get = sinon.stub().returns('testhost');

        CPModel(Model, {});
        const options = Model.createOptionsFromRemotingContext(ctx);

        expect(options.host).to.equal('testhost');
        expect(options.accessToken).to.equal('testtoken');

    });

});
