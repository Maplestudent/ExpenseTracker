import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TransactionType from '../components/TransactionType';

function StatsScreen() {
    const [type, setType] = useState('Expense');

    return (
        <ScrollView style={styles.container}>
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