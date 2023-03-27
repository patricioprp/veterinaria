import React,{useState,useEffect,useContext} from 'react';
import ClienteContext from '../../context/cliente/clienteContext';
import DataTable from 'react-data-table-component';

const columnas = [
    {
        name: 'ID',
        selector:  (row, i) => row.id,
        sortable: true
    },
    {
        name: 'Nombre',
        selector:  (row, i) => row.nombre,
        sortable: true
    },
    {
        name: 'Especie',
        selector:  (row, i) => {if(row.especie_id === "1"){return "GATO"}else{ return "PERRO"}},
        sortable: true
    },
    {
        name: 'Fecha de nacimiento',
        selector:  (row, i) => row.fecha_nacimiento,
        sortable: true
    },
    {
        name: 'Peso[Kg]',
        selector:  (row, i) => row.peso,
        sortable: true
    },
    {
        name: 'Esterelizado',
        selector:  (row, i) => row.esterelizado,
        sortable: true
    },
];

const paginationOpciones={
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText:'de',
    selectAllRowsItem: true,
    selectAllRowsItemText:'Todos'
}

const MisMascotas = () => {

    const clienteContext = useContext(ClienteContext)
    const {obtenerMisMascotas,mascotas} = clienteContext;

    useEffect(() => {
        obtenerMisMascotas(JSON.parse(localStorage.getItem('user')).id)
    }, [])
    
    return(
        <>
            <DataTable
            columns={columnas}
            data = {mascotas}
            title="Tabla de Mascotas"
            pagination
            paginationComponentOptions={paginationOpciones}
            fixedHeader
            fixedHeaderScrollHeight='600px'
            />
        </>
    )
}
export default MisMascotas