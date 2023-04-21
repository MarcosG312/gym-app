import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';

export const BannerContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${({ theme }) => theme.metrics.px(123)}px;
`

export const BannerImageBackground = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
export const BannerGradient = styled(LinearGradient)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
    padding-top: ${({ theme }) => theme.metrics.px(24)}px;

`