export var ADD_TODO = 'ADD_TODO';
export var EDIT_BEGIN_TODO = 'EDIT_BEGIN_TODO';
export var EDIT_CANCEL_TODO = 'EDIT_CANCEL_TODO';
export var EDIT_SAVE_TODO = 'EDIT_SAVE_TODO';
export var TOGGLE_TODO = 'TOGGLE_TODO';
export var DESTROY_TODO = 'DESTROY_TODO';

export var TOGGLE_ALL = 'TOGGLE_ALL';
export var CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export var SET_FILTER = 'SET_FILTER';

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: { title }
  }
}

export function editBeginTodo(id) {
  return {
    type: EDIT_BEGIN_TODO,
    payload: { id }
  }
}

export function editCancelTodo(id) {
  return {
    type: EDIT_CANCEL_TODO,
    payload: { id }
  }
}

export function editSaveTodo(id, title) {
  return {
    type: EDIT_SAVE_TODO,
    payload: { id, title }
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: { id }
  }
}

export function destroyTodo(id) {
  return {
    type: DESTROY_TODO,
    payload: { id }
  }
}

export function toggleAll() {
  return {
    type: TOGGLE_ALL
  }
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  }
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: { filter }
  }
}
