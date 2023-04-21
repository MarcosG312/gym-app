import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import OpeningImage from '../../../../assets/OpeningLogo.png';

export const OpeningLogo = () =>{
    return(
        <Image style={styles.openingL} source={OpeningImage}/>
    )
}

const styles = StyleSheet.create({
    openingL: {
      height: 100,
      width: 100,
    },
  
  });
  