(function (window) {
  'use strict';

  window.components = window.components || {};

  window.components.main = function (dispatch) {
    var todoList = window.components.todoList(dispatch);

    return function (main) {
      main
        .datum(function (d) {
          var filter = window.filters.get(d.filter);
          return d.todos.filter(filter.predicate);
        })
        .style('display', function (d) {
          if (!d.length) return 'none';
        });

      main.select('.todo-list').call(todoList);
    };
  };

})(window);
