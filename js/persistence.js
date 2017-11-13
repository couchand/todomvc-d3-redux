var STORAGE_NAME = 'todomvc-d3-redux';

export function persistTodos(state) {
  var todos = state.todos.map(function (todo) {
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed
    };
  });

  window.localStorage.setItem(STORAGE_NAME, JSON.stringify(todos));
}

export function retrieveTodos() {
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
}
