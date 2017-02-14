/*
 * Add the host to remoting options
 */
module.exports = function(Model, options) {
  console.log("loaded CPModel")
    Model.createOptionsFromRemotingContext = function(ctx) {
      console.log(" ctx " + ctx.req.get('host'));
      return {
        accessToken: ctx.req.accessToken,
        host: ctx.req.get('host')
      };
    };
};
