import React from 'react';
import TodoApp from './app/TodoApp';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const App: React.FC = () => {
  const store = createStore(reducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
