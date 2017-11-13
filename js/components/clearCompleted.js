import {
  reduxDispatch as dispatch,
  reduxFromState as fromState
} from 'd3-redux';

import { clearCompleted as clearCompletedAction } from '../actions';
import { filterCompleted } from '../filters';

export default function () {
  return function (clearCompleted) {
    clearCompleted
      .on('click', dispatch(clearCompletedAction))
      .datum(fromState(function (state) {
        return filterCompleted(state.todos);
      }))
      .style('display', function (d) {
        var anyCompleted = d.length;
        if (!anyCompleted) return 'none';
      });
  };
}
