import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TransactionType from '../components/TransactionType';
import DoughnutChart from '../components/DoughnutChart';

function StatsScreen() {
    const [type, setType] = useState('Expense');

    const data = [
        {
            key: 1,
            value: 50,
            svg: { fill: 'orange' },
        },
        {
            key: 2,
            value: 30,
            svg: { fill: 'blue' },
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <DoughnutChart data={data} /> {/* Render the DoughnutChart component */}
            <TransactionType type={type} onSelect={setType} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
  });

export default StatsScreen;