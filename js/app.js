(function (window) {
  'use strict';

  var store = window.configureStore(window.retrieveTodos());
  window.startRouting(store.dispatch);
  window.createView(store);
  store.subscribe(handleStoreUpdate);
  handleStoreUpdate();

  var currentState;
  function handleStoreUpdate() {
    var nextState = store.getState();
    if (nextState !== currentState) {
      currentState = nextState;
      window.updateView();
      window.persistTodos(currentState);
    }
  }

})(window);
