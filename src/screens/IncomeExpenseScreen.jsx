import { Picker } from '@react-native-picker/picker'; // Correctly import Picker
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StorageContext } from '../components/Storage';

// ... [rest of your component code]


function IncomeExpenseScreen() {
  const { expenses } = useContext(StorageContext);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  // Function to filter items by selected month and year
  const filterByDate = (items, year, month) => {
    return items.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate.getFullYear() === year && itemDate.getMonth() + 1 === month;
    });
  };

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

  const filteredExpenses = filterByDate(expenses, selectedYear, selectedMonth);
  const incomeByCategory = sumByCategory(filteredExpenses, 'Income');
  const expensesByCategory = sumByCategory(filteredExpenses, 'Expense');
  const totalIncome = Object.values(incomeByCategory).reduce((acc, curr) => acc + curr, 0);
  const totalExpenses = Object.values(expensesByCategory).reduce((acc, curr) => acc + curr, 0);
  const balance = totalIncome - totalExpenses;

  // Render month and year picker items
  const monthItems = Array.from({ length: 12 }, (_, i) => (
    <Picker.Item key={i} label={`${i + 1}`} value={i + 1} />
  ));
  const yearItems = Array.from({ length: 10 }, (_, i) => (
    <Picker.Item key={i} label={`${currentYear - i}`} value={currentYear - i} />
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Income & Expenses</Text>

      {/* Year and Month Pickers */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedMonth}
          onValueChange={(itemValue) => setSelectedMonth(itemValue)}
          style={styles.picker}>
          {monthItems}
        </Picker>
        <Picker
          selectedValue={selectedYear}
          onValueChange={(itemValue) => setSelectedYear(itemValue)}
          style={styles.picker}>
          {yearItems}
        </Picker>
      </View>

      {/* Income and Expenses Table */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Total Income:</Text>
          <Text style={styles.tableCell}>{totalIncome.toFixed(2)}</Text>
        </View>
        {/* Display total and breakdown of income */}
        {Object.entries(incomeByCategory).map(([category, amount]) => (
          <View style={styles.tableRow} key={'income-' + category}>
            <Text style={styles.tableCell}>{category}:</Text>
            <Text style={styles.tableCell}>{amount.toFixed(2)}</Text>
          </View>
        ))}
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Total Expenses:</Text>
          <Text style={styles.tableCell}>{totalExpenses.toFixed(2)}</Text>
        </View>
        {/* Display total and breakdown of expenses */}
        {Object.entries(expensesByCategory).map(([category, amount]) => (
          <View style={styles.tableRow} key={'expense-' + category}>
            <Text style={styles.tableCell}>{category}:</Text>
            <Text style={styles.tableCell}>{amount.toFixed(2)}</Text>
          </View>
        ))}
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Balance:</Text>
          <Text style={[styles.tableCell, { color: balance >= 0 ? 'green' : 'red' }]}>
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
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  picker: {
    width: 120,
    height: 44,
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
  },
  // Add more styles as needed
});

export default IncomeExpenseScreen;
