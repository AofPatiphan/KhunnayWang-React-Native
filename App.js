import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home';
import Status from './src/screens/Status';
import OrderDetail from './src/screens/OrderDetail';
import { useFonts, Cairo_400Regular } from '@expo-google-fonts/cairo';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

const App = () => {
    let [fontsLoaded] = useFonts({
        Cairo_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Status" component={Status} />
                <Stack.Screen name="Order Detail" component={OrderDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
