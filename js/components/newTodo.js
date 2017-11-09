(function (window) {
  'use strict';

  var dispatch = d3.reduxDispatch;

  window.components = window.components || {};

  window.components.newTodo = function () {
    var addTodo = window.actions.addTodo;

    var ENTER_KEY = window.keycodes.ENTER_KEY;

    return function (newTodo) {
      newTodo.on('keyup', dispatch(function () {
        if (d3.event.which === ENTER_KEY) {
          var title = this.value.trim();
          this.value = '';
          if (title) return addTodo(title);
        }
      }));
    };
  };

})(window);
