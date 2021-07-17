import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {useAppDispatch} from '../app/hook';
import {addTodo} from '../actions/todoAction';

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
          dispatch(addTodo({id: Math.random().toString(), text: txtInput}))
        }>
        <Text>Add TODO</Text>
      </TouchableOpacity>
    </>
  );
};

export default NewTodo;
