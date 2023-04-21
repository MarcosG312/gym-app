import React from 'react';
import { Banner, Container } from '../../components'
import { ScrollView } from 'react-native';
import { useDataStore } from '../../services/stores';
import { Training } from './workout';


export const Detail = () => {
    const {selectedData} = useDataStore()
    return <Container align="flex-start" justify="flex-start">
        <ScrollView>
            <Banner item={selectedData}/>
            <Training item={selectedData}/>
    </ScrollView>
    </Container>
}