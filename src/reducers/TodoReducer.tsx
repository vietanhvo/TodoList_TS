import * as actionType from '../actions/actionTypes';

const initialState: TodoState = {
  todos: [],
};

const reducer = (
  state: TodoState = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case actionType.ADD_TODO:
      const newTodo: Todo = {
        id: Math.random().toString(),
        text: action.payload.text,
      };

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
