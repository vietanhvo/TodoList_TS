import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {useAppDispatch} from '../app/hook';
import {actionTypes} from '../actions/actionTypes';

const NewTodo: React.FC = () => {
  const [txtInput, setTxtInput] = useState<string>('');

  const dispatch = useAppDispatch();

  return (
    <>
      <View>
        <Text>Todo Text</Text>
        <TextInput value={txtInput} onChangeText={setTxtInput} />
      </View>
      <TouchableOpacity
        onPress={() =>
          dispatch({
            type: actionTypes.ADD_TODO,
            payload: {id: Math.random().toString(), text: txtInput},
          })
        }>
        <Text>Add TODO</Text>
      </TouchableOpacity>
    </>
  );
};

export default NewTodo;
