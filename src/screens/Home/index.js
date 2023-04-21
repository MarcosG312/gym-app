import React from 'react';
import { Banner, Container, HomeList, Text } from '../../components'
import { ScrollView } from 'react-native';

export const Home = () => {
    return <Container align="flex-start" justify="flex-start">
        <ScrollView>

        <Banner 
        item={{
            title: 'Bem vindo,',
            name: 'Aluno(a)',
            image_url: 'https://pocosdecaldas.mg.gov.br/wp-content/uploads/2020/06/Academias.jpeg',
        }}/>
        <Text ml={10} fontFamily="semiBold" size={24} t={17}>Seus Treinos</Text>
        <HomeList/>
        
        </ScrollView>
    </Container>
}