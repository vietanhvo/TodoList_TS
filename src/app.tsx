import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

import {Provider, useSelector, shallowEqual} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import {addTodo, deleteTodo} from './actions/todoAction';

const App: React.FC = () => {
  const store = createStore(reducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

const MainApp: React.FC = () => {
  const todos = useSelector(
    (state: any) => state.TodoReducer.todos,
    shallowEqual,
  );

  return (
    <View>
      <Text style={styles.title}>To Do List - TypeScript</Text>
      <NewTodo onAddTodo={addTodo} />
      <TodoList items={todos} onDeleteTodo={deleteTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
