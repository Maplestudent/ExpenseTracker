import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const SelectCategory = ({ selectedValue, onValueChange, categories }) => (
  <View style={styles.container}>
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      style={styles.picker}
      itemStyle={styles.itemStyle}
    >
      {categories.map((category) => (
        <Picker.Item label={category.label} value={category.value} key={category.value} />
      ))}
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 51,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 10,
    borderWidth: 1, 
    borderColor: '#a9a9a9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 40,
    backgroundColor: '#fff',
    color: 'black', 
  },
  itemStyle: {
    height: 40,
  },
});

export default SelectCategory;