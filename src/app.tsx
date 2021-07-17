import React from 'react';
import TodoApp from './app/TodoApp';

import {Provider} from 'react-redux';
import store from './app/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
