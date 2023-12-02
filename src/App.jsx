import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StorageProvider } from './components/Storage'; // Ensure this path is correct
import AddExpenseScreen from './screens/AddExpenseScreen';
import BudgetScreen from './screens/BudgetScreen';
import StatsScreen from './screens/StatsScreen'; // Ensure this path is correct

const Stack = createStackNavigator();

function App() {
  return (
    <StorageProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Budget">
          <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
          <Stack.Screen name="Budget" component={BudgetScreen} />
          <Stack.Screen name="Stats" component={StatsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StorageProvider>
  );
}

export default App;
