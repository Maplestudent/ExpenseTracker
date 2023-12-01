import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const AddNotes = ({ value, onChange }) => (
  <TextInput
    style={styles.input}
    multiline
    numberOfLines={4}
    value={value}
    onChangeText={onChange}
    placeholder="Notes"
  />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default AddNotes;
