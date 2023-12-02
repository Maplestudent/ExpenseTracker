import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { StorageContext } from '../components/Storage'; // Import the StorageContext
import TransactionType from '../components/TransactionType';

function StatsScreen() {
    const [type, setType] = useState('Expense');
    const [startDate, setStartDate] = useState('2023/10/01');
    const [endDate, setEndDate] = useState('2023/10/30');
    const { expenses, deleteExpense } = useContext(StorageContext); // Use the deleteExpense function from the context
    const handleDelete = (id) => {
        deleteExpense(id);
    };


    // Convert the date string back to a Date object
    const filteredTransactions = expenses.filter(transaction => transaction.type === type);



    const handlePreviousMonth = () => {
        const [year, month, day] = startDate.split('/');
        const currentMonth = parseInt(month);
        let newYear = parseInt(year);
        let newMonth = currentMonth - 1;

        if (newMonth === 0) {
            newMonth = 12;
            newYear--;
        }

        const previousStartDate = `${newYear}/${newMonth.toString().padStart(2, '0')}/01`;
        setStartDate(previousStartDate);

        const daysInPreviousMonth = new Date(newYear, newMonth, 0).getDate();
        const previousEndDate = `${newYear}/${newMonth.toString().padStart(2, '0')}/${daysInPreviousMonth}`;
        setEndDate(previousEndDate);
    };

    const handleNextMonth = () => {
        const [year, month, day] = startDate.split('/');
        const currentMonth = parseInt(month);
        let newYear = parseInt(year);
        let newMonth = currentMonth + 1;

        if (newMonth === 13) {
            newMonth = 1; // Set to January
            newYear++;
        }

        const nextStartDate = `${newYear}/${newMonth.toString().padStart(2, '0')}/01`;
        setStartDate(nextStartDate);

        const daysInNextMonth = new Date(newYear, newMonth, 0).getDate();
        const nextEndDate = `${newYear}/${newMonth.toString().padStart(2, '0')}/${daysInNextMonth}`;
        setEndDate(nextEndDate);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.datePeriodContainer}>
                <TouchableHighlight onPress={handlePreviousMonth}>
                    <Text style={styles.arrow}>{'<'}</Text>
                </TouchableHighlight>
                <Text style={styles.datePeriodText}>{startDate} - {endDate}</Text>
                <TouchableHighlight onPress={handleNextMonth}>
                    <Text style={styles.arrow}>{'>'}</Text>
                </TouchableHighlight>
            </View>
            <TransactionType type={type} onSelect={setType} />
      
            {filteredTransactions.map((transaction) => (
                <View key={transaction.id} style={styles.expenseContainer}>
                <Text style={styles.expenseText}>Amount: {transaction.amount}</Text>
                <Text style={styles.expenseText}>Type: {transaction.type}</Text>
                <Text style={styles.expenseText}>Category: {transaction.category}</Text>
                <Text style={styles.expenseText}>Date: {new Date(transaction.date).toDateString()}</Text>
                <Text style={styles.expenseText}>Note: {transaction.note}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(transaction.id)}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
      );      
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    datePeriodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    datePeriodText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    arrow: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    expenseContainer: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    expenseText: {
        fontSize: 14,
        marginBottom: 5,
    },
    deleteButton: {
        backgroundColor: 'red', // Example style, change as needed
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
      },
      deleteButtonText: {
        color: 'white',
        textAlign: 'center',
      },
});

export default StatsScreen;