(function (window) {
  'use strict';

  window.components = window.components || {};

  window.components.toggleAll = function () {
    var toggleAllAction = window.actions.toggleAll;
    var filterActive = window.filters.activeTodos;

    return function (toggleAll) {
      toggleAll
        .dispatchOn('click', toggleAllAction)
        .datumFromState(function (state) {
          return state.todos;
        })
        .property('checked', function (d) {
          var any = d.length;
          var anyActive = filterActive(d).length;
          return any && !anyActive;
        });
    };
  };

})(window);
