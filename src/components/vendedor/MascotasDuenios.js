import React,{useContext,useEffect} from "react";
import DataTable from 'react-data-table-component';
import ClienteContext from "../../context/cliente/clienteContext";

const MascotasDuenios = () => {
    const clienteContext = useContext(ClienteContext);
    const {obtenerClientesMascotas,duenios_mascotas} = clienteContext;
    useEffect(() => {
        obtenerClientesMascotas()
    }, [])

    const columnas = [
        {
            name: 'ID',
            selector:  (row, i) => row.id,
            sortable: true
        },
        {
            name: 'Mascota Especie',
            selector:  (row, i) => {if(row.especie_id === "1"){return "GATO"}else{ return "PERRO"}},
            sortable: true
        },
        {
            name: 'Mascota',
            selector:  (row, i) => row.nombre,
            sortable: true
        },
        {
            name: 'Fecha de Nacimiento',
            selector:  (row, i) => row.fecha_nacimiento,
            sortable: true
        },
        {
            name: 'Peso',
            selector:  (row, i) => row.peso,
            sortable: true
        },
        {
            name: 'Esterelizado',
            selector:  (row, i) => row.esterelizado,
            sortable: true
        },
        {
            name: 'Dueño',
            selector:  (row, i) => row.usuario_id[0].email,
            sortable: true
        },
    ];
    
    const paginationOpciones={
        rowsPerPageText: 'Filas por pagina',
        rangeSeparatorText:'de',
        selectAllRowsItem: true,
        selectAllRowsItemText:'Todos'
    }
    
    return(
        <>
        <DataTable
        columns={columnas}
        data = {duenios_mascotas}
        title="Tabla de Mascotas y Dueños"
        pagination
        paginationComponentOptions={paginationOpciones}
        fixedHeader
        fixedHeaderScrollHeight='600px'
        />
    </>
    )
}

export default MascotasDuenios