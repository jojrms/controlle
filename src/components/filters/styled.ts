import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: grid;
`

export const Label = styled.label`
    color: ${props => props.theme.fontColor.header.title};
    font-weigth: 600;
`