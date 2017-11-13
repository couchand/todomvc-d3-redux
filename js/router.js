import { Router } from 'director';

import { setFilter } from './actions';
import { getFilters } from './filters';

export function startRouting(dispatch) {
  function handleFilter(type) {
    return function () {
      dispatch(setFilter(type));
    };
  }

  var routes = {};
  getFilters().forEach(function (filter) {
    routes[filter.route] = handleFilter(filter.type);
  });

  var router = Router(routes);
  router.init();
}
