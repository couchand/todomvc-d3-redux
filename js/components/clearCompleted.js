import { clearCompleted as clearCompletedAction } from '../actions';
import { filterCompleted } from '../filters';

var dispatch = d3.reduxDispatch;
var fromState = d3.reduxFromState;

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
