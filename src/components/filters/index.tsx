import React, {useReducer} from 'react';
import {
    Container,
    Label,
    AddFilter
} from './styled';

import AddIcon from '../../images/filter/Add.svg';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

type InitialFilter = {
    state: any,
    handleFilterChange: any,
}

export const InitialFilter = ({state, handleFilterChange} : InitialFilter) => {

    console.log(state, handleFilterChange, 'bbbbbbbb')

    const returnValues = () => {
        if(state.entrada && !state.saida) return "Entrada";
        if(!state.entrada && state.saida) return "Saída";
        if(!state.entrada && !state.saida) return "Escolha um tipo";
        if(state.entrada && state.saida) return "Entrada, Saída";
    }

    return(
        <Container>
            <Label>Tipo: </Label>
            <Menu arrow={false} menuButton={
                <MenuButton style={{width: '10rem'}} className="szh-menu">
                    {returnValues()}</MenuButton>
                } transition>
                <MenuItem 
                checked={state.entrada} 
                onClick={(e) => handleFilterChange("Entrada", e.checked)}
                type='checkbox'>Entrada</MenuItem>
                <MenuItem 
                checked={state.saida} 
                onClick={(e) => handleFilterChange("Saida", e.checked)}
                type='checkbox'>Saída</MenuItem>
            </Menu>    
        </Container>
       
    )
}

type Filter = {
    label: string;
    MenuText: string;
}

export const Filter = ({label, MenuText} : Filter) => {
    return(
        <Container>
            <Label>{label}</Label>
            <Menu arrow={false} menuButton={
                <MenuButton style={{width: '10rem'}} className="szh-menu">{MenuText}</MenuButton>
                } transition>
                <MenuItem 
                type='checkbox'>Entrada</MenuItem>
                <MenuItem 
                type='checkbox'>Saída</MenuItem>
            </Menu>  
        </Container>
    )
}

type CreateNewFilterProps = {
    handleNewFilterTypeChange: any
}

export const CreateNewFilter = ({handleNewFilterTypeChange} : CreateNewFilterProps) => {
    return(
        <Menu menuButton={
            <AddFilter style={{width: '32px'}} className="szh-menu"></AddFilter>
        } transition>
            <MenuItem onClick={() => handleNewFilterTypeChange('Account')}>Conta</MenuItem>
            <MenuItem onClick={() => handleNewFilterTypeChange('Credit_card')}>Cartão de Crédito</MenuItem>
            <MenuItem onClick={() => handleNewFilterTypeChange('User')}>Usuário</MenuItem>
            <MenuItem onClick={() => handleNewFilterTypeChange('Value')}>Valor</MenuItem>
            <MenuItem onClick={() => handleNewFilterTypeChange('Tags')}>Tags</MenuItem>
        </Menu>    
    )
}