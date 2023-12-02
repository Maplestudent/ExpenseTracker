import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
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
  { label: 'Others', value: 'Others' },
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

  const resetForm = () => {
    setAmount('');
    setType('Expense');
    setCategory('Food');
    setDate(new Date());
    setNote('');
    setCategories(expenseCategories);
  };


  const handleAddExpense = () => {
    const newExpense = { amount, type, category, date: date.toISOString(), note };
    addExpense(newExpense);
    resetForm(); // Reset form fields after adding expense
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Expense</Text>
      <InputAmount value={amount} onChange={setAmount} />
      <TransactionType type={type} onSelect={handleTypeSelect} />
      <SelectCategory selectedValue={category} onValueChange={setCategory} categories={categories} />
      <SelectDate date={date} onDateChange={setDate} />
      <AddNotes value={note} onChange={setNote} />

      <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stats')}>
        <Text style={styles.buttonText}>View Stats</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Budget')}>
        <Text style={styles.buttonText}>Go to Budget</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4e4',
  },
  header: {
    height: 50,
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
    backgroundColor: '#5cccc4',
  },
  button: {
    backgroundColor: '#5cccc4',
    padding: 10, 
    borderRadius: 5, 
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
  },
  buttonText: {
    color: '#ffffff', 
    textAlign: 'center', 

  },
  // Add styles for your components as needed
});

export default AddExpenseScreen;
