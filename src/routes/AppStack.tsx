import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../pages/Login';
import AppLoading from '../pages/AppLoading';
import Home from '../pages/Home';
import PatientDetails from '../pages/PatientDetails';

const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='Login' component={Login} />
                <Screen name="AppLoading" component={AppLoading} />
                <Screen name="Home" component={Home} />
                <Screen name="PatientDetails" component={PatientDetails} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;