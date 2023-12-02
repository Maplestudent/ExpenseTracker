import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

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
        <View style={styles.container}>
          <View style={styles.userContainer}>
            <Text style={styles.title}>Welcome to JK Expense Tracker!</Text>
          </View>
    
          <View style={styles.datePeriodContainer}>
            <TouchableOpacity onPress={handlePreviousMonth}>
              <Text style={styles.arrow}>{'< '}</Text>
            </TouchableOpacity>
            <Text style={styles.datePeriodText}>{datePeriod}</Text>
            <TouchableOpacity onPress={handleNextMonth}>
              <Text style={styles.arrow}>{' >'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button1} onPress={handleIncomeExpenseScreen}>
            <Text style={styles.text}>View Income & Expenses</Text>
          </TouchableOpacity>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.button2, styles.buttonWithMargin]} onPress={handleAddExpense}>
              <Text style={styles.text}>Add New Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3} onPress={handleStatsScreen}>
              <Text style={styles.text}>See Stats</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    userContainer:{
        paddingTop: 20,
        paddingLeft: 10,
        height: 380,
        backgroundColor: '#5cccc4',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    title:{
        marginTop: 100,
        color: '#ffffff',
        fontSize: 45, 
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center', 
    },
    buttonWithMargin: {
        marginRight: 10, 
    },
    button1: {
        height: 100,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 10,

        
    },
    button2: {
        height: 110,
        width: 210,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 10,
        
    },
    button3: {
        height: 110,
        width: 120,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#ffffff',
        borderRadius: 10,
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
        color: '#5cccc4',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
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