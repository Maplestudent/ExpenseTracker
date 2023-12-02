import React, { useContext, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import AddNotes from '../components/AddNotes';
import InputAmount from '../components/InputAmount';
import SelectCategory from '../components/SelectCategory';
import SelectDate from '../components/SelectDate';
import { StorageContext } from '../components/Storage'; // Import the StorageContext
import TransactionType from '../components/TransactionType';





function AddExpenseScreen({ navigation }) {  // Added navigation prop here
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Expense');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState('');
  const categories = [
    { label: 'Food', value: 'Food' },
    { label: 'Transport', value: 'Transport' },
    { label: 'Utilities', value: 'Utilities' },
    { label: 'Entertainment', value: 'Entertainment' },
    { label: 'Healthcare', value: 'Healthcare' }
  ];

  const { addExpense } = useContext(StorageContext); // Use the context

  const handleAddExpense = () => {
    const newExpense = { amount, type, category, date: date.toISOString(), note };
    addExpense(newExpense); // Save the expense
    navigation.navigate('Stats'); // Navigate to Stats screen
  };

    return (
      <ScrollView style={styles.container}>
          <Text style={styles.header}>Add Expense</Text>
          <InputAmount value={amount} onChange={setAmount} />
          <TransactionType type={type} onSelect={setType} />
          <SelectCategory selectedValue={category} onValueChange={setCategory} categories={categories} />
          <SelectDate date={date} onDateChange={setDate} />
          <AddNotes value={note} onChange={setNote} />

          <Button
        title="Save Expense"
        onPress={handleAddExpense} // Use handleAddExpense
      />
      <Button
        title="Go to Budget"
        onPress={() => navigation.navigate('Budget')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

});

export default AddExpenseScreen;