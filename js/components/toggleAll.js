(function (window) {
  'use strict';

  window.components = window.components || {};

  window.components.toggleAll = function (dispatch) {
    var toggleAllAction = window.actions.toggleAll;
    var filterActive = window.filters.activeTodos;

    return function (toggleAll) {
      toggleAll
        .on('click', function () {
          dispatch(toggleAllAction());
        })
        .property('checked', function (d) {
          var any = d.todos.length;
          var anyActive = filterActive(d.todos).length;
          return any && !anyActive;
        });
    };
  };

})(window);
