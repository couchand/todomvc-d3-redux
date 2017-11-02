(function (window) {
  'use strict';

  window.components = window.components || {};

  window.components.app = function () {
    var newTodo = window.components.newTodo();
    var toggleAll = window.components.toggleAll();
    var main = window.components.main();
    var footer = window.components.footer();

    return function (app) {
      app.select('.new-todo').call(newTodo);
      app.select('.toggle-all').call(toggleAll);
      app.select('.main').call(main);
      app.select('.footer').call(footer);
    };
  };

})(window);
