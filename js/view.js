import App from './components/app';

var provide = d3.reduxProvide;
var connect = d3.reduxConnect;

export function createView(store) {
  var app = App();

  d3.select('.todoapp')
    .call(provide(store))
    .call(connect(app));
}
