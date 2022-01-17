import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartProvider from '../context/CartContext';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({
              headerTitle: 'List of cars',
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Checkout')}
                  title='Checkout'
                  color='#000'
                />
              )
            })}
          />
          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

export default App;
