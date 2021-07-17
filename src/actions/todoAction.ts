import * as actionTypes from './actionTypes';

export function addTodo(payload: Todo) {
  const action: TodoAction = {
    type: actionTypes.ADD_TODO,
    payload,
  };

  //return action;
  return dispatchAction(action);
}

export function deleteTodo(payload: Todo) {
  const action: TodoAction = {
    type: actionTypes.DELETE_TODO,
    payload,
  };

  //return action;
  return dispatchAction(action);
}

export function dispatchAction(action: TodoAction) {
  // We use dispatchAction here to handle data send or receive with server
  // In this case, this function is redundant. However, this is worth to
  // dispatch function like this in many cases.
  return (dispath: DispatchType) => {
    dispath(action);
  };
}
