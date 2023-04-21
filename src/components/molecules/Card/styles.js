import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';

export const CardContainer = styled.TouchableOpacity`
    width: ${({ theme }) => theme.metrics.px(370)}px;
    height: ${({ theme }) => theme.metrics.px(100)}px;
    border-radius: ${({ theme }) => theme.metrics.px(10)}px;
    margin-horizontal: ${({ theme}) => theme.metrics.px(12)}px;
    margin-top: ${({ theme}) => theme.metrics.px(25)}px;
    margin-bottom: ${({ theme}) => theme.metrics.px(18)}px;
    overflow: hidden;
    
`

export const CardImage = styled.ImageBackground`
    height: 100%;
    width: 100%;
    
`
export const BannerGradientList = styled(LinearGradient)`
    height: 100%;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
`

