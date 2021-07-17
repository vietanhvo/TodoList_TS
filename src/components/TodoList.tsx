import React, {useCallback} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (deleteTodo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  const dispatch: Dispatch<any> = useDispatch();
  const deleteTodoHandler = useCallback(
    (todo: Todo) => dispatch(props.onDeleteTodo(todo)),
    [dispatch, props],
  );

  return (
    <FlatList
      data={props.items}
      keyExtractor={todo => todo.id}
      renderItem={({item}) => {
        return (
          <View style={styles.todoContainer}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={deleteTodoHandler.bind(null, item)}>
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
