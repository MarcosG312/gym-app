import React from 'react';
import { Banner, Container } from '../../components'
import { ScrollView } from 'react-native';
import { useDataStore } from '../../services/stores';
import { Training } from '../Detail/workout';

export const FavoritesScreen = () => {
const {selectedData} = useDataStore()
return <Container align="flex-start" justify="flex-start">
    <ScrollView>
        <Banner 
        item={{
            title: 'Hoje é dia de',
            subtitle: 'Braço',
            image_url:'https://media.istockphoto.com/id/1312685184/pt/foto/ripped-bodybuilder-exercising-at-the-gym.jpg?s=612x612&w=0&k=20&c=XQmCA5d20BsIrEjIfZATygoCZ9DQsVowcn56FKCGcW0=',
        }}/>
        <Training item={selectedData}/>
</ScrollView>
</Container>

}


