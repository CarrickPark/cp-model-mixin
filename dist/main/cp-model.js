"use strict";
var cp;
(function (cp) {
    var mixins;
    (function (mixins) {
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
        mixins.CPModel = CPModel;
        ;
    })(mixins = cp.mixins || (cp.mixins = {}));
})(cp || (cp = {}));
module.exports = cp;
