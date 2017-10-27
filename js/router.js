(function (window) {
  'use strict';

  window.startRouting = function startRouting(dispatch) {
    function handleFilter(type) {
      return function () {
        dispatch(window.actions.setFilter(type));
      };
    }

    var routes = {};
    window.filters.getAll().forEach(function (filter) {
      routes[filter.route] = handleFilter(filter.type);
    });

    var router = Router(routes);
    router.init();
  };

})(window);
