(function (window) {
  'use strict';

  var ADD_TODO = 'ADD_TODO';
  var EDIT_BEGIN_TODO = 'EDIT_BEGIN_TODO';
  var EDIT_CANCEL_TODO = 'EDIT_CANCEL_TODO';
  var EDIT_SAVE_TODO = 'EDIT_SAVE_TODO';
  var TOGGLE_TODO = 'TOGGLE_TODO';
  var DESTROY_TODO = 'DESTROY_TODO';

  var TOGGLE_ALL = 'TOGGLE_ALL';
  var CLEAR_COMPLETED = 'CLEAR_COMPLETED';

  var SET_FILTER = 'SET_FILTER';

  function addTodo(title) {
    return {
      type: ADD_TODO,
      payload: { title }
    }
  }

  function editBeginTodo(id) {
    return {
      type: EDIT_BEGIN_TODO,
      payload: { id }
    }
  }

  function editCancelTodo(id) {
    return {
      type: EDIT_CANCEL_TODO,
      payload: { id }
    }
  }

  function editSaveTodo(id, title) {
    return {
      type: EDIT_SAVE_TODO,
      payload: { id, title }
    }
  }

  function toggleTodo(id) {
    return {
      type: TOGGLE_TODO,
      payload: { id }
    }
  }

  function destroyTodo(id) {
    return {
      type: DESTROY_TODO,
      payload: { id }
    }
  }

  function toggleAll() {
    return {
      type: TOGGLE_ALL
    }
  }

  function clearCompleted() {
    return {
      type: CLEAR_COMPLETED
    }
  }

  window.actions = {
    ADD_TODO,
    EDIT_BEGIN_TODO,
    EDIT_CANCEL_TODO,
    EDIT_SAVE_TODO,
    TOGGLE_TODO,
    DESTROY_TODO,

    TOGGLE_ALL,
    CLEAR_COMPLETED,

    SET_FILTER,

    addTodo,
    editBeginTodo,
    editCancelTodo,
    editSaveTodo,
    toggleTodo,
    destroyTodo,

    toggleAll,
    clearCompleted,
  };

})(window);
