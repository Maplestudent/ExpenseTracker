import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TransactionType = ({ type, onSelect }) => (
  <View style={styles.container}>
    <TouchableOpacity 
      style={[styles.button, type === 'Expense' && styles.selected]} 
      onPress={() => onSelect('Expense')}
    >
      <Text>Expense</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={[styles.button, type === 'Income' && styles.selected]} 
      onPress={() => onSelect('Income')}
    >
      <Text>Income</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20, 
    marginHorizontal: 5, 
    borderRadius: 20,
    borderWidth: 1, 
    borderColor: 'transparent', 
    backgroundColor: '#ffffff', 
  },
  selected: {
    backgroundColor: '#5cccc4', 
    borderColor: '#bfefff',
    borderBottomWidth: 3,
    borderBottomColor: '#007bff', 
  },
  text: {
    color: '#000000', 
    fontWeight: 'bold', 
  },
});

export default TransactionType;