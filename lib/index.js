var cpModel = require('./cp-model-mixin');

module.exports = function mixin (app) {
  app.loopback.modelBuilder.mixins.define('CpModelMixin', cpModel);
};
