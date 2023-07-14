import styled from 'styled-components';

export const Background = styled.section`
    background-color: ${props => props.theme.backgroundColor.backgroundGeneral};
    grid-area: content;

    display: grid;
    align-items: center;

    border-bottom: 2px solid transparent;
    border-color: ${props => props.theme.border.borderColor};
    padding: 0px 60px;
`