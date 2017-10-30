(function (window) {
  'use strict';

  window.components = window.components || {};

  window.components.footer = function (dispatch) {
    var clearCompleted = window.components.clearCompleted(dispatch);
    var todoCount = window.components.todoCount();
    var filterList = window.components.filterList();

    return function (footer) {
      footer.style("display", function (d) {
        if (!d.todos.length) return "none";
      });

      footer.select(".clear-completed")
        .call(clearCompleted);

      footer.select(".todo-count")
        .call(todoCount);

      footer.select(".filters")
        .call(filterList);
    };
  };

})(window);
