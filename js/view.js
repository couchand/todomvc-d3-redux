(function (window) {
  'use strict';

  var provide = d3.reduxProvide;
  var connect = d3.reduxConnect;

  var app, sel;

  window.createView = function createView(store) {
    app = window.components.app();
    sel = d3.select('.todoapp')
      .call(provide(store))
      .call(connect(app));
  };

})(window);
