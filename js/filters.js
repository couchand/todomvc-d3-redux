export var SHOW_ALL = 'SHOW_ALL';
export var SHOW_ACTIVE = 'SHOW_ACTIVE';
export var SHOW_COMPLETED = 'SHOW_COMPLETED';

export var defaultFilter = SHOW_ALL;

var filterConfig = [
  {
    type: SHOW_ALL,
    title: 'All',
    route: '/',
    predicate: function (todo) { return true; }
  },
  {
    type: SHOW_ACTIVE,
    title: 'Active',
    route: '/active',
    predicate: activePredicate
  },
  {
    type: SHOW_COMPLETED,
    title: 'Completed',
    route: '/completed',
    predicate: completedPredicate
  }
];

function activePredicate(todo) {
  return !todo.completed;
}

function completedPredicate(todo) {
  return todo.completed;
}

export function filterActive(todos) {
  return todos.filter(activePredicate);
}

export function filterCompleted(todos) {
  return todos.filter(completedPredicate);
}

export function getFilter(current) {
  var selected = filterConfig.filter(function (filter) {
    return filter.type === current
  });

  if (selected.length) return selected[0];
  return filterConfig[0];
}

export function getFilters(current) {
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
