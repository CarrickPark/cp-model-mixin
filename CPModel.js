/*
 * Add the host to remoting options
 */
module.exports = function(Model, options) {
  console.log("multimodel")
    Model.createOptionsFromRemotingContext = function(ctx) {
      return {
        accessToken: ctx.req.accessToken,
        host: ctx.req.get('host')
      };
    };
};
