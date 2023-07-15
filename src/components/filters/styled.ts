import styled from 'styled-components';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import AddIcon from '../../images/filter/Add.svg';


export const Container = styled.div`
    height: fit-content;
    display: grid;
    padding: 0px 10px;
    gap: 5px;

    .szh-menu__item{
        color: #54657D;
        font-size: 16px;
    }
`

export const Label = styled.label`
    color: ${props => props.theme.fontColor.header.title};
    font-weigth: 600;
`

export const AddFilter = styled(MenuButton)`
    width: fit-content;
    min-width: 32px;
    height: 32px;
    background-image: url(${AddIcon});
    background-size: 60%;

    .szh-menu__item{
        color: #54657D;
        font-size: 16px;
    }
`
