import React, { useState, useContext, useEffect } from 'react'
import PedidoContext from '../../context/pedidos/pedidoContext'
import DataTable from 'react-data-table-component';




const ListadoPedido = () => {
    const pedidoContext = useContext(PedidoContext);
    const { obtenerPedidos,pedidos,cambiar_estado_pedido} = pedidoContext;
    const columnas = [
        {
            name: 'ID',
            selector:  (row, i) => row.id,
            sortable: true
        },
        {
            name: 'Alimento',
            selector:  (row, i) => row.alimento,
            sortable: true
        },
        {
            name: 'Complemento',
            selector:  (row, i) => row.complemento,
            sortable: true
        },
        {
            name: 'Complemento Extra',
            selector:  (row, i) => row.complemento_extra,
            sortable: true
        },
        {
            name: 'Mascota Especie',
            selector:  (row, i) => {if(row.mascota_id === "1"){return "GATO"}else{ return "PERRO"}},
            sortable: true
        },
        {
            name: 'Estado',
            selector:  (row, i) => {if(row.estado_id === "1"){return "PENDIENTE"}else{return "DESPACHADO"}},
            sortable: true
        },  
        {
            name: 'Accion',
            button: true,
            cell: (row) => <button onClick={() => cambiar_estado_pedido(row)} style={{
                color: "#fff", 
                padding: ".375rem .75rem",
                borderRadius: ".25rem",
                backgroundColor: "#007bff"
            }}>Cambiar Estado</button>,
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
    useEffect(() => {
        obtenerPedidos()
    }, [])

    return(
        <>
            <DataTable
                columns={columnas}
                data = {pedidos}
                title="Tabla de Pedidos"
                pagination
                paginationComponentOptions={paginationOpciones}
                fixedHeader
                fixedHeaderScrollHeight='600px'
                conditionalRowStyles={conditionalRowStyles}
            />
        </>
    )
}

export default ListadoPedido