"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CPModel;
/**
 * Loopback Model mixin adds host to model context.
 *
 * @param Model - The model to add context.
 * @param options The model options.
 */
function CPModel(Model, options) {
    console.log('loaded CPModel');
    Model.createOptionsFromRemotingContext = function (ctx) {
        console.log(' ctx ' + ctx.req.get('host'));
        return {
            accessToken: ctx.req.accessToken,
            host: ctx.req.get('host')
        };
    };
}
exports.CPModel = CPModel;
;
