import { ENTER_KEY } from '../keycodes';
import { addTodo } from '../actions';

var dispatch = d3.reduxDispatch;

export default function () {
  return function (newTodo) {
    newTodo.on('keyup', dispatch(function () {
      if (d3.event.which === ENTER_KEY) {
        var title = this.value.trim();
        this.value = '';
        if (title) return addTodo(title);
      }
    }));
  };
}
