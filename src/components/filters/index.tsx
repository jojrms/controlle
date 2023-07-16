import React from 'react';
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
    haveEntrada: boolean,
    setEntrada: any,
    haveSaida: boolean,
    setSaida: any
}

export const InitialFilter = ({haveEntrada, setEntrada, haveSaida, setSaida} : InitialFilter) => {

    const returnValues = () => {
        if(haveEntrada && !haveSaida) return "Entrada";
        if(!haveEntrada && haveSaida) return "Saída";
        if(!haveEntrada && !haveSaida) return "Escolha um tipo";
        if(haveEntrada && haveSaida) return "Entrada, Saída";
    }

    return(
        <Container>
            <Label>Tipo: </Label>
            <Menu arrow={false} menuButton={
                <MenuButton style={{width: '10rem'}} className="szh-menu">
                    {returnValues()}</MenuButton>
                } transition>
                <MenuItem 
                checked={haveEntrada} 
                onClick={(e) => setEntrada(e.checked ? true : false)}
                type='checkbox'>Entrada</MenuItem>
                <MenuItem 
                checked={haveSaida} 
                onClick={(e) => setSaida(e.checked ? true : false)}
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
    setIsModalOpen: any
}

export const CreateNewFilter = ({setIsModalOpen} : CreateNewFilterProps) => {
    return(
        <Menu menuButton={
            <AddFilter style={{width: '32px'}} className="szh-menu"></AddFilter>
        } transition>
            <MenuItem onClick={() => setIsModalOpen(true)}>Conta</MenuItem>
            <MenuItem onClick={() => setIsModalOpen(true)}>Cartão de Crédito</MenuItem>
            <MenuItem onClick={() => setIsModalOpen(true)}>Centro de Custo</MenuItem>
            <MenuItem onClick={() => setIsModalOpen(true)}>Usuário</MenuItem>
            <MenuItem onClick={() => setIsModalOpen(true)}>Valor</MenuItem>
            <MenuItem onClick={() => setIsModalOpen(true)}>Tags</MenuItem>
        </Menu>    
    )
}