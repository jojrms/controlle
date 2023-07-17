import React, {useReducer} from 'react';
import {
    Container,
    Label,
    AddFilter
} from './styled';

import {useSelect} from 'downshift'
import Select, { SelectItem } from './select/index';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

type InitialFilter = {
    state: any,
    handleFilterChange: any,
}

export const InitialFilter = ({state, handleFilterChange} : InitialFilter) => {

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

type NewFilterAccountProps = {
    account: string,
}
type NewFilterProps = {
    label: string;
    items: Array<SelectItem>,
    newFilterType: any,
    handleNewFilterTypeChange: any,
}

export const NewFilter = ({label, items, newFilterType, handleNewFilterTypeChange} : NewFilterProps) => {


    const [selectedItem, setSelectedItem] = React.useState<SelectItem | null | undefined>(null);

    const handleSelectItem = (selectedItem: SelectItem | null | undefined) => {
        setSelectedItem(selectedItem);
    };

    return(
        <Container>
            <Select newFilterType={newFilterType} handleNewFilterTypeChange={handleNewFilterTypeChange} label={label} items={items} onSelectItem={handleSelectItem}/>
        </Container>
    )
}

type CreateNewFilterProps = {
    handleNewFilterTypeChange: any,
    items: Array<SelectItem>,
}

export const CreateNewFilter = ({handleNewFilterTypeChange, items} : CreateNewFilterProps) => {
    return(
        <Menu menuButton={
            <AddFilter style={{width: '32px'}} className="szh-menu"></AddFilter>
        } transition>
            <MenuItem onClick={() => handleNewFilterTypeChange('Account', items[0].value)}>Conta</MenuItem>
            <MenuItem onClick={() => handleNewFilterTypeChange('Credit_card', items[0].value)}>Cartão</MenuItem>
            <MenuItem onClick={() => handleNewFilterTypeChange('User', items[0].value)} disabled={true}>Usuário</MenuItem>
            <MenuItem onClick={() => handleNewFilterTypeChange('Value', items[0].value)} disabled={true}>Valor</MenuItem>
            <MenuItem onClick={() => handleNewFilterTypeChange('Tags', items[0].value)} disabled={true}>Tags</MenuItem>
        </Menu>    
    )
}