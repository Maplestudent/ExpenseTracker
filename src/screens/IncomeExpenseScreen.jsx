// IncomeExpenseScreen.jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function IncomeExpenseScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Income & Expenses</Text>
      {/* Further implementation goes here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // You can change the background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Add some space below the title
    // You can add more styling here
  },
  // Additional styles can be added here if needed
});

export default IncomeExpenseScreen;
