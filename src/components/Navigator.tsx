import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { First } from "./FirstScreen";
import { Second } from "./SecondScreen";
import {Third} from "./ThirdScreen/ThirdScreen"

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="first"
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen name="first" component={First} />
            <StackNavigator.Screen name="second" component={Second} />
            <StackNavigator.Screen name="third" component={Third} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
