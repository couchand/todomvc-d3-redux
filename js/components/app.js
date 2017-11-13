import NewTodo from './newTodo';
import ToggleAll from './toggleAll';
import Main from './main';
import Footer from './footer';

export default function () {
  var newTodo = NewTodo();
  var toggleAll = ToggleAll();
  var main = Main();
  var footer = Footer();

  return function (app) {
    app.select('.new-todo').call(newTodo);
    app.select('.toggle-all').call(toggleAll);
    app.select('.main').call(main);
    app.select('.footer').call(footer);
  };
}
