import { reduxFromState as fromState } from 'd3-redux';

import ClearCompleted from './clearCompleted';
import TodoCount from './todoCount';
import FilterList from './filterList';

export default function () {
  var clearCompleted = ClearCompleted();
  var todoCount = TodoCount();
  var filterList = FilterList();

  return function (footer) {
    footer
      .datum(fromState(function (state) {
        return state.todos;
      }))
      .style('display', function (d) {
        if (!d.length) return 'none';
      });

    footer.select('.clear-completed').call(clearCompleted);
    footer.select('.todo-count').call(todoCount);
    footer.select('.filters').call(filterList);
  };
}
