import styled from 'styled-components';

export const Background = styled.section`
    background-color: ${props => props.theme.backgroundColor.backgroundGeneral};
    grid-area: content;
    display: grid;
    grid-template-rows: min-content auto;
    gap: 30px;
    border-bottom: 2px solid transparent;
    border-color: ${props => props.theme.border.borderColor};
    padding: 0px 30px 0px 60px;

    #buttonDeleteFilters{
        margin: 0px 10px 0px auto;
    }
`

export const Container = styled.div`
    height: 80px;
    display: flex;
    align-items: end;

    button{
        color: ${props => props.theme.fontColor.header.title};
    }
`

export const FiltersGrid = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: end;
    gap: 10px;
`