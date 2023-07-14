import styled from 'styled-components';

import IconUrl from '../../images/menuLeft/Icon.svg'

type OptionProps = {
    selected: boolean;
}

type ThemeButtonProps = {
    darkMode: boolean;
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
    border-radius: ${props => props.theme.border.menuBorderRadius};
    transition: all 0.3s;

    &:hover{
        background-color: ${({selected}) => selected ? props => props.theme.backgroundColor.backgroundIcons : props => props.theme.backgroundColor.optionHover};
    }
`

export const BottomOptions = styled.div`
    width: 100%;
    height: 100%;
    border-top: 2px solid transparent;
    border-color: ${props => props.theme.border.borderColor};
`
export const ThemeButton = styled.span`
    padding: 16px 20px;
    display: grid;
    grid-template-columns: min-content auto min-content;
    align-items: center;
    gap: 10px;
    background-color: ${props => props.theme.border.borderColor};
    border-radius: ${props => props.theme.border.menuBorderRadius};
    cursor: pointer;
`
export const Switch = styled.span<ThemeButtonProps>`
    width: 50px;
    height: 20px;
    display: grid;
    border-radius: 50px;
    background-color: #C3C6CE;
    padding: 3px;

    #check{
        width: 50%;
        height: 100%;
        border-radius: 50px;
        background-color: white;
        transition: all .3s;
        margin-left: ${({darkMode}) => darkMode ? '50%' : '0%'};
    }
`