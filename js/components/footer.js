(function (window) {
  'use strict';

  var fromState = d3.reduxFromState;

  window.components = window.components || {};

  window.components.footer = function () {
    var clearCompleted = window.components.clearCompleted();
    var todoCount = window.components.todoCount();
    var filterList = window.components.filterList();

    return function (footer) {
      footer
        .datum(fromState(function (state) {
          return state.todos;
        }))
        .style('display', function (d) {
          if (!d.length) return 'none';
        });

      footer.select('.clear-completed').call(clearCompleted);
      footer.select('.todo-count').call(todoCount);
      footer.select('.filters').call(filterList);
    };
  };

})(window);
