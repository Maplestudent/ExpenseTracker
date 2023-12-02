import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputAmount = ({ value, onChange }) => (
  <View style={styles.inputContainer}>
    {value === '' && <Text style={styles.dollarSign}>$</Text>}
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      keyboardType="numeric"
      placeholder="0.00"
      placeholderTextColor="#C7C7CD" 
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1,
    borderColor: '#a9a9a9',
    borderRadius: 8,
    height: 120, 
    padding: 10,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
  },
  input: {
    flex: 1, 
    paddingVertical: 0, 
    fontSize: 24,
    color: '#000', 
  },
  dollarSign: {
    fontSize: 24,
    color: '#C7C7CD', 
    marginRight: 8,
  },
});

export default InputAmount;