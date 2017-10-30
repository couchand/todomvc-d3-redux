(function (window) {
  'use strict';

  var app;

  window.createView = function createView(dispatch) {
    app = window.components.app(dispatch);
  };

  window.updateView = function updateView(state, dispatch) {
    d3.select('.todoapp')
      .datum(state)
      .call(app);
  };

})(window);
