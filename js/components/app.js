(function (window) {
  'use strict';

  window.components = window.components || {};

  window.components.app = function (dispatch) {
    var newTodo = window.components.newTodo(dispatch);
    var toggleAll = window.components.toggleAll(dispatch);
    var main = window.components.main(dispatch);
    var footer = window.components.footer(dispatch);

    return function (app) {
      app.select(".new-todo")
        .call(newTodo);

      app.select(".toggle-all")
        .call(toggleAll);

      app.select(".main")
        .call(main);

      app.select(".footer")
        .call(footer);
    };
  };

})(window);
