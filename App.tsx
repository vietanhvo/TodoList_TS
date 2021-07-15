import React from 'react';
import {StyleSheet, Text} from 'react-native';

import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos = [{id: 't1', text: 'finish the course'}];

  return (
    <>
      <Text style={styles.title}>To Do List - TypeScript</Text>
      <TodoList items={todos}/>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default App;
