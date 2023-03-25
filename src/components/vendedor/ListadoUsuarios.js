import React,{useEffect,useContext} from 'react';
import VendedorContext from '../../context/vendedor/vendedorContext';
import DataTable from 'react-data-table-component';


const columnas = [
    {
        name: 'ID',
        selector:  (row, i) => row.id,
        sortable: true
    },
    {
        name: 'Correo',
        selector:  (row, i) => row.email,
        sortable: true
    },
    {
        name: 'Usuario tipo',
        selector:  (row, i) => row.tipo,
        sortable: true
    },
];

const paginationOpciones={
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText:'de',
    selectAllRowsItem: true,
    selectAllRowsItemText:'Todos'
}

const ListadoUsuarios = () => {
    const vendedorContext = useContext(VendedorContext);
    const {obtenerListadoUsuarios,listado_users} = vendedorContext;
    useEffect(() => {
        obtenerListadoUsuarios()
    }, [])
    
    return(
        <>
            <DataTable
            columns={columnas}
            data = {listado_users}
            title="Tabla de Vendedores"
            pagination
            paginationComponentOptions={paginationOpciones}
            fixedHeader
            fixedHeaderScrollHeight='600px'
            />
        </>
    )
}

export default ListadoUsuarios