(function (window) {
  'use strict';

  var SHOW_ALL = 'SHOW_ALL';
  var SHOW_ACTIVE = 'SHOW_ACTIVE';
  var SHOW_COMPLETED = 'SHOW_COMPLETED';

  var filterConfig = [
    {
      type: SHOW_ALL,
      title: "All",
      route: "/",
      predicate: function (todo) { return true; }
    },
    {
      type: SHOW_ACTIVE,
      title: "Active",
      route: "/active",
      predicate: activePredicate
    },
    {
      type: SHOW_COMPLETED,
      title: "Completed",
      route: "/completed",
      predicate: completedPredicate
    }
  ];

  function activePredicate(todo) {
    return !todo.completed;
  }

  function completedPredicate(todo) {
    return todo.completed;
  }

  function filterActive(todos) {
    return todos.filter(activePredicate);
  }

  function filterCompleted(todos) {
    return todos.filter(completedPredicate);
  }

  function getFilter(current) {
    var selected = filterConfig.filter(function (filter) {
      return filter.type === current
    });

    if (selected.length) return selected[0];
    return filterConfig[0];
  }

  function getFilters(current) {
    return filterConfig.map(function (filter) {
      return {
        type: filter.type,
        title: filter.title,
        route: filter.route,
        predicate: filter.predicate,
        selected: filter.type === current
      };
    });
  }

  window.filters = {
    SHOW_ALL: SHOW_ALL,
    SHOW_ACTIVE: SHOW_ACTIVE,
    SHOW_COMPLETED: SHOW_COMPLETED,

    activeTodos: filterActive,
    completedTodos: filterCompleted,

    defaultFilter: SHOW_ALL,

    get: getFilter,
    getAll: getFilters
  };

})(window);
