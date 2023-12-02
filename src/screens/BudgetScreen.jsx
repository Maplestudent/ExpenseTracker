import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function BudgetScreen() {
    const navigation = useNavigation();
    const currentDate = new Date(); // Get current date
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    const [datePeriod, setDatePeriod] = useState(`${currentMonth} ${currentYear}`); // Set to current month and year

    const handleAddExpense = () => {
        console.log('Add expense button tapped');
        navigation.navigate('AddExpense');
    };

    const handleStatsScreen = () => {
        console.log('See Stats button tapped');
        navigation.navigate('Stats');
    };

    const handleIncomeExpenseScreen = () => {
        navigation.navigate('IncomeExpenseScreen'); // Navigate to IncomeExpenseScreen
    };

    

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
                <Text style={styles.text}>Add New Expense</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleStatsScreen}>
                <Text style={styles.text}>See Stats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleIncomeExpenseScreen}>
                <Text style={styles.text}>View Income & Expenses</Text>
            </TouchableOpacity>

            
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 10,
    },
    text: {
        color: '#007bff',
        textAlign: 'center',
        fontSize: 16,
    },
    datePeriodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    datePeriodText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    arrow: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default BudgetScreen;