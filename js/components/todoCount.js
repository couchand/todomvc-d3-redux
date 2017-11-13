import { reduxFromState as fromState } from 'd3-redux';

import { filterActive } from '../filters';

export default function () {
  return function (todoCount) {
    todoCount.datum(fromState(function (state) {
      return filterActive(state.todos).length;
    }));

    todoCount.select('strong')
      .text(function (d) { return d; });

    todoCount.select('span')
      .text(function (d) {
        return d === 1 ? ' item left' : ' items left';
      });
  };
}
