import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';

const TodoApp: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>To Do List - TypeScript</Text>
      <NewTodo />
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default TodoApp;
