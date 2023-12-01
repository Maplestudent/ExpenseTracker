import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TransactionType from '../components/TransactionType';

function StatsScreen() {
    const [type, setType] = useState('Expense');
    const startDate = '2023/10/01';
    const endDate = '2023/10/30';

    return (
        <ScrollView style={styles.container}>
            <View style={styles.datePeriodContainer}>
                <Text style={styles.datePeriodText}>Date Period: {startDate} - {endDate}</Text>
            </View>
            <TransactionType type={type} onSelect={setType} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    datePeriodContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    datePeriodText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default StatsScreen;