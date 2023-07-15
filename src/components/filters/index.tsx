import React from 'react';
import {
    Container,
    Label
} from './styled';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export const InitialFilter = () => {

    const [haveEntrada, setEntrada] = React.useState<boolean>(true);
    const [haveSaida, setSaida] = React.useState<boolean>(false);

    const returnValues = () => {
        if(haveEntrada && !haveSaida) return "Entrada";
        if(!haveEntrada && haveSaida) return "Saída";
        if(!haveEntrada && !haveSaida) return "Escolha um tipo";
        if(haveEntrada && haveSaida) return "Entrada, Saída";
    }

    return(
        <React.Fragment>
            <Label>Tipo: </Label>
            <Menu menuButton={<MenuButton>{returnValues()}</MenuButton>} transition>
                <MenuItem 
                checked={haveEntrada} 
                onClick={(e) => setEntrada(e.checked ? true : false)}
                type='checkbox'>Entrada</MenuItem>
                <MenuItem 
                checked={haveSaida} 
                onClick={(e) => setSaida(e.checked ? true : false)}
                type='checkbox'>Saída</MenuItem>
            </Menu>    
        </React.Fragment>
       
    )
}

export const CreateNewFilter = () => {
    return(
        <React.Fragment>
            <Label>Tipo: </Label>
            <Menu menuButton={<MenuButton>Menu</MenuButton>} transition>
                <MenuItem>Conta</MenuItem>
                <MenuItem>Cartão de Crédito</MenuItem>
                <MenuItem>Centro de Custo</MenuItem>
                <MenuItem>Usuário</MenuItem>
                <MenuItem>Valor</MenuItem>
                <MenuItem>Tags</MenuItem>
            </Menu>    
        </React.Fragment>
       
    )
}