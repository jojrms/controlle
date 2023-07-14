import styled from 'styled-components';

export const Background = styled.section`
    background-color: ${props => props.theme.backgroundColor.backgroundGeneral};
    grid-area: content;
    display: grid;
    border-bottom: 2px solid transparent;
    border-color: ${props => props.theme.border.borderColor};
`

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;

    button{
        color: ${props => props.theme.fontColor.header.title};
    }
`