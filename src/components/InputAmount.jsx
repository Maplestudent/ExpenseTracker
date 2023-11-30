import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputAmount = ({ value, onChange }) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChange}
    keyboardType="numeric"
    placeholder="Amount"
  />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default InputAmount;
