(function (window) {
  'use strict';

  window.components = window.components || {};

  window.components.newTodo = function (dispatch) {
    var addTodo = window.actions.addTodo;

    var ENTER_KEY = window.keycodes.ENTER_KEY;

    return function (newTodo) {
      newTodo.on('keyup', function () {
        if (d3.event.which === ENTER_KEY) {
          var title = this.value.trim();
          this.value = '';
          if (!title) return;

          dispatch(addTodo(title));
        }
      });
    };
  };

})(window);
