import React from 'react';
import { SelectItem } from '../../components/filters/select';

import { InitialFilter, CreateNewFilter, NewFilter } from '../../components/filters'
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
    type: string | null,
    value: string | null
}
type NewFilterTypeActions = 
| {type: "SET_FILTER_TYPE_FILTER", payload: {type: string, value: string}}


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
            if(state.entrada && state.saida){
                const moreFilter = result.filter( (res: any) => {
                    return newFilterType.type === 'Account' ? res.bank === newFilterType.value : res.pay === newFilterType.value
                })

                console.log(moreFilter, 'dados gerais')
                setTransactions(newFilterType.type ? moreFilter : result);

            }
            if(!state.entrada && state.saida) {
                const filteredResult = result.filter( (res: any) => {
                    return res.type === 'saida'
                });

                const moreFilter = filteredResult.filter( (res: any) => {
                    return newFilterType.type === 'Account' ? res.bank === newFilterType.value : res.pay === newFilterType.value
                })

                console.log(moreFilter, 'dados de saida')
                setTransactions(newFilterType.type ? moreFilter : filteredResult);
            }

            if(state.entrada && !state.saida) {
                const filteredResult = result.filter( (res: any) => {
                    return res.type === 'entrada'
                });

                const moreFilter = filteredResult.filter( (res: any) => {
                    return newFilterType.type === 'Account' ? res.bank === newFilterType.value : res.pay === newFilterType.value
                })

                console.log(moreFilter, 'dados de entrada')
                setTransactions(newFilterType.type ? moreFilter : filteredResult);
            }

            if(!state.entrada && !state.saida) {
                setTransactions([]);
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
        type: null,
        value: null
    }
    function NewFilterReducer(state: NewFilterType, action: NewFilterTypeActions): NewFilterType {
        switch (action.type) {
          case 'SET_FILTER_TYPE_FILTER':
            return { ...state, type: action.payload.type, value: action.payload.value};
          default:
            return state;
        }
    }
    const [newFilterType, setNewFilterType] = React.useReducer(NewFilterReducer, NewFilterState);
    const handleNewFilterTypeChange = (type: string, value: string) => {
        return setNewFilterType({ type: 'SET_FILTER_TYPE_FILTER', payload: { type, value } });
    };
    const returnLabelInNewFilter = () => {
        switch(newFilterType.type){
            case "Account": return "Conta";
            case "Credit_card": return "Cartão";
            case "User": return "Usuário";
            case "Value": return "Valor";
            case "Tags": return "Tags";
            default: return "Filtro"
        }
    }

    React.useEffect( () => {
        searchData();
    }, [state.entrada, state.saida, newFilterType])

    const BanksOptions: SelectItem[] = [
        {value: "Banco do Brasil"},
        {value: "Bradesco"},
        {value: "Santander"},
    ]
    const Card: SelectItem[] = [
        {value: "Cartão de Crédito"},
        {value: "Cartão de Débito"},
    ]

    return (
        <Background>

            <Container>
                <FiltersGrid>
                    <InitialFilter
                        handleFilterChange={handleFilterChange}
                        state={state}
                    />
                    {newFilterType.type &&
                        <NewFilter 
                        items={newFilterType.type === "Account" ? BanksOptions : Card}
                        label={returnLabelInNewFilter()}
                        newFilterType={newFilterType}
                        handleNewFilterTypeChange={handleNewFilterTypeChange}/>
                    }

                    <CreateNewFilter items={newFilterType.type === "Account" ? BanksOptions : Card} handleNewFilterTypeChange={handleNewFilterTypeChange}/>
                </FiltersGrid>
                
                <button id='buttonDeleteFilters'>Zerar filtros</button>
                <button id='buttonSaveFilters'>Salvar filtros</button>
            </Container>

            <Table data={transactions}/>
        </Background>
    )
}