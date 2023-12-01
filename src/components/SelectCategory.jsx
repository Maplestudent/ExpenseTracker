import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';

const SelectCategory = ({ selectedValue, onValueChange, categories }) => (
  <View style={styles.container}>
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}>
      {categories.map((category) => (
        <Picker.Item label={category.label} value={category.value} key={category.value} />
      ))}
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default SelectCategory;
