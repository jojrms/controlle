import styled from 'styled-components';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import AddIcon from '../../images/filter/Add.svg';


export const Container = styled.div`
    height: fit-content;
    display: grid;
    padding: 0px 10px;

    .szh-menu__item{
        color: #54657D;
        font-size: 16px;
    }
`

export const Label = styled.label`
    color: ${props => props.theme.fontColor.header.title};
    font-weigth: 600;
    margin-bottom: 5px;
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

export const FilterButton = styled.div`
    user-select: none;
    color: #212529;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.133), 0 0.6px 2px rgba(0, 0, 0, 0.1);
    min-width: 10rem;
    padding: 0.5rem 0;
    background-color: white;
    text-align: center;
    color: #2D415F;
    font-size: 14px;
`

