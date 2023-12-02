import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StorageContext } from '../components/Storage';

function IncomeExpenseScreen() {
  const { expenses } = useContext(StorageContext);

  // Function to group and sum amounts by category
  const sumByCategory = (items, type) => {
    return items
      .filter(item => item.type === type)
      .reduce((acc, item) => {
        const amount = parseFloat(item.amount);
        acc[item.category] = (acc[item.category] || 0) + amount;
        return acc;
      }, {});
  };

  const incomeByCategory = sumByCategory(expenses, 'Income');
  const expensesByCategory = sumByCategory(expenses, 'Expense');
  const totalIncome = Object.values(incomeByCategory).reduce((acc, curr) => acc + curr, 0);
  const totalExpenses = Object.values(expensesByCategory).reduce((acc, curr) => acc + curr, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Income & Expenses</Text>
      
      <View style={styles.table}>
        {/* Display total and breakdown of income */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Total Income:</Text>
          <Text style={styles.tableCell}>{totalIncome.toFixed(2)}</Text>
        </View>
        {Object.entries(incomeByCategory).map(([category, amount]) => (
          <View style={styles.tableRow} key={'income-' + category}>
            <Text style={styles.tableCell}>{category}:</Text>
            <Text style={styles.tableCell}>{amount.toFixed(2)}</Text>
          </View>
        ))}

        {/* Display total and breakdown of expenses */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Total Expenses:</Text>
          <Text style={styles.tableCell}>{totalExpenses.toFixed(2)}</Text>
        </View>
        {Object.entries(expensesByCategory).map(([category, amount]) => (
          <View style={styles.tableRow} key={'expense-' + category}>
            <Text style={styles.tableCell}>{category}:</Text>
            <Text style={styles.tableCell}>{amount.toFixed(2)}</Text>
          </View>
        ))}

        {/* Display balance */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Balance:</Text>
          <Text style={[styles.tableCell, {color: balance >= 0 ? 'green' : 'red'}]}>
            {balance.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  table: {
    // Style your table as needed
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    fontSize: 18,
    // Additional styling for table cells
  },
  // Add more styles if needed
});

export default IncomeExpenseScreen;
