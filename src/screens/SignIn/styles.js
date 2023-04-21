import styled from 'styled-components/native'


export const InputContainer = styled.View`
            background-color: ${({ bg, theme }) => theme.colors[bg || 'blue2'] }
            borderRadius: ${({ theme }) => theme.metrics.px(10)}px;
            margin: ${({ theme, mt}) => theme.metrics.px(mt || 5)}px;
            alignItems: center;
            justifyContent:center;
            width: ${({ theme }) => theme.metrics.px(200)}px;
`

export const InputText = styled.TextInput`
    color: ${({ color, theme}) => theme.colors[color || 'gray']};
`