import { combineReducers, createStore } from 'redux';

import {
  ADD_TODO,
  EDIT_BEGIN_TODO,
  EDIT_CANCEL_TODO,
  EDIT_SAVE_TODO,
  TOGGLE_TODO,
  DESTROY_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
  SET_FILTER,
} from './actions';
import { defaultFilter } from './filters';

function getNextId(todos) {
  var lastId = todos
    .map(function (todo) { return todo.id; })
    .reduce(function (a, b) { return Math.max(a, b); }, -1);

  return lastId + 1;
}

function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      var newTodo = {
        id: getNextId(state),
        title: action.payload.title,
        completed: false,
        editing: false
      };
      return state.concat([newTodo]);

    case EDIT_BEGIN_TODO:
      return state.map(function (todo) {
        if (todo.id !== action.payload.id) return todo;

        return Object.assign({}, todo, { editing: true });
      });

    case EDIT_CANCEL_TODO:
      return state.map(function (todo) {
        if (todo.id !== action.payload.id) return todo;

        return Object.assign({}, todo, { editing: false });
      });

    case EDIT_SAVE_TODO:
      return state.map(function (todo) {
        if (todo.id !== action.payload.id) return todo;

        return Object.assign({}, todo, {
          title: action.payload.title,
          editing: false
        });
      });

    case TOGGLE_TODO:
      return state.map(function (todo) {
        if (todo.id !== action.payload.id) return todo;

        return Object.assign({}, todo, { completed: !todo.completed });
      });

    case DESTROY_TODO:
      return state.filter(function (todo) {
        return todo.id !== action.payload.id;
      });

    case TOGGLE_ALL:
      var anyLeft = state.filter(function (todo) {
        return !todo.completed;
      }).length;
      return state.map(function (todo) {
        return Object.assign({}, todo, { completed: anyLeft });
      });

    case CLEAR_COMPLETED:
      return state.filter(function (todo) {
        return !todo.completed;
      });

    default:
      return state;
  }
}

function filterReducer(state = defaultFilter, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;

    default:
      return state;
  }
}

var rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  );
}
