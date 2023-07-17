import React from 'react';

import { InitialFilter, CreateNewFilter, Filter } from '../../components/filters'
import {
    Background, 
    Container,
    FiltersGrid
} from './styled';

import Axios from 'axios';
import { Table } from '../../components/table';

type TransactionsProps = {
    id: number,
    type: string,
    category: string,
    bank: string,
    datatime: string,
    value: number
}

type NewFilterType = {
    type: "Account" | "Credit_card" | "User" | "Value" | "Tags" | ""
}
type NewFilterTypeActions = 
| {type: "SET_FILTER_TYPE_ACCOUNT", payload: "Account" | "Credit_card" | "User" | "Value" | "Tags" | ""}


type FilterState = {
    entrada: boolean,
    saida: boolean,
};
type FilterAction = 
    | { 
        type: 'SET_DATA_TYPE_FILTER_ENTRADA',
        payload_entrada: boolean, 
    }
    | { 
        type: 'SET_DATA_TYPE_FILTER_SAIDA',
        payload_saida: boolean, 
    }


export const Finance = () => {

    const [transactions, setTransactions] = React.useState<TransactionsProps[]>([]);

    const searchData = async () => {
        await Axios.get('http://localhost:3000/transactions').then( res => {

            const result = res.data;
            if(state.entrada && state.saida) return setTransactions(result);
            if(!state.entrada && state.saida) {
                const filteredResult = result.filter( (res: any) => {
                    return res.type === 'saida'
                });

                console.log(filteredResult, 'dados de saida')
                setTransactions(filteredResult);
            }

            if(state.entrada && !state.saida) {
                const filteredResult = result.filter( (res: any) => {
                    return res.type === 'entrada'
                });
                console.log(filteredResult, 'dados de entrada')
                setTransactions(filteredResult);
            }

        }).catch( err => {
            console.log(err, 'error')
        });

    }

    const initialState: FilterState = {
        entrada: true,
        saida: true,
    };
    function filterReducer(state: FilterState, action: FilterAction): FilterState {
        switch (action.type) {
          case 'SET_DATA_TYPE_FILTER_ENTRADA':
            return { ...state, entrada: action.payload_entrada};
        case 'SET_DATA_TYPE_FILTER_SAIDA':
            return { ...state, saida: action.payload_saida};
          default:
            return state;
        }
    }
    const handleFilterChange = (type: string, value: boolean) => {
        switch(type){
            case "Entrada": return dispatch({ type: 'SET_DATA_TYPE_FILTER_ENTRADA', payload_entrada: value});
            case "Saida": return dispatch({ type: 'SET_DATA_TYPE_FILTER_SAIDA', payload_saida: value});
        }
    };
    const [state, dispatch] = React.useReducer(filterReducer, initialState);


    // DEFINIÇÃO DO OUTRO FILTRO
    const NewFilterState: NewFilterType = {
        type: ""
    }
    function NewFilterReducer(state: NewFilterType, action: NewFilterTypeActions): NewFilterType {
        switch (action.payload) {
          case 'Account':
            return { ...state, type: "Account"};
        case 'Credit_card':
            return { ...state, type: "Credit_card"};
        case 'User':
            return { ...state, type: "User"};
        case 'Value':
            return { ...state, type: "Value"};
        case 'Tags':
            return { ...state, type: "Tags"};
          default:
            return state;
        }
    }
    const [newFilterType, setNewFilterType] = React.useReducer(NewFilterReducer, NewFilterState);
    const handleNewFilterTypeChange = (value: string) => {
        switch(value){
            case "Account": return setNewFilterType({ type: 'SET_FILTER_TYPE_ACCOUNT', payload: "Account"});
            case "Credit_card": return setNewFilterType({ type: 'SET_FILTER_TYPE_ACCOUNT', payload: "Credit_card"});
            case "User": return setNewFilterType({ type: 'SET_FILTER_TYPE_ACCOUNT', payload: "User"});
            case "Value": return setNewFilterType({ type: 'SET_FILTER_TYPE_ACCOUNT', payload: "Value"});
            case "Tags": return setNewFilterType({ type: 'SET_FILTER_TYPE_ACCOUNT', payload: "Tags"});
        }
        
    };
    

    React.useEffect( () => {
        searchData();
    }, [state.entrada, state.saida])

    return (
        <Background>

            <Container>
                <FiltersGrid>
                    <InitialFilter
                        handleFilterChange={handleFilterChange}
                        state={state}
                    />
                    <CreateNewFilter handleNewFilterTypeChange={handleNewFilterTypeChange}/>
                </FiltersGrid>
                
                <button id='buttonDeleteFilters'>Zerar filtros</button>
                <button id='buttonSaveFilters'>Salvar filtros</button>
            </Container>

            <Table data={transactions}/>
        </Background>
    )
}