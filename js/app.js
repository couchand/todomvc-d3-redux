import { configureStore } from './model';
import { persistTodos, retrieveTodos } from './persistence';
import { startRouting } from './router';
import { createView } from './view';

var store = configureStore(retrieveTodos());
startRouting(store.dispatch);
createView(store);
store.subscribe(handleStoreUpdate);
handleStoreUpdate();

var currentState;
function handleStoreUpdate() {
  var nextState = store.getState();
  if (nextState !== currentState) {
    currentState = nextState;
    persistTodos(currentState);
  }
}
