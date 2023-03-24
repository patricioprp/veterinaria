import React, {useContext,useEffect} from 'react';
// import Sidebar from '../layaout/Sidebar';
import Sidebar from '../vendedor/Sidebar'
import Barra from '../layaout/Barra';
import VendedorContext from '../../context/vendedor/vendedorContext';
import NuevoUsuario from '../vendedor/NuevoUsuario';
import MascotasDuenios from './MascotasDuenios';
import ListadoPedido from './ListadoPedido';
import AuthContext from '../../context/autenticacion/authContext';
import ListadoUsuarios from './ListadoUsuarios';

const Home = () => {
    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado } = authContext;
    //Extrart la informacion de vendedor
    const vendedorContext = useContext(VendedorContext);
    const {form_usuario,form_mascota_duenio,listado_pedido,listado_usuario} =  vendedorContext
    useEffect(() => {
       usuarioAutenticado()
    }, [])

    return ( 
        <div className='contenedor-app'>
            <Sidebar />
            <div className='seccion-principal'>
                <Barra />
                <main>
                {form_usuario ? <NuevoUsuario /> : null}
                {form_mascota_duenio ? <MascotasDuenios /> : null}
                {listado_pedido? <ListadoPedido />: null}
                {listado_usuario? <ListadoUsuarios /> : null}
                </main>
            </div>
        </div>
     );
}
 
export default Home;