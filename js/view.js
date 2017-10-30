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

    var main = app.select(".main")
      .datum(function (d) {
        var filter = window.filters.get(d.filter);
        return d.todos.filter(filter.predicate);
      })
      .style("display", function (d) { if (!d.length) return "none"; });

    var todoList = window.components.todoList(dispatch);

    main.select(".todo-list")
      .call(todoList);

    var footer = window.components.footer(dispatch);

    app.select(".footer")
      .call(footer);
  };

})(window);
