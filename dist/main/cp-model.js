/**
 * Add the host to remoting options
 */
"use strict";
module.exports = function CPModel(Model, options) {
    console.log('loaded CPModel');
    Model.createOptionsFromRemotingContext = function (ctx) {
        console.log(' ctx ' + ctx.req.get('host'));
        return {
            accessToken: ctx.req.accessToken,
            host: ctx.req.get('host')
        };
    };
};
