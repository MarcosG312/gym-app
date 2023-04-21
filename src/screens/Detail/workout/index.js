import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {  Container, Text } from '../../../components'
import { ScrollView } from 'react-native';
import { CardContainer, ExerciseName, Box, BoxText, SafeView } from './styles';


export const Training = () => {
  const [click, setClick] = useState()

  const clickButton = () => {
    setClick(!click)

  }

  return (
    <Container align='center' justify='center' bg='dark' colors={['rgba(8,127,237,100)', 'rgba(87,161,228,100)']}>
      <ScrollView>
        <SafeView>
      <CardContainer>
      <Box>
        <ExerciseName onPress={clickButton}>

        <Ionicons name="ios-add-circle" size={24} color="white" />
          <BoxText>
            <Text size={12}>Adicionar Exercício</Text>
          </BoxText>

        </ExerciseName>
      </Box>



      
      <StatusBar style="auto" />
      </CardContainer>
      </SafeView>
      </ScrollView>
    </Container>
  );
}

