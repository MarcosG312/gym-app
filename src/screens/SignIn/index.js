import { Button } from 'react-native';
import { useState, React } from 'react';
import { Container, OpeningLogo } from '../../components';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { InputContainer, InputText } from './styles';
import { useNavigation } from '@react-navigation/native';



export const SignIn = () => {
  
  const navigation = useNavigation();

  const [matricula, setMatricula] = useState('');
  const [name, setName] = useState('');
  const [active, setActive] = useState(false);


  const checkText = () => {

    if (name !== null && matricula !== null) {
      setActive(true);
    } else {
      setActive0(false)
    }

  }


  return (
    <Container align='center' justify='center' bg='blue' colors={['rgba(8,127,237,100)', 'rgba(87,161,228,100)']}>
      <OpeningLogo />

      <InputContainer>
        <Ionicons name="ios-person-sharp" size={18} color="black" r />
        <InputText

          placeholder='Digite o seu nome'
          onChangeText={setName}
          onSubmitEditing={checkText}
        />
      </InputContainer>

      <InputContainer>
        <Entypo name="key" size={18} color="black" />
        <InputText

          keyboardType='numeric'
          placeholder='Digite a sua matrícula'
          onChangeText={setMatricula}
          onSubmitEditing={checkText}
        />
      </InputContainer>



      {
        active ?
          <Button
            onPress={navigation.navigate('Home')}
            title="Login" />
          :
          <Button
            disabled
            title="Login"
 />
      }


    </Container>
  );
}
