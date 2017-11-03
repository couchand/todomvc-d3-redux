(function (window) {
  'use strict';

  var app, sel;

  window.createView = function createView(store) {
    app = window.components.app();
    sel = d3.select('.todoapp')
      .provide(store)
      .connect(app);
  };

})(window);
