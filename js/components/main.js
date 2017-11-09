(function (window) {
  'use strict';

  var fromState = d3.reduxFromState;

  window.components = window.components || {};

  window.components.main = function () {
    var todoList = window.components.todoList();

    return function (main) {
      main
        .datum(fromState(function (state) {
          var filter = window.filters.get(state.filter);
          return state.todos.filter(filter.predicate);
        }))
        .style('display', function (d) {
          if (!d.length) return 'none';
        });

      main.select('.todo-list').call(todoList);
    };
  };

})(window);
