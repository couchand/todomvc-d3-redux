(function (window) {
  'use strict';

  var dispatch = d3.reduxDispatch;
  var fromState = d3.reduxFromState;

  window.components = window.components || {};

  window.components.clearCompleted = function () {
    var clearCompletedAction = window.actions.clearCompleted;
    var filterCompleted = window.filters.completedTodos;

    return function (clearCompleted) {
      clearCompleted
        .on('click', dispatch(clearCompletedAction))
        .datum(fromState(function (state) {
          return filterCompleted(state.todos);
        }))
        .style('display', function (d) {
          var anyCompleted = d.length;
          if (!anyCompleted) return 'none';
        });
    };
  };

})(window);
