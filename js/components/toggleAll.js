(function (window) {
  'use strict';

  var dispatch = d3.reduxDispatch;
  var fromState = d3.reduxFromState;

  window.components = window.components || {};

  window.components.toggleAll = function () {
    var toggleAllAction = window.actions.toggleAll;
    var filterActive = window.filters.activeTodos;

    return function (toggleAll) {
      toggleAll
        .on('click', dispatch(toggleAllAction))
        .datum(fromState(function (state) {
          return state.todos;
        }))
        .property('checked', function (d) {
          var any = d.length;
          var anyActive = filterActive(d).length;
          return any && !anyActive;
        });
    };
  };

})(window);
