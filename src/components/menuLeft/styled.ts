import styled from 'styled-components';

import IconUrl from '../../images/menuLeft/Icon.svg'

type OptionProps = {
    selected: boolean;
}

export const Background = styled.aside`
    background-color: ${props => props.theme.backgroundColor.menuLeft};
    grid-area: menu;

    display: grid;
    grid-template-rows: 100px auto 196px;
`

export const Icon = styled.i`
    width: 100%;
    height: 100%;
    background-image: url(${IconUrl});
    background-size: 50%;
`

export const List = styled.ul`
    height: fit-content;
    padding: 0px 16px;
    display: grid;
    grid-template-rows: min-content;
    gap: 5px;
`
export const Option = styled.li<OptionProps>`
    background-color: ${({selected}) => selected ? props => props.theme.backgroundColor.backgroundIcons : "transparent"};
    color: ${({selected}) => selected ? props => props.theme.fontColor.menuLeft.activeOption : props => props.theme.fontColor.menuLeft.inactiveOption};
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 18px 20px;
    border-radius: ${props => props.theme.border.menuBorderRadius}
`

export const BottomOptions = styled.div`
    width: 100%;
    height: 100%;
    border-top: 2px solid transparent;
    border-color: ${props => props.theme.border.borderColor};
`