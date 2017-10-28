(function (window) {
  'use strict';

  var store = window.configureStore(window.retrieveTodos());
  window.startRouting(store.dispatch);
  window.createView(store.dispatch);
  store.subscribe(handleStoreUpdate);
  handleStoreUpdate();

  var currentState;
  function handleStoreUpdate() {
    var nextState = store.getState();
    if (nextState !== currentState) {
      currentState = nextState;
      window.updateView(currentState, store.dispatch);
      window.persistTodos(currentState);
    }
  }

})(window);
