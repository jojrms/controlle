import styled from 'styled-components';

export const Background = styled.header`
    background-color: ${props => props.theme.backgroundColor.backgroundGeneral};
    grid-area: header;

    display: grid;
    align-items: center;

    border-bottom: 2px solid transparent;
    border-color: ${props => props.theme.border.borderColor};
    padding: 0px 60px;
`

export const Title = styled.h1`
    color: ${props => props.theme.fontColor.header.title};
    text-transform: capitalize;
    font-size: ${props => props.theme.fontSize.lg};
`