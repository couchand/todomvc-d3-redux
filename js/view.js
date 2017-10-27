(function (window) {
  'use strict';

  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;

  var addTodo = window.actions.addTodo;
  var editBeginTodo = window.actions.editBeginTodo;
  var editCancelTodo = window.actions.editCancelTodo;
  var editSaveTodo = window.actions.editSaveTodo;
  var toggleTodo = window.actions.toggleTodo;
  var destroyTodo = window.actions.destroyTodo;

  var toggleAll = window.actions.toggleAll;
  var clearCompleted = window.actions.clearCompleted;

  var SHOW_ALL = window.filters.SHOW_ALL;
  var SHOW_ACTIVE = window.filters.SHOW_ACTIVE;
  var SHOW_COMPLETED = window.filters.SHOW_COMPLETED;

  window.updateView = function updateView(state, dispatch) {

    var app = d3.select(".todoapp")
      .datum(state);

    app.select(".new-todo")
      .on("keyup", function () {
        if (d3.event.which === ENTER_KEY) {
          var title = this.value.trim();
          this.value = "";
          if (!title) return;

          dispatch(addTodo(title));
        }
      });

    app.select(".toggle-all")
      .property("checked", function (d) {
        var any = d.todos.length;
        var anyLeft = d.todos.filter(function (t) { return !t.completed; }).length;
        return any && !anyLeft;
      })
      .on("click", function () {
        dispatch(toggleAll());
      });

    app.select(".clear-completed")
      .style("display", function (d) {
        var anyDone = d.todos.filter(function (t) { return t.completed; }).length;
        if (!anyDone) return "none";
      })
      .on("click", function () {
        dispatch(clearCompleted());
      });

    var main = app.select(".main")
      .datum(function (d) {
        return d.todos.filter(function (todo) {
          switch (state.filter) {
            case SHOW_ACTIVE:
              return !todo.completed;

            case SHOW_COMPLETED:
              return todo.completed;

            case SHOW_ALL:
            default:
              return true
          }
        });
      })
      .style("display", function (d) { if (!d.length) return "none"; });

    var todosJoin = main.select(".todo-list")
      .selectAll("li")
      .data(function (d) { return d; }, function (d) { return d.id; });

    todosJoin.exit()
      .remove();

    var todosEnter = todosJoin.enter()
      .append("li");

    var todosView = todosEnter
      .append("div")
      .attr("class", "view");

    todosView.append("input")
      .attr("class", "toggle")
      .attr("type", "checkbox")
      .on("click", function (d) {
        dispatch(toggleTodo(d.id));
      });

    todosView.append("label")
      .on("dblclick", function (d) {
        dispatch(editBeginTodo(d.id));
      });

    todosView.append("button")
      .attr("class", "destroy")
      .on("click", function (d) {
        dispatch(destroyTodo(d.id));
      });

    function updateTodo(d) {
      var title = this.value.trim();
      if (!title) {
        dispatch(destroyTodo(d.id, title));
      }
      else {
        dispatch(editSaveTodo(d.id, title));
      }
    }

    todosEnter.append("input")
      .attr("class", "edit")
      .on("blur", updateTodo)
      .on("keyup", function (d) {
        if (d3.event.which === ENTER_KEY) {
          updateTodo.call(this, d);
        }
        if (d3.event.which === ESCAPE_KEY) {
          dispatch(editCancelTodo(d.id));
        }
      });

    var todos = todosEnter.merge(todosJoin);

    todos
      .classed("completed", function (d) { return d.completed; })
      .classed("editing", function (d) { return d.editing; });

    todos.select("input.toggle")
      .property("checked", function (d) { return d.completed; });

    todos.select("label")
      .text(function (d) { return d.title; });

    todos.select("input.edit")
      .property("value", function (d) { return d.title; });

    todos.filter(function (d) { return d.editing; })
      .select("input.edit")
      .nodes()
      .forEach(function (node) { return node.focus(); });

    var footer = app.select(".footer")
      .style("display", function (d) { if (!d.todos.length) return "none"; });

    var todoCount = footer.select(".todo-count")
      .datum(function (d) {
        return d.todos.filter(function (t) { return !t.completed; }).length;
      });

    todoCount.select("strong")
      .text(function (d) { return d; });

    todoCount.select("span")
      .text(function (d) { return d === 1 ? " item left" : " items left"; });

    var filtersJoin = footer.select(".filters")
      .selectAll("li")
      .data(function (d) {
        return [
          {
            title: "All",
            route: "#/",
            selected: d.filter === SHOW_ALL
          },
          {
            title: "Active",
            route: "#/active",
            selected: d.filter === SHOW_ACTIVE
          },
          {
            title: "Completed",
            route: "#/completed",
            selected: d.filter === SHOW_COMPLETED
          }
        ];
      });

    filtersJoin.exit()
      .remove();

    var filtersEnter = filtersJoin.enter()
      .append("li");

    filtersEnter.append("a")
      .attr("href", function (d) { return d.route; })
      .text(function (d) { return d.title; });

    var filters = filtersEnter.merge(filtersJoin);

    filters.select("a")
      .classed("selected", function (d) { return d.selected; });
  };

})(window);
