import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SelectDate = ({ date, onDateChange }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false); 
    if (selectedDate) {
      onDateChange(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
        <Text style={styles.buttonText}>Select Date</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 35,
    marginRight: 35,
  },
  button: {
    backgroundColor: '#5cccc4',
    padding: 10, 
    borderRadius: 5, 

  },
  buttonText: {
    color: '#ffffff', 
    textAlign: 'center', 

  },

});

export default SelectDate;