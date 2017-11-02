(function (window) {
  'use strict';

  window.components = window.components || {};

  window.components.filterList = function () {
    return function (filterList) {
      var filtersJoin = filterList.selectAll('li')
        .dataFromState(function (state) {
          return window.filters.getAll(state.filter);
        });

      filtersJoin.exit()
        .remove();

      var filtersEnter = filtersJoin.enter()
        .append('li');

      filtersEnter.append('a')
        .attr('href', function (d) { return '#' + d.route; })
        .text(function (d) { return d.title; });

      var filters = filtersEnter.merge(filtersJoin);

      filters.select('a')
        .classed('selected', function (d) { return d.selected; });
    };
  };

})(window);
