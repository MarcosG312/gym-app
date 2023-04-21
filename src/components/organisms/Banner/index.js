import React from 'react'
import { BannerContainer, BannerImageBackground, BannerGradient } from './style'
import { Text, Logo } from '../../../components/atoms'



export const Banner = ({item}) => {
    const {image_url, title, name} = item;
    return <BannerContainer>
        <BannerImageBackground 
        source={{ 
            uri : image_url,
            }}>
            <BannerGradient 
            colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.8)'
            ]}>
                <Logo />
                <Text fontFamily="bold" size={14} mt={18}>{title}</Text>
                <Text color="blue" mt={-10} size={32} >{name}</Text>
            </BannerGradient>
        </BannerImageBackground>
    </BannerContainer>
    
}

