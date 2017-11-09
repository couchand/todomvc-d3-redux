(function (window) {
  'use strict';

  var fromState = d3.reduxFromState;

  window.components = window.components || {};

  window.components.todoCount = function () {
    var filterActive = window.filters.activeTodos;

    return function (todoCount) {
      todoCount.datum(fromState(function (state) {
        return filterActive(state.todos).length;
      }));

      todoCount.select('strong')
        .text(function (d) { return d; });

      todoCount.select('span')
        .text(function (d) {
          return d === 1 ? ' item left' : ' items left';
        });
    };
  };

})(window);
