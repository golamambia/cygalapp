import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Login, Registration,GetstartedPage,OnboardingOne,OnboardingTwo,OnboardingThree,
    Forgotpassword,Otpverified,Profile,Contactus,Enquery,Aboutus,Categories,EcommorceCollection,
    FashionCollection,ConfirmNumber} from '../screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from "../constants/theme";
import Square from "../component/icons/Square";
import Search from "../component/icons/Search";
import Thumbnails from "../component/icons/Thumbnails";
import Sliders from "../component/icons/Sliders";
import Bell from "../component/icons/Bell";
import ShareVariant from "../component/icons/ShareVariant";
import DotsVertical from "../component/icons/DotsVertical";
import MapMakerOutline from "../component/icons/MapMakerOutline";
import CartVariant from "../component/icons/CartVariant";


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
            <Stack.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Register',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} name="Registration" component={Registration} />
            <Stack.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Login',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} name="Login" component={Login} />
         <Stack.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Forgot Password',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} name="Forgotpassword" component={Forgotpassword} />
           <Stack.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Confirm Number',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} name="ConfirmNumber" component={ConfirmNumber} />
            <Stack.Screen options={{ headerShown: false }} name="Otpverified" component={Otpverified} />    
            <Stack.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Profile',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                    })} name="Profile" component={Profile} />
                    <Stack.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Enquery',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                    })} name="Enquery" component={Enquery} /> 
                    <Stack.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Contact Us',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                    })} name="Contactus" component={Contactus} /> 
                    <Stack.Screen options={({ navigation, route }) => ({
                        headerTitle: 'About Us',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                    })} name="Aboutus" component={Aboutus} />   
               <Stack.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Categories',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                    })} name="Categories" component={Categories} /> 
                    <Stack.Screen options={({ navigation, route }) => ({
                        headerTitle: 'E-commorce Collection',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                    })} name="EcommorceCollection" component={EcommorceCollection} /> 
                      <Stack.Screen options={({ navigation, route }) => ({
                        headerTitle: 'Fashion Collection',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                    })} name="FashionCollection" component={FashionCollection} /> 
             
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

