import * as actionType from '../actions/actionTypes';
import {AnyAction} from 'redux';

const initialState: TodoState = {
  todos: [],
};

const reducer = (
  state: TodoState = initialState,
  action: AnyAction,
): TodoState => {
  switch (action.type) {
    case actionType.ADD_TODO:
      const newTodo: Todo = {
        id: action.payload.id,
        text: action.payload.text,
      };

      console.log({...state, todos: state.todos.concat(newTodo)});
      return {...state, todos: state.todos.concat(newTodo)};
    case actionType.DELETE_TODO:
      const removedTodos: Todo[] = state.todos.filter(
        todo => todo.id !== action.payload.id,
      );

      return {...state, todos: removedTodos};
    default:
      return state;
  }
};

export default reducer;
