import React from "react";
import { CardContainer, CardImage, BannerGradientList } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { Text } from '../../atoms';
import { useNavigation } from "@react-navigation/native";
import { useDataStore } from "../../../services/stores";

export const Card = ({ item }) => {
    const { setSelectedData } = useDataStore()
    const navigation = useNavigation()
    
    const onSelectItem = () => {
        setSelectedData(item)
        navigation.navigate('Detail')
    }
    return (
        <CardContainer onPress={() => onSelectItem()}>
            <CardImage source={{ uri: item.image_url }}>
                <BannerGradientList colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.3)' , 'rgba(0,0,0,1.0)']}>

                    <Text t={30} ml={10}>{item.name}</Text>
                    <AntDesign name="rightcircle" size={36} color="white" right={10} />

                </BannerGradientList>
            </CardImage>
        </CardContainer>
    )
}