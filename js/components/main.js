import { reduxFromState as fromState } from 'd3-redux';

import { getFilter } from '../filters';
import TodoList from './todoList';

export default function () {
  var todoList = TodoList();

  return function (main) {
    main
      .datum(fromState(function (state) {
        var filter = getFilter(state.filter);
        return state.todos.filter(filter.predicate);
      }))
      .style('display', function (d) {
        if (!d.length) return 'none';
      });

    main.select('.todo-list').call(todoList);
  };
}
