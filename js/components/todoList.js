(function (window) {
  'use strict';

  var dispatch = d3.reduxDispatch;

  window.components = window.components || {};

  window.components.todoList = function () {
    var ENTER_KEY = window.keycodes.ENTER_KEY;
    var ESCAPE_KEY = window.keycodes.ESCAPE_KEY;

    var editBeginTodo = window.actions.editBeginTodo;
    var editCancelTodo = window.actions.editCancelTodo;
    var editSaveTodo = window.actions.editSaveTodo;
    var toggleTodo = window.actions.toggleTodo;
    var destroyTodo = window.actions.destroyTodo;

    function updateTodo(d) {
      var title = this.value.trim();
      if (!title) {
        return destroyTodo(d.id, title);
      }
      else {
        return editSaveTodo(d.id, title);
      }
    }

    return function (todoList) {
      var todosJoin = todoList.selectAll('li')
        .data(function (d) { return d; }, function (d) { return d.id; });

      todosJoin.exit()
        .remove();

      var todosEnter = todosJoin.enter()
        .append('li');

      var todosView = todosEnter
        .append('div')
        .attr('class', 'view');

      todosView.append('input')
        .attr('class', 'toggle')
        .attr('type', 'checkbox')
        .on('click', dispatch(function (d) {
          return toggleTodo(d.id);
        }));

      todosView.append('label')
        .on('dblclick', dispatch(function (d) {
          return editBeginTodo(d.id);
        }));

      todosView.append('button')
        .attr('class', 'destroy')
        .on('click', dispatch(function (d) {
          return destroyTodo(d.id);
        }));

      todosEnter.append('input')
        .attr('class', 'edit')
        .on('blur', dispatch(updateTodo))
        .on('keyup', dispatch(function (d) {
          if (d3.event.which === ENTER_KEY) {
            return updateTodo.call(this, d);
          }
          if (d3.event.which === ESCAPE_KEY) {
            return editCancelTodo(d.id);
          }
        }));

      var todos = todosEnter.merge(todosJoin);

      todos
        .classed('completed', function (d) { return d.completed; })
        .classed('editing', function (d) { return d.editing; });

      todos.select('input.toggle')
        .property('checked', function (d) { return d.completed; });

      todos.select('label')
        .text(function (d) { return d.title; });

      todos.select('input.edit')
        .property('value', function (d) { return d.title; });

      todos.filter(function (d) { return d.editing; })
        .select('input.edit')
        .nodes()
        .forEach(function (node) { return node.focus(); });
    };
  };

})(window);
