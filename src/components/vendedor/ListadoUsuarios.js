import React,{useEffect,useContext} from 'react';
import VendedorContext from '../../context/vendedor/vendedorContext';
import DataTable from 'react-data-table-component';

// const tablaCampeones = [
//     {id:1, año:"2000", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:2, año:"2001", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:3, año:"2002", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:4, año:"2003", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:5, año:"2004", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:6, año:"2005", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:7, año:"2006", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:8, año:"2007", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:9, año:"2008", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:10, año:"2009", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:11, año:"2010", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:12, año:"2011", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:13, año:"2012", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:14, año:"2013", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:15, año:"2014", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:16, año:"2015", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:17, año:"2016", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:18, año:"2017", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:19, año:"2018", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:20, año:"2019", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:21, año:"2020", campeon: "Real Madrid FC", subCampeon:"Valencia FC"},
//     {id:22, año:"2021", campeon: "Real Madrid FC", subCampeon:"Valencia FC"}

// ];

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
    // {
    //     name: 'Campeon',
    //     selector:  (row, i) => row.campeon,
    //     sortable: true
    // },
    // {
    //     name: 'SubCampeon',
    //     selector:  (row, i) => row.subCampeon,
    //     sortable: true
    // }
];

const paginationOpciones={
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText:'de',
    selectAllRowsItem: true,
    selectAllRowsItemText:'Todos'
}

const conditionalRowStyles = [
    {
		when: row => row.tipo === "2" ,
		style: {
			backgroundColor: 'rgba(63, 195, 128, 0.9)',
			color: 'white',
			'&:hover': {
				cursor: 'pointer',
			},
		},
	}
]

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
        conditionalRowStyles={conditionalRowStyles}
        />
            {/* <h1>Listado de Usuarios</h1> */}
                {/* <table>
                    <thead>
                       <tr>
                            <td>ID</td>
                            <td>Email</td>
                            <td>Usuario Tipo</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            listado_users ? 
                            listado_users.map(user =>(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.tipo === '1'? "Cliente" : "Vendedor"}</td>
                                </tr>
                            ))
                            :
                            null
                        }
                    </tbody>
                </table> */}
        </>
    )
}

export default ListadoUsuarios