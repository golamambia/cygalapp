// import 'react-native-gesture-handler';
import React, {useState, useEffect,} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer'; 
import {Login, Registration,GetstartedPage,OnboardingOne,OnboardingTwo,OnboardingThree,
    Forgotpassword,Otpverified,Profile,Contactus,Enquery,Aboutus,Categories,EcommorceCollection,
    FashionCollection,ConfirmNumber,Checkout,Home,PaymentSuccess,Payment,FashionDetails} from '../screens';
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
// import Animated from 'react-native-reanimated';
// import { useSafeAreaFrame } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {DrawerActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const fourthScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        >
        <Stack.Screen options={{ headerShown: false,swipeEnabled: false,}} name="GetstartedPage" component={GetstartedPage} />
      </Stack.Navigator>
    );
  };
  const fourthScreenStack2 = ({navigation}) => {
    return (
      <Stack.Navigator
        >
        <Stack.Screen options={{ headerShown: false,swipeEnabled: false,}} name="OnboardingOne" component={OnboardingOne} />
      </Stack.Navigator>
    );
  };
  const fourthScreenStack3 = ({navigation}) => {
    return (
      <Stack.Navigator
        >
        <Stack.Screen options={{ headerShown: false,swipeEnabled: false,}} name="OnboardingTwo" component={OnboardingTwo} />
      </Stack.Navigator>
    );
  };
  const fourthScreenStack4 = ({navigation}) => {
    return (
      <Stack.Navigator
        >
        <Stack.Screen options={{ headerShown: false,swipeEnabled: false,}} name="OnboardingThree" component={OnboardingThree} />
      </Stack.Navigator>
    );
  };
const Index = () => {
  const[get_strtpage, setget_strtpage]=useState('');
  useEffect(async () => {
    //setLoading(true);
    let get_strtpage = await AsyncStorage.getItem('get_strtpage');
    setget_strtpage(get_strtpage);
  //console.log(get_strtpage);

}, []);
    return (
        
        <NavigationContainer>
           
            <Drawer.Navigator  screenOptions={{
              
                drawerActiveTintColor:COLORS.white,
                drawerActiveBackgroundColor:'#3ebfc4',
                drawerInactiveTintColor:'#fff',
                borderRightRadious: 90,
                drawerLabelStyle: { fontSize:15,fontWeight:SIZES.regular,},
                drawerItemStyle:{
                    borderTopRightRadius:50,borderBottomEndRadius:50,width:'75%',marginLeft:0
                },
    drawerStyle: {
    //   backgroundColor:COLORS.cyan,
    
    
    },
  }}
  drawerContent={props => {
    const filteredProps = {
      ...props,
      state: {
        ...props.state,
        routeNames: props.state.routeNames.filter((routeName) => {
          routeName !== 'fourthScreenStack';
        },
        ),
        routes: props.state.routes.filter((route)  => route.name !== 'fourthScreenStack'
        ),
      },
    };
    return (
        <ImageBackground source={require('../assets/images/startbg.jpg')} style={styles.image}> 
      <DrawerContentScrollView {...filteredProps} showsVerticalScrollIndicator={false} style={{marginBottom:20}}>
          {/* <View style={{marginTop:30,marginBottom:50}}>
              <TouchableOpacity onPress={(props) => alert('Logged out')}><AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => alert('Logged out')}
                                name="arrowleft"
                                size={20}
                            /></TouchableOpacity>
      <Text style={{color:'#fff',fontSize:16,fontWeight:SIZES.regular,textAlign:'center',marginTop:-22}}>Menu</Text>
      </View> */}
      <View >
      <DrawerItem icon={() =><AntDesign
                                style={styles.menuButtom}
                                color={COLORS.white}
                                onPress={() => props.navigation.toggleDrawer()}
                                name="arrowleft"
                                size={20}
                            />} label={() =><Text style={{color:'#fff',fontSize:16,
                            fontWeight:SIZES.regular,textAlign:'center',marginTop:-10,marginRight:10}}>Menu</Text>}
        style={{marginLeft:0,marginBottom:30,marginTop:30}} 
        
      /> 
        <DrawerItemList {...filteredProps} />
       
        </View>
        {/* <DrawerItem label={() => <Text style={{ color: 'white' }}>Logout</Text>}
        style={{backgroundColor: 'red',borderTopRightRadius:50,borderBottomEndRadius:50,width:'75%'}} 
        onPress={() => alert('Logged out')}
      /> */}
      </DrawerContentScrollView>
      </ImageBackground>
    );
  }}
  >
      {!get_strtpage ? (
  <>
   <Drawer.Screen  options={{ headerShown: false,swipeEnabled: false,  
            
            }} name="fourthScreenStack" component={fourthScreenStack} />
    <Drawer.Screen name="Home" component={Home} options={({ navigation, route }) => ({
                        headerTitle:  (
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}> 
                            <Image source={require("../assets/images/homelogo.png")} /></View>
                        ),
                       drawerStyle:{
                       
                       },
                        drawerIcon: ({tintColor}) =>
    (
      <AntDesign name="home" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
      

    ),
    
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.black,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                    
                        headerRight: () => <View style={styles.customersRightMenu}>
                       
                       <View style={styles.download}><CartVariant size={SIZES.h2} color={'#000'} /></View>
                        
                    </View>
                    })} />
                      

            <Drawer.Screen options={{ headerShown: false,swipeEnabled: false, drawerLabel: () => null,}} name="OnboardingOne" component={OnboardingOne} />
        <Drawer.Screen options={{ headerShown: false,swipeEnabled: false,drawerLabel: () => null,}} name="OnboardingTwo" component={OnboardingTwo} />
                <Drawer.Screen options={{ headerShown: false,swipeEnabled: false,drawerLabel: () => null}} name="OnboardingThree" component={OnboardingThree} />
                <Drawer.Screen options={{ headerShown: false,swipeEnabled: false,drawerLabel: () => null}} name="fourthScreenStack4" component={fourthScreenStack4} />
  </> ) :(<>
               
        <Drawer.Screen name="Home" component={Home} options={({ navigation, route }) => ({
                        headerTitle:  (
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}> 
                            <Image source={require("../assets/images/homelogo.png")} /></View>
                        ),
                       drawerStyle:{
                       
                       },
                        drawerIcon: ({tintColor}) =>
    (
      <AntDesign name="home" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
      

    ),
    
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.black,
                       
                        headerTitleStyle: { fontSize: 20,fontWeight:'500',},
                    
                        headerRight: () => <View style={styles.customersRightMenu}>
                       
                       <View style={styles.download}><CartVariant size={SIZES.h2} color={'#000'} /></View>
                        
                    </View>
                    })} />
        <Drawer.Screen options={({ navigation, route }) => ({
            drawerIcon: ({tintColor}) =>
            (
              <AntDesign name="user" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
              
        
            ),
                        headerTitle: 'Login',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })}
                    
                    name="Login" component={Login}  />
        <Drawer.Screen  name="Registration" component={Registration} options={({ navigation, route }) => ({
             drawerIcon: ({tintColor}) =>
             (
               <AntDesign name="user" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
               
         
             ),
                        headerTitle: 'Register',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} />
                     <Drawer.Screen options={({ navigation, route }) => ({
                         
                          drawerIcon: ({tintColor}) =>
                          (
                            <AntDesign name="info" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
                            
                      
                          ),
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
                    })} name="About" component={Aboutus} />   
                     <Drawer.Screen options={({ navigation, route }) => ({
                          drawerIcon: ({tintColor}) =>
                          (
                            <AntDesign name="mail" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
                            
                      
                          ),
                        headerTitle: 'Contact Us',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                    })} name="Contact Us" component={Contactus} /> 
                       <Drawer.Screen options={({ navigation, route }) => ({
                           drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular
                        },
                        headerTitle: 'Forgot Password',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} name="Forgot Password" component={Forgotpassword} />
           <Drawer.Screen options={({ navigation, route }) => ({
                drawerLabelStyle:{
                    paddingLeft:8,
                    fontSize:15,
                    fontWeight:SIZES.regular
                },
                        headerTitle: 'Confirm Number',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                    })} name="ConfirmNumber" component={ConfirmNumber} />
            {/* <Drawer.Screen options={{ headerShown: false }} name="Otpverified" component={Otpverified} />     */}
            <Drawer.Screen options={({ navigation, route }) => ({
                 drawerLabelStyle:{
                    paddingLeft:8,
                    fontSize:15,
                    fontWeight:SIZES.regular
                },
                        headerTitle: 'Profile',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                    })} name="Profile" component={Profile} />
                    <Drawer.Screen options={({ navigation, route }) => ({
                         drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular,
                            
                        },
                        headerTitle: 'Enquery',
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerTintColor: COLORS.white,
                        headerTitleStyle: { fontSize: 20,fontWeight:'500'},
                    })} name="Enquery" component={Enquery} /> 
                   
                   <Drawer.Screen options={({ navigation, route }) => ({
                         drawerIcon: ({tintColor}) =>
                         (
                           <AntDesign name="creditcard" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
                           
                     
                         ),
                             
                        headerTitle: 'Payment',
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
                        headerRight: () => <View style={styles.customersRightMenu}>
                       
                        <View style={styles.download}><CartVariant size={SIZES.h2}  color={COLORS.white} /></View>
                         
                     </View>
                    })} name="Payment" component={Payment} />
               <Drawer.Screen options={({ navigation, route }) => ({
                   drawerIcon: ({tintColor}) =>
                   (
                     <AntDesign name="table" style={{marginRight:-22,marginLeft:5}} color='#fff' width={20}  size={20}/>
                     
               
                   ),
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
                    <Drawer.Screen options={({ navigation, route }) => ({
                         drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular
                        },
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
                      <Drawer.Screen options={({ navigation, route }) => ({
                           drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular
                        },
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
                    <Drawer.Screen options={({ navigation, route }) => ({
                         drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular
                        },
                        headerTitle: 'Checkout',
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
                        headerRight: () => <View style={styles.customersRightMenu}>
                       
                        <View style={styles.download}><CartVariant size={SIZES.h2}  color={COLORS.white} /></View>
                         
                     </View>
                    })} name="Checkout" component={Checkout} /> 
               
                    <Drawer.Screen options={({ navigation, route }) => ({
                         drawerLabelStyle:{
                            paddingLeft:6,
                            fontSize:15,
                            fontWeight:SIZES.regular
                        },
                        headerTitle: '',
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
                        
                    })} name="FashionDetails" component={FashionDetails} />
                       <Drawer.Screen options={({ navigation, route }) => ({
                            drawerLabelStyle:{
                                paddingLeft:8,
                                fontSize:15,
                                fontWeight:SIZES.regular
                            },
                        headerTitle: 'Payment Successful',
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
                        headerRight: () => <View style={styles.customersRightMenu}>
                       
                        <View style={styles.download}><CartVariant size={SIZES.h2}  color={COLORS.white} /></View>
                         
                     </View>
                    })} name="PaymentSuccess" component={PaymentSuccess} />
                    </>)}
           
                
      </Drawer.Navigator>
     
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
    drawer: {
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    main: {paddingLeft: 3},
    drawerContent: {
        flex: 1,
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

        width: '100%',
        height: '100%',
       
        
    },
        drawerSection:{
            paddingTop:40
        },
})

export default Index;

