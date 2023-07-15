import React from 'react';
import DataTable from 'react-data-table-component';

import { InitialFilter, CreateNewFilter, Filter } from '../../components/filters'
import {
    Background, 
    Container,
    FiltersGrid
} from './styled';

import { Modal } from '../../components/modal';

export const Finance = () => {

    const [haveNewFilter, setHaveNewFilter] = React.useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    const columns = [
        {
            name: 'Title',
            selector: (row: any) => row.title,
        },
        {
            name: 'Year',
            selector: (row: any) => row.year,
        },
    ];
    
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <Background>

            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>}

            <Container>
                <FiltersGrid>
                    <InitialFilter/>
                    {/* <Filter label='Conta' MenuText='teste'/> */}
                    <CreateNewFilter setIsModalOpen={setIsModalOpen}/>    
                </FiltersGrid>
                
                <button id='buttonDeleteFilters'>Zerar filtros</button>
                <button id='buttonSaveFilters'>Salvar filtros</button>
            </Container>

            <DataTable
            columns={columns}
            data={data}
            />
        </Background>
    )
}