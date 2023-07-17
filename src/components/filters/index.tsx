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
    state: {entrada: boolean, saida: boolean},
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
type NewFilterTypeProps = {
    type: string | null,
    value: string | null
}
type NewFilterProps = {
    label: string;
    items: Array<SelectItem>,
    newFilterType: NewFilterTypeProps,
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
    setNewFilterType: any,
}

export const CreateNewFilter = ({handleNewFilterTypeChange, setNewFilterType} : CreateNewFilterProps) => {

    const BanksOptions: SelectItem[] = [
        {value: "Banco do Brasil"},
        {value: "Bradesco"},
        {value: "Santander"},
    ]
    const Card: SelectItem[] = [
        {value: "Cartão de Crédito"},
        {value: "Cartão de Débito"},
    ]
    const Type: SelectItem[] = [
        {value: "Hotel"},
        {value: "Restaurante"},
        {value: "Posto de Gasolina"},
    ]

    const setNewFilter = (type: string) => {
        handleNewFilterTypeChange(type, type === 'Account' ? BanksOptions[0].value : type === 'Credit_card' ? Card[0].value : Type[0].value)
        setNewFilterType(type, type === 'Account' ? BanksOptions[0].value : Card[0].value)
    }
    return(
        <Menu menuButton={
            <AddFilter style={{width: '32px'}} className="szh-menu"></AddFilter>
        } transition>
            <MenuItem onClick={() => setNewFilter('Account')}>Conta</MenuItem>
            <MenuItem onClick={() => setNewFilter('Credit_card')}>Cartão</MenuItem>
            <MenuItem onClick={() => setNewFilter('Type')}>Tipo</MenuItem>
            <MenuItem onClick={() => setNewFilter('Value')} disabled={true}>Valor</MenuItem>
            <MenuItem onClick={() => setNewFilter('Tag')} disabled={true}>Tags</MenuItem>
        </Menu>    
    )
}