import React, { useState }  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,SafeAreaView,} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme'
// import Squery from '../component/icons/square'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
const Aboutus = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          
          <View style={styles.profile_body}>
          <ScrollView showsVerticalScrollIndicator={false}  >
            <View >
                <View style={styles.imgbox}>
                <Image style={styles.img} source={require("../assets/images/about2.png")} />
                </View>

               
            <View style={styles.textbox}>
                <Text style={styles.text_title}>Welcome to <Text style={{color:'#11bbc2'}}>CSGlobal Mall</Text></Text>
                <Text style={styles.textdesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac lectus pulvinar, sodales nisi eu, malesuada ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut eros lacus.</Text>
            </View>
                <View style={styles.imgsection}> 
                <View style={[styles.imgsectionone,{marginRight:10,}]}> 
               
                <Image style={[styles.img,{borderRadius:10}]}source={require("../assets/images/about3.png")} />
                <View style={styles.imgtitle}><Text style={styles.imgtitletext}>Choose our Best Product</Text></View>
                       </View>
                       <View style={styles.imgsectionone}> 
                       <Image style={[styles.img,{borderRadius:10}]} source={require("../assets/images/about3.png")} />
                       <View style={styles.imgtitle}><Text style={styles.imgtitletext}>Choose our Verified Products</Text></View>
                       </View>      
        </View>
        <View style={{marginTop:20}}>
<Text style={styles.discounttitle}>Get <Text style={{color:'#11bbc2'}}>Discount offer</Text></Text>
</View>
        
        <View style={{marginTop:20,flexDirection:'row',zIndex:11}}>

<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={styles.imgdiscount}> 
<Image style={{resizeMode:'cover',borderRadius:10}} source={require("../assets/images/about4.png")} />
    </View>
 
    <View style={styles.imgdiscount}> 
<Image style={{resizeMode:'cover',borderRadius:10}} source={require("../assets/images/about4.png")} />
    </View>
    <View style={styles.imgdiscount}> 
<Image style={{resizeMode:'cover',borderRadius:10}} source={require("../assets/images/about4.png")} />
    </View>
</ScrollView>



        </View>
   


            </View>
            </ScrollView>
              </View>
           
          
        </View>
    );
};

export default Aboutus;

const styles = StyleSheet.create({
    profile_bodyarea: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#11bbc2',
               
    },
   
    profile_body: {
       flex:1,
    //    position:'absolute',
    marginTop:100,
       backgroundColor:'#fff',
       bottom:0,
       left:0,
       width:'100%',
    //    height:570,
       borderTopRightRadius:50,
       paddingHorizontal:20,
       paddingVertical:20,
       paddingTop:20
    },
imgbox:{
    height:186,alignItems:'center'
},
img:{width:'100%',resizeMode:'cover'},
textdesc:{
    fontSize:14,
    fontWeight:'300',
    color:'#000'
},
text_title:{
    fontSize:20,
    fontWeight:'400',
    color:'#000'
},
textbox:{
    marginTop:17
},
imgsectionone:{
    flex:1,
    height:221,
    position:'relative'
   
},
imgtitle:{
    position:'absolute',
    bottom:20,
    left:0,
    paddingHorizontal:12,
   
},
imgtitletext:{
color:'#fff',
fontSize:16,
paddingVertical:8
},
imgsection:{flexDirection:'row',justifyContent:'space-between',marginTop:25},
discounttitle:{
    color:'#000',
fontSize:20,
fontWeight:'400',
paddingVertical:8
},
imgdiscount:{
    marginRight:10,
    height:185,
  
}

  
})