import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import AddNotes from '../components/AddNotes';
import InputAmount from '../components/InputAmount';
import SelectCategory from '../components/SelectCategory';
import SelectDate from '../components/SelectDate';
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
    

    return (
      <ScrollView style={styles.container}>
          <Text style={styles.header}>Add Expense</Text>
          <InputAmount value={amount} onChange={setAmount} />
          <TransactionType type={type} onSelect={setType} />
          <SelectCategory selectedValue={category} onValueChange={setCategory} categories={categories} />
          <SelectDate date={date} onDateChange={setDate} />
          <AddNotes value={note} onChange={setNote} />

          <Button
                title="Go to Stats Screen"
                onPress={() => navigation.navigate('Stats', {
                  newExpense: { amount, type, category, date: date.toISOString(), note }
                })}
                
                /><Button
            title="Go to Budget"
            onPress={() => navigation.navigate('Budget')}  // Use the name of the screen as defined in the Stack.Navigator
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