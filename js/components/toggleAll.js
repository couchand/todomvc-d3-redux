import { toggleAll as toggleAllAction } from '../actions';
import { filterActive } from '../filters';

var dispatch = d3.reduxDispatch;
var fromState = d3.reduxFromState;

export default function () {
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
}
