import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import TransactionType from '../components/TransactionType';

function StatsScreen({ route }) {
    const [type, setType] = useState('Expense');
    const [startDate, setStartDate] = useState('2023/10/01');
    const [endDate, setEndDate] = useState('2023/10/30');
    const newExpense = route.params?.newExpense;

    // Convert the date string back to a Date object
    const expenseDate = newExpense?.date ? new Date(newExpense.date) : null;


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

            {newExpense && (
                <View style={styles.expenseContainer}>
                    <Text style={styles.expenseText}>Amount: {newExpense.amount}</Text>
                    <Text style={styles.expenseText}>Type: {newExpense.type}</Text>
                    <Text style={styles.expenseText}>Category: {newExpense.category}</Text>
                    <Text style={styles.expenseText}>Date: {expenseDate ? expenseDate.toDateString() : 'Invalid Date'}</Text>
                    <Text style={styles.expenseText}>Note: {newExpense.note}</Text>
                </View>
            )}
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
});

export default StatsScreen;