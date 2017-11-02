(function (window) {
  'use strict';

  var storeLocal = d3.local();

  d3.selection.prototype.provide = function (store) {
    return this.property(storeLocal, store);
  };

  d3.selection.prototype.dispatchOn = function (event, handler) {
    return this.each(function () {
      var store = storeLocal.get(this);
      d3.select(this)
        .on(event, function (d, i, g) {
          var action = handler.call(this, d, i, g);
          if (action) store.dispatch(action);
        });
    });
  };

  d3.selection.prototype.datumFromState = function (selector) {
    return this.each(function () {
      var store = storeLocal.get(this);
      d3.select(this)
        .datum(selector(store.getState()));
    });
  };

  d3.selection.prototype.dataFromState = function (selector) {
    return this.data(function () {
      var store = storeLocal.get(this);
      return selector(store.getState());
    });
  };

})(window);
