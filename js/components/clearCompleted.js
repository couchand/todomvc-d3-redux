(function (window) {
  'use strict';

  window.components = window.components || {};

  window.components.clearCompleted = function (dispatch) {
    var clearCompletedAction = window.actions.clearCompleted;
    var filterCompleted = window.filters.completedTodos;

    return function (clearCompleted) {
      clearCompleted
        .on("click", function () {
          dispatch(clearCompletedAction());
        })
        .style("display", function (d) {
          var anyCompleted = filterCompleted(d.todos).length;
          if (!anyCompleted) return "none";
        });
    };
  };

})(window);
