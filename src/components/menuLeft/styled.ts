import styled from 'styled-components';

export const Background = styled.aside`
    background-color: ${props => props.theme.backgroundColor.menuLeft};
    grid-area: menu;

    display: grid;
    grid-template-rows: 100px auto 196px;
`

export const Icon = styled.i`
    width: 100%;
    height: 100%;
`

export const List = styled.ul`
    width: 100%;
    height: 100%;
`

export const BottomOptions = styled.div`
    width: 100%;
    height: 100%;
    border-top: 2px solid transparent;
    border-color: ${props => props.theme.border.borderColor};
`