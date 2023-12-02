import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useCallback, useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StorageContext } from '../components/Storage';
import TransactionType from '../components/TransactionType';

function StatsScreen() {
    const [type, setType] = useState('Expense');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { expenses, deleteExpense } = useContext(StorageContext);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDelete = useCallback((id) => {
        deleteExpense(id);
    }, [deleteExpense]);

    const toggleDatePicker = useCallback(() => {
        setShowDatePicker(currentShow => !currentShow);
    }, []);

    const handleDateChange = useCallback((event, date) => {
        setShowDatePicker(false);
        if (date) {
            setSelectedDate(date);
        }
    }, []);

    const startOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const endOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    const filteredTransactions = expenses.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return (
            transaction.type === type &&
            transactionDate >= startOfMonth &&
            transactionDate <= endOfMonth
        );
    });

    const formatDate = (date) => {
        return `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.datePickerButton} onPress={toggleDatePicker}>
                <Text style={styles.datePickerButtonText}>{formatDate(startOfMonth)} - {formatDate(endOfMonth)}</Text>
            </TouchableOpacity>

            {showDatePicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="spinner"
                    onChange={handleDateChange}
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
