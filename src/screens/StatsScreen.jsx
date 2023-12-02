import DateTimePicker from '@react-native-community/datetimepicker'; // Import the DateTimePicker component
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StorageContext } from '../components/Storage'; // Import the StorageContext
import TransactionType from '../components/TransactionType';

function StatsScreen() {
    const [type, setType] = useState('Expense');
    const [selectedDate, setSelectedDate] = useState(new Date('2023-10-01')); // Use a JavaScript Date object
    const { expenses, deleteExpense } = useContext(StorageContext); // Use the deleteExpense function from the context
    const handleDelete = (id) => {
        deleteExpense(id);
    };

    // Calculate the start and end dates based on selectedDate
    const startOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const endOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    const formattedStartDate = `${startOfMonth.getFullYear()}/${(startOfMonth.getMonth() + 1).toString().padStart(2, '0')}/01`;
    const formattedEndDate = `${endOfMonth.getFullYear()}/${(endOfMonth.getMonth() + 1).toString().padStart(2, '0')}/${endOfMonth.getDate()}`;

    // Filter transactions based on the selected date
    const filteredTransactions = expenses.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return (
            transaction.type === type &&
            transactionDate >= startOfMonth &&
            transactionDate <= endOfMonth
        );
    });

    const [showDatePicker, setShowDatePicker] = useState(false);

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker); // Toggle the state
    };

    const handleDateChange = (event, date) => {
        if (date) {
            const selectedDate = date.toISOString().split('T')[0];
            setSelectedDate(new Date(selectedDate));
        }
        setShowDatePicker(false); // Close the date picker
    };

    // Use useEffect to watch for changes in filteredTransactions
    useEffect(() => {
        // Check if there are transactions in the selected month
        const hasTransactionsInMonth = filteredTransactions.length > 0;
        if (hasTransactionsInMonth) {
            // If there are transactions, close the date picker
            setShowDatePicker(false);
        }
    }, [filteredTransactions]);

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.datePickerButton} onPress={toggleDatePicker}>
                <Text style={styles.datePickerButtonText}>{formattedStartDate} - {formattedEndDate}</Text>
            </TouchableOpacity>

            {showDatePicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="spinner"
                    onChange={handleDateChange} // Use the handleDateChange function
                />
            )}

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
    datePickerButton: {
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1, // Add border width
        borderColor: 'black', // Add border color
    },
    
    datePickerButtonText: {
        fontSize: 16,
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
