import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StorageProvider } from './components/Storage';
import AddExpenseScreen from './screens/AddExpenseScreen';
import BudgetScreen from './screens/BudgetScreen';
import IncomeExpenseScreen from './screens/IncomeExpenseScreen'; // Import the screen
import StatsScreen from './screens/StatsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <StorageProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Budget">
          <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
          <Stack.Screen name="Budget" component={BudgetScreen} />
          <Stack.Screen name="Stats" component={StatsScreen} />
          <Stack.Screen name="IncomeExpenseScreen" component={IncomeExpenseScreen} options={{ title: 'Income & Expense' }}  // Set the title here
/>
        </Stack.Navigator>
      </NavigationContainer>
    </StorageProvider>
  );
}

export default App;
