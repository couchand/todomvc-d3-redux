import { event as d3event } from 'd3-selection';
import { reduxDispatch as dispatch } from 'd3-redux';

import { ENTER_KEY } from '../keycodes';
import { addTodo } from '../actions';

export default function () {
  return function (newTodo) {
    newTodo.on('keyup', dispatch(function () {
      if (d3event.which === ENTER_KEY) {
        var title = this.value.trim();
        this.value = '';
        if (title) return addTodo(title);
      }
    }));
  };
}
