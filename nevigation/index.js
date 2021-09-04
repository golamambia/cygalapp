import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Login, Registration,GetstartedPage,OnboardingOne,OnboardingTwo,OnboardingThree} from '../screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from "../constants/theme";
import Square from "../component/icons/Square"
import Search from "../component/icons/Search"
import Thumbnails from "../component/icons/Thumbnails"
import Sliders from "../component/icons/Sliders" 
import Bell from "../component/icons/Bell"
import ShareVariant from "../component/icons/ShareVariant"
import DotsVertical from "../component/icons/DotsVertical"
import MapMakerOutline from "../component/icons/MapMakerOutline"
import CartVariant from "../component/icons/CartVariant"

const Stack = createStackNavigator();

const Index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator

            >
            <Stack.Screen options={{ headerShown: false }} name="GetstartedPage" component={GetstartedPage} />
            <Stack.Screen options={{ headerShown: false }} name="OnboardingOne" component={OnboardingOne} />
            <Stack.Screen options={{ headerShown: false }} name="OnboardingTwo" component={OnboardingTwo} />
            <Stack.Screen options={{ headerShown: false }} name="OnboardingThree" component={OnboardingThree} />
            <Stack.Screen options={{ headerShown: false }} name="Registration" component={Registration} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            
                
                
               
             
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    menuButtom: {
        left: SIZES.h6,
        width: 40
    },
    customersRightMenu: {
        flexDirection: 'row',
        right: SIZES.margin
    },
    download: {
        marginHorizontal: SIZES.base,
    },
    rightButton: {
        right: 10
    },
    menuBtn: {
        left: SIZES.h6,
        width: 40
    },
})

export default Index;

