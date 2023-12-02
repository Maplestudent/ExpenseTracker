import React, { useContext, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import AddNotes from '../components/AddNotes';
import InputAmount from '../components/InputAmount';
import SelectCategory from '../components/SelectCategory';
import SelectDate from '../components/SelectDate';
import { StorageContext } from '../components/Storage';
import TransactionType from '../components/TransactionType';

const expenseCategories = [
  { label: 'Food', value: 'Food' },
  { label: 'Transport', value: 'Transport' },
  { label: 'Utilities', value: 'Utilities' },
  { label: 'Entertainment', value: 'Entertainment' },
  { label: 'Healthcare', value: 'Healthcare' },
];

const incomeCategories = [
  { label: 'Salary', value: 'Salary' },
  { label: 'Gifts', value: 'Gifts' },
  { label: 'Investments', value: 'Investments' },
  { label: 'Other', value: 'Other' },
];

function AddExpenseScreen({ navigation }) {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Expense');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState('');
  const [categories, setCategories] = useState(expenseCategories); // State for categories based on type

  const { addExpense } = useContext(StorageContext);

  // Update categories when transaction type changes
  const handleTypeSelect = (selectedType) => {
    setType(selectedType);
    const newCategories = selectedType === 'Expense' ? expenseCategories : incomeCategories;
    setCategories(newCategories);
    setCategory(newCategories[0].value); // Reset category when type changes
  };

  const handleAddExpense = () => {
    const newExpense = { amount, type, category, date: date.toISOString(), note };
    addExpense(newExpense);
    navigation.navigate('Stats');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Expense</Text>
      <InputAmount value={amount} onChange={setAmount} />
      <TransactionType type={type} onSelect={handleTypeSelect} />
      <SelectCategory selectedValue={category} onValueChange={setCategory} categories={categories} />
      <SelectDate date={date} onDateChange={setDate} />
      <AddNotes value={note} onChange={setNote} />

      <Button title="Save Expense" onPress={handleAddExpense} />
      <Button title="View Stats" onPress={() => navigation.navigate('Stats')} />
      <Button title="Go to Budget" onPress={() => navigation.navigate('Budget')} />
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
  // Add styles for your components as needed
});

export default AddExpenseScreen;
