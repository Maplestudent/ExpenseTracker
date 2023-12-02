import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BudgetScreen() {
    const navigation = useNavigation();
    const [datePeriod, setDatePeriod] = useState('October 2023');

    const handleAddExpense = () => {
        console.log('Add expense button tapped');
        navigation.navigate('AddExpense');
    };

    const handleStatsScreen = () => {
        console.log('See Stats button tapped');
        navigation.navigate('Stats');
    };

    const handlePreviousMonth = () => {
        const [month, year] = datePeriod.split(' ');
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
    
        let currentMonthIndex = months.indexOf(month);
        let currentYear = parseInt(year);
    
        if (currentMonthIndex === 0) {
            currentMonthIndex = 11; // December
            currentYear--;
        } else {
            currentMonthIndex--;
        }
    
        const previousMonth = `${months[currentMonthIndex]} ${currentYear}`;
        setDatePeriod(previousMonth);
    };
    
    const handleNextMonth = () => {
        const [month, year] = datePeriod.split(' ');
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
    
        let currentMonthIndex = months.indexOf(month);
        let currentYear = parseInt(year);
    
        if (currentMonthIndex === 11) {
            currentMonthIndex = 0; // January
            currentYear++;
        } else {
            currentMonthIndex++;
        }
    
        const nextMonth = `${months[currentMonthIndex]} ${currentYear}`;
        setDatePeriod(nextMonth);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.datePeriodContainer}>
                <TouchableOpacity onPress={handlePreviousMonth}>
                    <Text style={styles.arrow}>{'< '}</Text>
                </TouchableOpacity>
                <Text style={styles.datePeriodText}>{datePeriod}</Text>
                <TouchableOpacity onPress={handleNextMonth}>
                    <Text style={styles.arrow}>{' >'}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
                <Text style={styles.text}>Add New Expense</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleStatsScreen}>
                <Text style={styles.text}>See Stats</Text>
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