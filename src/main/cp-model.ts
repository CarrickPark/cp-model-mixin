/*
 * Add the host to remoting options
 */

import * as loopback from 'loopback';

export default CPModel;

export function CPModel(Model: loopback.Model, options: any) {
  console.log('loaded CPModel');
    Model.createOptionsFromRemotingContext = function(ctx) {
      console.log(' ctx ' + ctx.req.get('host'));
      return {
        accessToken: ctx.req.accessToken,
        host: ctx.req.get('host')
      };
    };
};