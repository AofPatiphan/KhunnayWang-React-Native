import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from './screens/Home';
import Status from './screens/Status';
import OrderDetail from './screens/OrderDetail';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    {
                        // headerShown: false,
                    }
                }
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Status" component={Status} />
                <Stack.Screen name="Detail" component={OrderDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
