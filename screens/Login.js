import React, { useState }  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,TouchableOpacity} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme'
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'

const Login = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          
            <ImageBackground source={require('../assets/images/startbg.jpg')} style={styles.image}>
            <View style={styles.background}></View>
              <View style={styles.formstart}>
              <View >
            <View style={styles.formInner}>
            <View style={styles.imgbox}>
                        <Image style={styles.boximg} source={require("../assets/images/usericon.png")} />

                    </View>
                    <View>
                        <Text style={styles.boxtitle}>login </Text>
                    </View>
              </View>

            <View >
                    <View style={{position:'relative'}}>
                       <View style={styles.inputIcon}>
                       {/* <Icon name="user" size={30} color="#900" />
                       <Icon name="Star" size={30} color={COLORS.cyan}/> */}
                       <Image source={require("../assets/images/uicon.png")} />

                           </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="#ffffff" 
                        />
                        </View>
                        <View style={{position:'relative'}}>
                       <View style={styles.inputIcon}>
                       {/* <Icon name="user" size={30} color="#900" />
                       <Icon name="Star" size={30} color={COLORS.cyan}/> */}
                       <Image source={require("../assets/images/lockicon.png")} />

                           </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#ffffff" 
                        />
                        
                        </View>

                        <View> 
                                    <Text style={{fontSize:15,color:'#ffffff',}}>Remember this Account</Text>
                                </View>

                        


            </View>
            </View>

              </View>
              <View style={styles.loginbtn}>
              <TouchableOpacity style={styles.logintouch}  onPress={() => navigation.navigate('Home')}>
           
            <Image style={{alignSelf:'center'}} source={require("../assets/images/logbtn.png")} />
        </TouchableOpacity>    
                        </View>
                        <View style={styles.loginbelow}>
                            <View style={styles.forgotbtn}>
                            <TouchableOpacity style={styles.forgottouch} onPress={() => navigation.navigate('Forgotpassword')}>
           
            
            <Text style={styles.forgottext}>
                <Image  source={require("../assets/images/forgotkey.png")} />   Forgot password?</Text>
        </TouchableOpacity>
                            </View>
                            
                            <View style={{paddingTop:5}}>
                            <TouchableOpacity style={{width:'100%',}} onPress={() => navigation.navigate('Registration')}>
           
            
            <Text style={styles.regtext}>
                <Image  source={require("../assets/images/logregicon.png")} />   Register</Text>
        </TouchableOpacity>
                            </View>
                        </View>
            </ImageBackground>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        
    },
   
    main: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

        width: '100%',
        height: '100%',
       
        
    },
    input: {
        height: 58,
        marginBottom: SIZES.padding2,
        borderWidth: 1,
        borderColor:'#5bc3c8',
        paddingHorizontal: SIZES.padding,
        fontSize: 15,
        borderRadius:5,
        backgroundColor:'#5bc3c8',
        color:'#ffffff',
        paddingLeft:40
        
    },
    loginCon: {
        //   borderWidth: 1,
        padding: SIZES.body4,
        marginHorizontal: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.cilver,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 4,
        // opacity: .90
    },
    loginLabel: {
        fontSize: SIZES.h2,
        paddingBottom: SIZES.padding2,
        color: COLORS.cyan,
        fontWeight: 'bold'
    },
    background:{position:'absolute',bottom:190,left:0,width:'100%',height:335,backgroundColor:'#34bac0',zIndex:1,borderTopRightRadius:60,borderBottomLeftRadius:60},
    formstart:{flex:3,paddingHorizontal:20,position:'relative',zIndex:2},
    formInner:{alignItems:'center',paddingTop:120,marginBottom:25},
    imgbox:{width:94,height:94,marginBottom:10},
    boximg:{width:'100%',height:'100%',resizeMode:'cover'},
    boxtitle:{color:'#fff',textTransform:'uppercase',fontSize:18},
    inputIcon:{position:'absolute',top:18,left:12,zIndex:1},
    loginbtn:{flex:.6,alignItems:'center',position:'relative',zIndex:2},
    logintouch:{backgroundColor:'#fff',width:'100%',padding:20,borderBottomLeftRadius:60,},
    loginbelow:{flex:1,paddingHorizontal:20,position:'relative',zIndex:2},
    forgotbtn:{borderBottomWidth:1,borderBottomColor:'#52c7cb'},
    forgottouch:{width:'100%',marginBottom:10},
    forgottext:{color:'#f0f0f0',textAlign:'center',fontSize:15,textTransform:'capitalize'},
    regtext:{color:'#f0f0f0',textAlign:'center',fontSize:15,textTransform:'capitalize'},
  
  
})