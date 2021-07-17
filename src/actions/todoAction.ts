import * as actionTypes from './actionTypes';

export function addTodo(payload: Todo) {
  const action: TodoAction = {
    type: actionTypes.ADD_TODO,
    payload,
  };

  return action;
  //dispathAction(action);
}

export function deleteTodo(payload: Todo) {
  const action: TodoAction = {
    type: actionTypes.DELETE_TODO,
    payload,
  };

  return action;
  //dispathAction(action);
}

export function dispathAction(action: TodoAction) {
  return (dispath: DispathType) => {
    dispath(action);
  };
}
