import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

export const StorageContext = createContext();

export const StorageProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const loadExpenses = async () => {
    try {
      const savedExpenses = await AsyncStorage.getItem('expenses');
      if (savedExpenses !== null) {
        setExpenses(JSON.parse(savedExpenses));
      }
    } catch (e) {
      console.error(e); // Error retrieving data
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const addExpense = async (newExpense) => {
    const updatedExpenses = [...expenses, { ...newExpense, id: Date.now() }]; // Ensure each new expense has a unique ID
    try {
      await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      setExpenses(updatedExpenses);
    } catch (e) {
      console.error(e); // Error saving data
    }
  };

  const deleteExpense = async (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    try {
      await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      setExpenses(updatedExpenses);
    } catch (e) {
      console.error(e); // Error deleting data
    }
  };

  return (
    <StorageContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </StorageContext.Provider>
  );
};
