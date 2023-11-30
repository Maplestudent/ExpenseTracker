import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

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
  },
  button: {
    padding: 10,
  },
  selected: {
    borderBottomWidth: 2,
  },
});

export default TransactionType;
