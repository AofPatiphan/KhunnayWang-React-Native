import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../src/screens/Home';
import Status from '../src/screens/Status';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
        case 'Home':
            iconName = 'home';
            break;
        case 'Status':
            iconName = 'profile';
            break;
        default:
            break;
    }

    return <Icon name={iconName} color={color} size={24} />;
};

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: true,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                    elevation: 0,
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Status" component={Status} />
        </Tab.Navigator>
    );
};

export default Tabs;
