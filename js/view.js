(function (window) {
  'use strict';

  window.updateView = function updateView() {
    var app = d3.select(".todoapp")
      .datum({
        nextId: 3,
        todos: [
          {
            id: 1,
            title: "Taste JavaScript",
            completed: true,
            editing: false
          },
          {
            id: 2,
            title: "Buy a unicorn",
            completed: false,
            editing: false
          }
        ]
      });

    var main = app.select(".main")
      .style("display", function (d) { if (!d.todos.length) return "none"; });

    var todosJoin = main.select(".todo-list")
      .selectAll("li")
      .data(function (d) { return d.todos; }, function (d) { return d.id; });

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

    todosView.append("label");

    todosView.append("button")
      .attr("class", "destroy");

    todosEnter.append("input")
      .attr("class", "edit")

    var todos = todosEnter.merge(todosJoin);

    todos.classed("completed", function (d) { return d.completed; })

    todos.selectAll("input.toggle")
      .attr("checked", function (d) { if (d.completed) return "checked"; });

    todos.selectAll("label")
      .text(function (d) { return d.title; });

    todos.selectAll("input.edit")
      .attr("value", function (d) { return d.title; });

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
      .data([
        {
          title: "All",
          route: "#/",
          selected: true
        },
        {
          title: "Active",
          route: "#/active",
          selected: false
        },
        {
          title: "Completed",
          route: "#/completed",
          selected: false
        }
      ]);

    filtersJoin.exit()
      .remove();

    var filtersEnter = filtersJoin.enter()
      .append("li");

    filtersEnter.append("a")
      .attr("href", function (d) { return d.route; })
      .text(function (d) { return d.title; });

    var filters = filtersEnter.merge(filtersJoin);

    filters.selectAll("a")
      .classed("selected", function (d) { return d.selected; });
  };

})(window);
