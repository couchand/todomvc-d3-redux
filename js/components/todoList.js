(function (window) {
  'use strict';

  window.components = window.components || {};

  window.components.todoList = function (dispatch) {
    var ENTER_KEY = window.keycodes.ENTER_KEY;
    var ESCAPE_KEY = window.keycodes.ESCAPE_KEY;

    var editBeginTodo = window.actions.editBeginTodo;
    var editCancelTodo = window.actions.editCancelTodo;
    var editSaveTodo = window.actions.editSaveTodo;
    var toggleTodo = window.actions.toggleTodo;
    var destroyTodo = window.actions.destroyTodo;

    return function (todoList) {
      var todosJoin = todoList.selectAll("li")
        .data(function (d) { return d; }, function (d) { return d.id; });

      todosJoin.exit()
        .remove();

      var todosEnter = todosJoin.enter()
        .append("li");

      var todosView = todosEnter
        .append("div")
        .attr("class", "view");

      todosView.append("input")
        .attr("class", "toggle")
        .attr("type", "checkbox")
        .on("click", function (d) {
          dispatch(toggleTodo(d.id));
        });

      todosView.append("label")
        .on("dblclick", function (d) {
          dispatch(editBeginTodo(d.id));
        });

      todosView.append("button")
        .attr("class", "destroy")
        .on("click", function (d) {
          dispatch(destroyTodo(d.id));
        });

      function updateTodo(d) {
        var title = this.value.trim();
        if (!title) {
          dispatch(destroyTodo(d.id, title));
        }
        else {
          dispatch(editSaveTodo(d.id, title));
        }
      }

      todosEnter.append("input")
        .attr("class", "edit")
        .on("blur", updateTodo)
        .on("keyup", function (d) {
          if (d3.event.which === ENTER_KEY) {
            updateTodo.call(this, d);
          }
          if (d3.event.which === ESCAPE_KEY) {
            dispatch(editCancelTodo(d.id));
          }
        });

      var todos = todosEnter.merge(todosJoin);

      todos
        .classed("completed", function (d) { return d.completed; })
        .classed("editing", function (d) { return d.editing; });

      todos.select("input.toggle")
        .property("checked", function (d) { return d.completed; });

      todos.select("label")
        .text(function (d) { return d.title; });

      todos.select("input.edit")
        .property("value", function (d) { return d.title; });

      todos.filter(function (d) { return d.editing; })
        .select("input.edit")
        .nodes()
        .forEach(function (node) { return node.focus(); });
    };
  };

})(window);
