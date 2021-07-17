import React, {useState, useCallback} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';

import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';

interface newTodoProps {
  onAddTodo: (todo: Todo) => void;
}

const NewTodo: React.FC<newTodoProps> = props => {
  const [txtInput, setTxtInput] = useState<string>('');

  const dispatch: Dispatch<any> = useDispatch();
  const addTodoHandler = useCallback(
    (todo: Todo) => dispatch(props.onAddTodo(todo)),
    [dispatch, props],
  );

  return (
    <>
      <View>
        <Text>Todo Text</Text>
        <TextInput value={txtInput} onChangeText={setTxtInput} />
      </View>
      <TouchableOpacity
        onPress={() =>
          addTodoHandler({id: Math.random().toString(), text: txtInput})
        }>
        <Text>Add TODO</Text>
      </TouchableOpacity>
    </>
  );
};

export default NewTodo;
