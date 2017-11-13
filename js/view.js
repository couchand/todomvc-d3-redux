import { select } from 'd3-selection';
import {
  reduxProvide as provide,
  reduxConnect as connect
} from 'd3-redux';

import App from './components/app';

export function createView(store) {
  var app = App();

  select('.todoapp')
    .call(provide(store))
    .call(connect(app));
}
