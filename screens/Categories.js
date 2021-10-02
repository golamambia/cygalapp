import React, { useState }  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,SafeAreaView,} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme'
// import Squery from '../component/icons/square'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
const Categories = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          
          <View style={styles.profile_body}>
          
     
               <View style={styles.sort_refine}>
                   <View style={styles.sort_refinebox}>
                       <Text style={styles.sorttext}>
                           <Image  source={require("../assets/images/sorticon.png")} />   Sort</Text>
                   </View>
                   <View style={styles.sort_refinebox}>

                   <Text style={styles.sorttext}>
                       <Image  source={require("../assets/images/refineicon.png")} />   Refine</Text>
                   </View>
               
                   </View>
                   <ScrollView  showsVerticalScrollIndicator={false}>
       <View>
     
       <View style={styles.catbox}>
           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('EcommorceCollection')}>
            <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/startupicon.png")} />
            <Text style={styles.catboxtext}>E-commerce</Text>
            <Image  source={require("../assets/images/doublearrowicon.png")} />
            </View>
            </TouchableOpacity>
           </View>
           <View style={styles.catrightbox}>
           <TouchableOpacity onPress={() => navigation.navigate('EcommorceCollection')}>
           <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/startupicon.png")} />
            <Text style={styles.catboxtext}>start-up</Text>
            <Image  source={require("../assets/images/doublearrowicon.png")} />
            </View>
            </TouchableOpacity>
           </View>
       </View>
   
       <View style={styles.catbox}>
           <View style={styles.catleftbox}>
           <TouchableOpacity onPress={() => navigation.navigate('EcommorceCollection')}>
            <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/corporateicon.png")} />
            <Text style={styles.catboxtext}>corporate</Text>
            <Image  source={require("../assets/images/doublearrowicon.png")} />
            </View>
            </TouchableOpacity>
           </View>
           <View style={styles.catrightbox}>
           <TouchableOpacity onPress={() => navigation.navigate('EcommorceCollection')}>
           <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/legalicon.png")} />
            <Text style={styles.catboxtext}>legal</Text>
            <Image  source={require("../assets/images/doublearrowicon.png")} />
            </View>
            </TouchableOpacity>
           </View>
       </View>
       <View style={styles.catbox}>
           <View style={styles.catleftbox}>
           <TouchableOpacity onPress={() => navigation.navigate('EcommorceCollection')}>
            <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/blogicon.png")} />
            <Text style={styles.catboxtext}>blog</Text>
            <Image  source={require("../assets/images/doublearrowicon.png")} />
            </View>
            </TouchableOpacity>
           </View>
           <View style={styles.catrightbox}>
           <TouchableOpacity onPress={() => navigation.navigate('EcommorceCollection')}>
           <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/consultingicon.png")} />
            <Text style={styles.catboxtext}>consulting</Text>
            <Image  source={require("../assets/images/doublearrowicon.png")} />
            </View>
            </TouchableOpacity>
           </View>
       </View>

            </View>
            </ScrollView>
            </View>
           
          
        </View>
    );
};

export default Categories;

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
sort_refine:{flexDirection:'row',alignItems:'center',marginBottom:15},
sort_refinebox:{flex:1,borderWidth:0.5},
sorttext:{textAlign:'center',paddingVertical:10,fontSize:16,color:'#000'},
catbox:{flexDirection:'row',justifyContent:'space-between',marginBottom:15},
catleftbox:{marginRight:15,borderWidth:1,alignItems:'center',justifyContent:'center',
flex:1,borderColor:'#c9c9c9',height:213,borderRadius:10,borderTopRightRadius:50,
borderBottomLeftRadius:50,
             
},
catrightbox:{borderWidth:1,alignItems:'center',justifyContent:'center',
flex:1,borderColor:'#c9c9c9',height:213,borderRadius:10,
borderTopRightRadius:50,borderBottomLeftRadius:50},
catboxtext:{marginTop:10,textTransform:'uppercase',fontSize:18,
fontWeight:'500',textAlign:'center',marginBottom:20},
catboxcenter:{alignItems:'center'},


  
})