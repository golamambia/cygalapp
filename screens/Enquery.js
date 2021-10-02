import React, { useState }  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme'
// import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon';
import {Picker} from '@react-native-community/picker';

const Enquery = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          
         
            
              <View style={styles.profile_body}>
              <View style={styles.container}>
              <ScrollView  contentContainerStyle={{
         
         justifyContent: 'center',
         alignContent: 'center',
       }}
       keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}
      >
            <View style={styles.profile_icon}>
                <View style={styles.imgbox}>
                <Image source={require("../assets/images/enqueryimg.png")} />
                </View>
          
                  
              </View>
              <View style={{marginBottom:30,}}>
               <Text style={{color:'#000',fontSize:22,fontWeight:'700',textAlign:'center'}}>Register Now <Text style={{color:'#0ba7ad'}}>to Apply</Text></Text>
           <Text style={{color:'#000000',fontSize:14,textAlign:'center'}}>How to CSGlobal Mall helps you in Shopping?</Text>
           </View>
          
        <View style={styles.formbox}>
        
        <KeyboardAvoidingView enabled>
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
        <Text style={styles.label_text}>City You Live In</Text>
            </View>
            <View  style={styles.input}>
              <Picker 
        selectedValue={selectedValue}
        style={{ height: 52, width: '100%', borderWidth: 1,
        borderColor:'#a9a9a9',}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      </View>
        </View>

        <View style={styles.formfield}>
            <View style={styles.label}>
        <Text style={styles.label_text}>Shop Categories</Text>
            </View>
            <View  style={styles.input}>
              <Picker 
        selectedValue={selectedValue}
        style={{ height: 52, width: '100%', borderWidth: 1,
        borderColor:'#a9a9a9',}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      </View>
        </View>
   
        <TouchableOpacity onPress={() => navigation.navigate('Contactus')} style={styles.flexthreeTouchtwo}>
            <Text style={styles.flexthreeTouchtext} >submit now</Text>
        </TouchableOpacity>
        
        </KeyboardAvoidingView>
       
        </View>
        </ScrollView>
            </View>

              </View>
              
             
          
        </View>
    );
};

export default Enquery;

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
       
       paddingVertical:20
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
        
       
    },
    imgbox:{
        width:146,
        height:122
    },
    profile_icon:{
        
        alignSelf:'center',
       
        margin:'auto',
        position:'relative',
        marginBottom:15
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