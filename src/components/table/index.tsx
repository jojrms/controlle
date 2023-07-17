import DataTable from 'react-data-table-component';

type DataProps = {
    id: number,
    type: string,
    category: string,
    bank: string,
    datatime: string,
    value: number
}

type TableProps = {
    data: Array<DataProps>
}

export const Table = ({data} : TableProps) => {

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
            name: 'Forma de Pagamento',
            selector: (row: any) => row.pay,
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
    ];

    return(
        <DataTable
            columns={columns}
            data={data}
        />
    )
}