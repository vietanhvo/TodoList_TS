import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

interface TodoListProps {
  items: {id: string; text: string}[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <FlatList
      data={props.items}
      keyExtractor={todo => todo.id}
      renderItem={({item}) => {
        return (
          <View style={styles.todoContainer}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={props.onDeleteTodo.bind(null, item.id)}>
              <Text>DELETE</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TodoList;
