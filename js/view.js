var provide = d3.reduxProvide;
var connect = d3.reduxConnect;

var app, sel;

export function createView(store) {
  app = window.components.app();
  sel = d3.select('.todoapp')
    .call(provide(store))
    .call(connect(app));
}
