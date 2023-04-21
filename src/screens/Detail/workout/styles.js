import styled from 'styled-components/native'


export const CardContainer = styled.TouchableOpacity`
    width: ${({ theme }) => theme.metrics.px(370)}px;
    margin-horizontal: ${({ theme}) => theme.metrics.px(12)}px;
    margin-top: ${({ theme}) => theme.metrics.px(25)}px;
    margin-bottom: ${({ theme}) => theme.metrics.px(18)}px;

 `  

 export const ExerciseName = styled.TouchableOpacity`
    padding: 3%;
    paddingLeft: 8%;
    paddingRight: 8%;
    borderRadius: 20;
    flexDirection: row;
    borderWidth: 1;
`
export const BoxText = styled.View`
justifyContent: center;
color: ${({ color, theme}) => theme.colors[color || 'white']};
margin-left: ${({ theme}) => theme.metrics.px(50)}px;
`

export const Box = styled.View`
display: flex;
flexDirection: row;
borderColor: #fff;
alignItems: center;
justifyContent: center;
margin: ${({ theme}) => theme.metrics.px(10)}px;
`

export const SafeView = styled.SafeAreaView`
flex: 1;
`