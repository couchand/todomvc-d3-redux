(function (window) {
  'use strict';

  var SHOW_ALL = window.filters.SHOW_ALL;
  var SHOW_ACTIVE = window.filters.SHOW_ACTIVE;
  var SHOW_COMPLETED = window.filters.SHOW_COMPLETED;

  window.startRouting = function startRouting(dispatch) {
    function handleFilter(type) {
      return function () {
        dispatch(window.actions.setFilter(type));
      };
    }

    var router = Router({
      '/': handleFilter(SHOW_ALL),
      '/active': handleFilter(SHOW_ACTIVE),
      '/completed': handleFilter(SHOW_COMPLETED)
    });

    router.init();
  };

})(window);
