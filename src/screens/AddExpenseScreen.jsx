import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import InputAmount from '../components/InputAmount';
import TransactionType from '../components/TransactionType';
import SelectCategory from '../components/SelectCategory';
import SelectDate from '../components/SelectDate';
import AddNotes from '../components/AddNotes';


function AddExpenseScreen() {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Expense'); 
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date());
    const [note, setNote] = useState('');

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Add Expense</Text>
            <InputAmount value={amount} onChange={setAmount} />
            <TransactionType type={type} onSelect={setType} />
            <SelectCategory selectedValue={category} onValueChange={setCategory} categories={[]} />
            <SelectDate date={date} onDateChange={setDate} />
            <AddNotes value={note} onChange={setNote} />
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