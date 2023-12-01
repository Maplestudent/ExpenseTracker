import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg';

const DoughnutChart = ({ data }) => {
    return (
        <View style={styles.chartContainer}>
            <PieChart
                style={styles.chart}
                data={data}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    chart: {
        height: 200,
        width: 200,
    },
});

export default DoughnutChart;
