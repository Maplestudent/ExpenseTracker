import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

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
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    backgroundColor: '#ffffff',
  },
});

export default AddNotes;