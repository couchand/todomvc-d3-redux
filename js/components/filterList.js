import { getFilters } from '../filters';

var fromState = d3.reduxFromState;

export default function () {
  return function (filterList) {
    var filtersJoin = filterList.selectAll('li')
      .data(fromState(function (state) {
        return getFilters(state.filter);
      }));

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
}
