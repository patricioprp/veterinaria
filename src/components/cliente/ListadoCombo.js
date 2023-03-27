import React,{useState,useEffect,useContext} from 'react'
import ClienteContext from '../../context/cliente/clienteContext';
import DataTable from 'react-data-table-component';

const columnas = [
    {
        name: 'ID',
        selector:  (row, i) => row.id,
        sortable: true
    },
    {
        name: 'Alimento[Kg]',
        selector:  (row, i) => row.alimento,
        sortable: true
    },
    // {
    //     name: 'Especie',
    //     selector:  (row, i) => {if(row.especie_id === "1"){return "GATO"}else{ return "PERRO"}},
    //     sortable: true
    // },
    {
        name: 'Complemento',
        selector:  (row, i) => row.complemento,
        sortable: true
    },
    {
        name: 'Completo Extra',
        selector:  (row, i) => row.complemento_extra,
        sortable: true
    },
    {
        name: 'Estado',
        selector:  (row, i) => {if(row.estado_id === "1"){return "PENDIENTE"}else{return "DESPACHADO"}},
        sortable: true
    },
];

const paginationOpciones={
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText:'de',
    selectAllRowsItem: true,
    selectAllRowsItemText:'Todos'
}

const conditionalRowStyles = [
    {
		when: row => row.estado_id === "1" ,
		style: {
			backgroundColor: 'rgba(63, 195, 128, 0.9)',
			color: 'white',
			'&:hover': {
				cursor: 'pointer',
			},
		},
	}
]


const ListadoCombo = () => {

    const clienteContext = useContext(ClienteContext);
    const{obtenerMisPedidos,pedidos} = clienteContext;

    useEffect(() => {
     obtenerMisPedidos(JSON.parse(localStorage.getItem('user')).id)
    }, [])
    
    return(
        <>
            <DataTable
            columns={columnas}
            data = {pedidos}
            title="Tabla de Combos Pedidos"
            pagination
            paginationComponentOptions={paginationOpciones}
            fixedHeader
            fixedHeaderScrollHeight='600px'
            conditionalRowStyles={conditionalRowStyles}
            />
        </>
    )
}

export default ListadoCombo