import React from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image,TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/FontAwesome';
import BottonCommon from '../component/BottonCommon';

const Forgotpassword = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <StatusBar
            backgroundColor="transparent"
            translucent={true}
        />
      
        <ImageBackground source={require('../assets/images/startbg.jpg')} style={styles.image}>
       
          <View style={styles.formstart}>
          <View >
        <View style={styles.formInner}>
        <View style={styles.imgbox}>
                    <Image style={styles.boximg} source={require("../assets/images/keycircle.png")} />

                </View>
                <View style={{alignItems:'center'}}> 
                    <Text style={styles.boxtitle}>Forgot Password </Text>
                    <Text style={{fontSize:16,color:'#fff',fontWeight:'300',textAlign:'center',marginTop:10,marginBottom:10}}>Enter the email address associated with
your account.</Text>
                </View>
          </View>

        <View >
                <View >
                   <View style={styles.inputIcon}>
                   {/* <Icon name="user" size={30} color="#900" />
                   <Icon name="Star" size={30} color={COLORS.cyan}/> */}

                   <Image source={require("../assets/images/emailicon.png")} />

                       </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        placeholderTextColor="#ffffff" 
                    />
                    </View>
                    <View style={styles.loginbtn}>
          <TouchableOpacity style={styles.logintouch}  onPress={() => navigation.navigate('ConfirmNumber')}>
       <View style={{position:'absolute',top:18,bottom:0,left:0,right:0,}}>
        <Image style={{alignSelf:'center',paddingTop:10}} source={require("../assets/images/logbtn.png")} />
        
        </View>
    </TouchableOpacity>    
                    </View>

        </View>
        </View>

          </View>
    
                   
        </ImageBackground>
    </View>
    );
};

export default Forgotpassword;

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
    background:{position:'absolute',bottom:185,left:0,width:'100%',height:335,backgroundColor:'#34bac0',zIndex:1,borderTopRightRadius:60,borderBottomLeftRadius:60},
    formstart:{flex:3,paddingHorizontal:20,position:'relative',zIndex:2,marginTop:30},
    formInner:{alignItems:'center',paddingTop:120,marginBottom:25},
    imgbox:{width:94,height:94,marginBottom:10},
    boximg:{width:'100%',height:'100%',resizeMode:'cover'},
    boxtitle:{color:'#fff',textTransform:'uppercase',fontSize:18},
    inputIcon:{position:'absolute',top:18,left:12,zIndex:1},
    loginbtn:{position:'relative',marginTop:10},
    logintouch:{height: 58,
        marginBottom: SIZES.padding2,
        borderWidth: 1,
        borderColor:'#5bc3c8',
        paddingHorizontal: SIZES.padding,
       
        borderRadius:5,
        backgroundColor:'#fff',
        alignItems:'center',
        },
    loginbelow:{flex:1,paddingHorizontal:20,position:'relative',zIndex:2},
    forgotbtn:{borderBottomWidth:1,borderBottomColor:'#52c7cb'},
    forgottouch:{width:'100%',marginBottom:10},
    forgottext:{color:'#f0f0f0',textAlign:'center',fontSize:15,textTransform:'capitalize'},
    regtext:{color:'#f0f0f0',textAlign:'center',fontSize:15,textTransform:'capitalize'},
   

})