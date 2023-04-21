import { Text, OpeningLogo, Container, CustomText } from '../../components';
import React, { useEffect } from 'react';
import { Animated } from 'react-native';


export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn')
      
    }, 2000)
  }, [navigation])
  
  return (
    <Container align='center' justify='center' bg='blue' colors={['rgba(8,127,237,100)', 'rgba(87,161,228,100)']}>
     <OpeningLogo/>
      {/*<FontAwesome5 name="dumbbell" size={75} color="white" />*/}
      <Text>Boa Forma Fitness</Text>
    </Container>
  );
}

