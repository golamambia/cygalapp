import React, { useState }  from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight ,
    TouchableOpacity,KeyboardAvoidingView,ScrollView,SafeAreaView,} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme'
// import Squery from '../component/icons/square'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottonCommon from '../component/BottonCommon'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
const EcommorceCollection = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.profile_bodyarea}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
          
          <View style={styles.profile_body}>
          <ScrollView>
            <View >
                <View style={styles.fashionbox}>
                <Image style={styles.img} source={require("../assets/images/ecom1.png")} />
                <View style={styles.fashiontextbox}>
            <Text style={{fontSize:16}}>
            30 - 40% off on
            </Text>
            <Text style={styles.fashiontitle}>fashion {"\n"}Collection</Text>
            <Text style={{fontSize:18}}>Huge savings on high {"\n"}street fashion</Text>
                    </View>
                </View>

          
        <View style={{marginTop:20}}>
<Text style={styles.discounttitle}>Latest fashion </Text>
</View>
        
        <View style={{marginTop:10,flexDirection:'row',}}>

<ScrollView horizontal={true}>
<View style={styles.latestfashionbox}>
<TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
<View style={styles.imgdiscount}> 
<Image style={styles.fashionimg} source={require("../assets/images/ecom2.png")} />
</View>
<View style={styles.ltboxtitle}>
    <Text style={styles.ltfashiontext}>Fashion</Text>
    <Text style={{fontSize:12}}>Your shop is a place to sell and share.</Text>
</View>
</TouchableOpacity>
    </View>

    <View style={styles.latestfashionbox}>
<TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
<View style={styles.imgdiscount}> 
<Image style={styles.fashionimg} source={require("../assets/images/ecom2.png")} />
</View>
<View style={styles.ltboxtitle}>
    <Text style={styles.ltfashiontext}>Fashion</Text>
    <Text style={{fontSize:12}}>Your shop is a place to sell and share.</Text>
</View>
</TouchableOpacity>
    </View>
    <View style={styles.latestfashionbox}>
<TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
<View style={styles.imgdiscount}> 
<Image style={styles.fashionimg} source={require("../assets/images/ecom2.png")} />
</View>
<View style={styles.ltboxtitle}>
    <Text style={styles.ltfashiontext}>Fashion</Text>
    <Text style={{fontSize:12}}>Your shop is a place to sell and share.</Text>
</View>
</TouchableOpacity>
    </View>
</ScrollView>



        </View>
   


      
       <View style={{marginTop:30}}>
     <Text style={styles.cattitle}>Categories</Text>
       <View style={styles.catbox}>

           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/cat1.png")} />
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/fashioncat.png")} />
            <Text style={styles.catboxtext}>Fashion</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>
           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/cat1.png")} />
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/appliance.png")} />
            <Text style={styles.catboxtext}>Appliance</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>
          

           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/cat1.png")} />
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/neclace.png")} />
            <Text style={styles.catboxtext}>Jewellery</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>


           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/cat1.png")} />
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/furniture.png")} />
            <Text style={styles.catboxtext}>furniture</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>

           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/cat1.png")} />
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/cosmetic.png")} />
            <Text style={styles.catboxtext}>cosmetic</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>

           
           <View style={styles.catleftbox}>
               <TouchableOpacity onPress={() => navigation.navigate('FashionCollection')}>
            <View style={styles.catboxcenter}>
            <Image  source={require("../assets/images/cat1.png")} />
            <View style={styles.catfashionpos}>
            <Image  source={require("../assets/images/consulting.png")} />
            <Text style={styles.catboxtext}>consulting</Text>
            <Image  source={require("../assets/images/rightarrow.png")} />
            </View>
            </View>
            </TouchableOpacity>
           </View>

           
       </View>
   
     
   

            </View>
         




            </View>
            </ScrollView>
              </View>
           
          
        </View>
    );
};

export default EcommorceCollection;

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
    fashionbox:{
position:'relative',
height:196,

borderRadius:10,

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
fontSize:18,
fontWeight:'500',
paddingVertical:8,
textTransform:'uppercase'
},
imgdiscount:{
    
    height:178,
  
},
fashiontextbox:{position:'absolute',top:25,bottom:0,left:15},
fashiontitle:{fontSize:28,fontWeight:'700',textTransform:'uppercase',},
latestfashionbox:{width:140,marginRight:10,},
ltboxtitle:{marginLeft:10,marginRight:15},
ltfashiontext:{fontSize:16,color:'#000',fontWeight:'300'},
fashionimg:{resizeMode:'cover',borderRadius:10},
catbox:{marginBottom:15,flexDirection: "row",
flexWrap: "wrap",},
catleftbox:{marginRight:10,borderWidth:1,alignItems:'center',justifyContent:'center'
,borderColor:'#c9c9c9',height:163,width:113,borderRadius:10,borderTopRightRadius:30,
borderBottomLeftRadius:30,marginBottom:10
             
},
'catleftbox:nth-of-type(3n)':{
    marginRight:0,
},
catrightbox:{borderWidth:1,alignItems:'center',justifyContent:'center',
flex:1,borderColor:'#c9c9c9',height:213,borderRadius:10,
borderTopRightRadius:50,borderBottomLeftRadius:50},
catboxtext:{marginTop:20,textTransform:'uppercase',fontSize:16,
fontWeight:'500',textAlign:'center',marginBottom:20,color:'#fff'},
catboxcenter:{alignItems:'center',position:'relative'},
cattitle:{fontSize:16,fontWeight:'700',textTransform:'uppercase',color:'#000',marginBottom:15},
catfashionpos:{position:'absolute',justifyContent:'center',alignItems:'center',marginTop:30},
  
})