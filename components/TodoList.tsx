import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

interface TodoListProps {
  items: {id: string; text: string}[];
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <FlatList
      data={props.items}
      keyExtractor={todo => todo.id}
      renderItem={todo => {
        return <Text>{todo.item.text}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default TodoList;
