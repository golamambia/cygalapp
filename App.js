
import React,{useState, useEffect} from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { COLORS, SIZES, FONTS } from './constants/theme';
import Navigation from './nevigation'
// import  Login  from './screens/Login';
const App = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(function(){  
      setIsVisible(false);
    }, 2000); 
  }, []);

  return (
    <>
      <Navigation />
      {isVisible === true ?<ImageBackground style={{width:SIZES.width, height:SIZES.height}} source={require('./assets/images/splash.png')} >
        <View  style={{flex: 1, justifyContent: "center", alignItems: "center"}}><Image style={{width:SIZES.width * (2/3), height:SIZES.width * (2/3)}} source={require('./assets/images/logo.png')} /></View>
      </ImageBackground> : null}
    </>
  );
}

export default App;
