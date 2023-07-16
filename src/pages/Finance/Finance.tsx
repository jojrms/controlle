import React from 'react';
import DataTable from 'react-data-table-component';

import { InitialFilter, CreateNewFilter, Filter } from '../../components/filters'
import {
    Background, 
    Container,
    FiltersGrid
} from './styled';

import Axios from 'axios';

import { Modal } from '../../components/modal';

type TransactionsProps = {
    id: number,
    type: string,
    category: string,
    bank: string,
    datatime: string,
    value: number
}

export const Finance = () => {

    const [haveNewFilter, setHaveNewFilter] = React.useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

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
            name: '',
            selector: (row: any) => row.action,
            sortable: true,
        },
    ];

    const [transactions, setTransactions] = React.useState<TransactionsProps[]>([]);

    const searchData = async () => {
        await Axios.get('http://localhost:3000/transactions').then( res => {

            const result = res.data;

            if(haveEntrada && haveSaida) return setTransactions(result);

            if(!haveEntrada && haveSaida) {
                console.log('aaaaa entrou aqui')
                const filteredResult = result.filter( (res: any) => {
                    return res.type === 'saida'
                });
                console.log(transactions, filteredResult, 'filteredResult')

                setTransactions(filteredResult);
            }

            if(haveEntrada && !haveSaida) {
                const filteredResult = result.filter( (res: any) => {
                    return res.type === 'entrada'
                });
                setTransactions(filteredResult);
            }

        }).catch( err => {
            console.log(err, 'error')
        });

    }

    React.useEffect( () => {
        searchData();
    }, [haveEntrada, haveSaida])

    return (
        <Background>

            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>}

            <Container>
                <FiltersGrid>
                    <InitialFilter
                        haveEntrada={haveEntrada} setEntrada={setEntrada}
                        haveSaida={haveSaida} setSaida={setSaida}
                    />
                    {/* <Filter label='Conta' MenuText='teste'/> */}
                    <CreateNewFilter setIsModalOpen={setIsModalOpen}/>    
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