interface Todo {
  id: string;
  text: string;
}

interface TodoState {
  todos: Todo[];
}

interface TodoAction {
  type: string;
  payload: Todo;
}

interface DispatchType {
  (args: TodoAction): TodoAction;
}
