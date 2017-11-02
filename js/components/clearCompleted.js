(function (window) {
  'use strict';

  window.components = window.components || {};

  window.components.clearCompleted = function () {
    var clearCompletedAction = window.actions.clearCompleted;
    var filterCompleted = window.filters.completedTodos;

    return function (clearCompleted) {
      clearCompleted
        .dispatchOn('click', clearCompletedAction)
        .datumFromState(function (state) {
          return filterCompleted(state.todos);
        })
        .style('display', function (d) {
          var anyCompleted = d.length;
          if (!anyCompleted) return 'none';
        });
    };
  };

})(window);
