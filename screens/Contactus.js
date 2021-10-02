import React, { useState }  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,SafeAreaView,} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme'
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
const Contactus = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          
          <ScrollView   contentContainerStyle={{
        flex:1
         
       }}  
       keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}
      >
            
              <View style={styles.profile_body}>
         
            
              <View style={styles.container}>
              <KeyboardAvoidingView enabled>
        <View style={styles.formbox}>
       
        
        <View style={styles.formfield}>
        <View style={styles.label}>
        <Text style={styles.label_text}>Your First Name</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#000" 
                        />
        </View>

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Your Last Name</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#000" 
                        />
        </View>

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Your Email</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#000" 
                        />
        </View>

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Your Phone</Text>
            </View>
        <TextInput
                            style={styles.input}
                            placeholder="Phone"
                            placeholderTextColor="#000" 
                        />
        </View>

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Message</Text>
            </View>
        <TextInput
        multiline={true}
        numberOfLines={4}
                            style={[styles.input,{height:100}]}
                            placeholder="Type Text"
                            placeholderTextColor="#000" 
                        />
              
        </View>


   
        <TouchableOpacity onPress={() => navigation.navigate('Aboutus')} style={styles.flexthreeTouchtwo}>
            <Text style={styles.flexthreeTouchtext} >Send</Text>
        </TouchableOpacity>
        
        
        
        </View>
        </KeyboardAvoidingView>
            </View>
            
              </View>
              </ScrollView>
          
          
        </View>
    );
};

export default Contactus;

const styles = StyleSheet.create({
    profile_bodyarea: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#11bbc2',
        position:'relative'
        
    },
   
    profile_body: {
       
       position:'absolute',
       backgroundColor:'#fff',
       bottom:0,
       left:0,
       width:'100%',
       height:'85%',
       borderTopRightRadius:70,
       
      
    },

    input: {
        height: 52,
        marginBottom: SIZES.padding2,
        borderWidth: 1,
        borderColor:'#a9a9a9',
        paddingHorizontal: SIZES.padding,
        fontSize: 15,
        borderRadius:5,
        backgroundColor:'#fff',
        color:'#000',
        paddingLeft:10
        
    },
    container:{
        paddingHorizontal:20,
        marginTop:40
       
    },
    profile_icon:{
        
        alignSelf:'center',
        width:134,
        height:134,
        margin:'auto',
        position:'relative',
        marginBottom:20
    },
    profile_penicon:{
    position:'absolute',
    bottom:10,
    right:0,
    
    },
    formbox:{
     
    },
    formfield:{
        position:'relative',
        marginBottom:5
    },
    label:{
    position:'absolute',
    top:-10,
    left:10,
    zIndex:1,
    backgroundColor:'#fff',
    paddingHorizontal:2
    },
    label_text:{color:'#6f6f6f',fontSize:15},
    flexthreeTouchtext:{color:COLORS.white,textAlign:'center',
    textTransform:'uppercase',fontSize:16,fontWeight:'700',
    paddingVertical:15,
},
    flexthreeTouchtwo:{borderColor:COLORS.cyan,borderWidth:1,
        backgroundColor:COLORS.white,
        height:52,backgroundColor:'#11bbc2',
        borderRadius:5,
        marginBottom:10
    },
        flexthreeTouch:{borderColor:'#6f6f6f',borderWidth:1,
           
            height:52,backgroundColor:'#fff',
            borderRadius:5},
            Touchtext:{color:'#6f6f6f',textAlign:'center',
            textTransform:'uppercase',fontSize:16,fontWeight:'700',
            paddingVertical:15,
        },
  
})