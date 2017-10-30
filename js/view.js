(function (window) {
  'use strict';

  window.createView = function createView(dispatch) {
    var app = d3.select(".todoapp");

    var newTodo = window.components.newTodo(dispatch);

    app.select(".new-todo")
      .call(newTodo);
  };

  window.updateView = function updateView(state, dispatch) {
    var app = d3.select(".todoapp")
      .datum(state);

    var toggleAll = window.components.toggleAll(dispatch);

    app.select(".toggle-all")
      .call(toggleAll);

    var main = window.components.main(dispatch);

    app.select(".main")
      .call(main);

    var footer = window.components.footer(dispatch);

    app.select(".footer")
      .call(footer);
  };

})(window);
