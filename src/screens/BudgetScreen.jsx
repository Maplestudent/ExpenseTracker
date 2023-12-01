import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BudgetScreen() {
    const navigation = useNavigation();

    const handleAddExpense = () => {
        console.log('Add expense button tapped');
        navigation.navigate('AddExpense');
    };

    const handleStatsScreen = () => {
        console.log('See Stats button tapped');
        navigation.navigate('Stats'); // Replace 'StatsScreen' with your screen name
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    }
});

export default BudgetScreen;
