import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';

import {Todo} from './todo.models';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodo => [
      ...prevTodo,
      {id: Math.random().toString(), text: text},
    ]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos(prevTodo => prevTodo.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <Text style={styles.title}>To Do List - TypeScript</Text>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
