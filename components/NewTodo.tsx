import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

interface newTodoProps {
  onAddTodo: (todoTxt: string) => void;
}

const NewTodo: React.FC<newTodoProps> = (props) => {
  const [txtInput, setTxtInput] = useState<string>('');

  return (
    <>
      <View>
        <Text>Todo Text</Text>
        <TextInput value={txtInput} onChangeText={setTxtInput} />
      </View>
      <TouchableOpacity onPress={() => props.onAddTodo(txtInput)}>
        <Text>Add TODO</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export default NewTodo;
