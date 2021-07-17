import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useAppSelector, useAppDispatch} from '../app/hook';
import {actionTypes} from '../actions/actionTypes';

const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.TodoReducer.todos);
  const dispatch = useAppDispatch();

  return (
    <FlatList
      data={todos}
      keyExtractor={todo => todo.id}
      renderItem={({item}) => {
        return (
          <View style={styles.todoContainer}>
            <Text>{item.text}</Text>
            <TouchableOpacity
              onPress={() =>
                dispatch({type: actionTypes.DELETE_TODO, payload: item})
              }>
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
