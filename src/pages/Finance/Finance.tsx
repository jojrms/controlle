import React from 'react';
import DataTable from 'react-data-table-component';

import { InitialFilter, CreateNewFilter, Filter } from '../../components/filters'
import {
    Background, 
    Container,
    FiltersGrid
} from './styled';

import Axios from 'axios';

type TransactionsProps = {
    id: number,
    type: string,
    category: string,
    bank: string,
    datatime: string,
    value: number
}

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

    const [haveNewFilter, setHaveNewFilter] = React.useState<boolean>(false);

    const [haveEntrada, setEntrada] = React.useState<boolean>(true);
    const [haveSaida, setSaida] = React.useState<boolean>(false);

    const columns = [
        {
            name: 'Transação',
            selector: (row: any) => row.id,
            sortable: true,
        },
        {
            name: 'Tipo',
            selector: (row: any) => row.type,
            sortable: true,
        },
        {
            name: 'Categoria',
            selector: (row: any) => row.category,
            sortable: true,
        },
        {
            name: 'Banco',
            selector: (row: any) => row.bank,
            sortable: true,
        },
        {
            name: 'Data',
            selector: (row: any) => row.datatime,
            sortable: true,
        },
        {
            name: 'Valor',
            selector: (row: any) => row.value,
            sortable: true,
        },
        {
            name: 'Ação',
            selector: (row: any) => row.action,
        },
    ];

    const [transactions, setTransactions] = React.useState<TransactionsProps[]>([]);

    const searchData = async () => {
        await Axios.get('http://localhost:3000/transactions').then( res => {

            const result = res.data;
            if(haveEntrada && haveSaida) return setTransactions(result);
            if(!haveEntrada && haveSaida) {
                const filteredResult = result.filter( (res: any) => {
                    return res.type === 'saida'
                });

                console.log(filteredResult, 'dados de saida')
                setTransactions(filteredResult);
            }

            if(haveEntrada && !haveSaida) {
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
        entrada: false,
        saida: false,
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

    const CreateNewFilterFunction = (type: string) => {
        setHaveNewFilter(true);
    }

    React.useEffect( () => {
        searchData();
    }, [haveEntrada, haveSaida])

    return (
        <Background>

            <Container>
                <FiltersGrid>
                    <InitialFilter
                        handleFilterChange={handleFilterChange}
                        state={state}
                    />
                    {haveNewFilter && <p>aaa</p>}
                    {!haveNewFilter &&
                    <CreateNewFilter CreateNewFilterFunction={CreateNewFilterFunction}/>}
                </FiltersGrid>
                
                <button id='buttonDeleteFilters'>Zerar filtros</button>
                <button id='buttonSaveFilters'>Salvar filtros</button>
            </Container>

            <DataTable
            columns={columns}
            data={transactions}
            />
        </Background>
    )
}