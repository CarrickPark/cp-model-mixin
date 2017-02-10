var cpModel = require('./mixin');

module.exports = function mixin(app) {
  'use strict';
  app.loopback.modelBuilder.mixins.define('CpModelMixin', cpModel);
};
