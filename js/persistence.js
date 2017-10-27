(function (window) {
  'use strict';

  var STORAGE_NAME = 'todomvc-d3-redux';

  window.persistTodos = function persistTodos(state) {
    var todos = state.todos.map(function (todo) {
      return {
        id: todo.id,
        title: todo.title,
        completed: todo.completed
      };
    });

    window.localStorage.setItem(STORAGE_NAME, JSON.stringify(todos));
  };

  window.retrieveTodos = function retrieveTodos() {
    var data = window.localStorage.getItem(STORAGE_NAME);

    if (data) {
      var todos = JSON.parse(data);

      return {
        todos: todos.map(function (todo) {
          return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            editing: false
          };
        })
      };
    }
  };

})(window);
