
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
      // Error retrieving data
      console.error(e);
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const addExpense = async (newExpense) => {
    const updatedExpenses = [...expenses, newExpense];
    try {
      await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      setExpenses(updatedExpenses);
    } catch (e) {
      // Error saving data
      console.error(e);
    }
  };

  return (
    <StorageContext.Provider value={{ expenses, addExpense }}>
      {children}
    </StorageContext.Provider>
  );
};
