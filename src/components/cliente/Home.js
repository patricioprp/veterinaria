import React, {useContext,useEffect} from 'react';
import Sidebar from '../cliente/Sidebar';
import Barra from '../layaout/Barra';
import AuthContext from '../../context/autenticacion/authContext';
import ClienteContext from '../../context/cliente/clienteContext';
import NuevaMascota from './NuevaMascota';
import MisMascotas from './MisMascotas';
import ListadoCombo from './ListadoCombo';
import NuevoPedido from './NuevoPedido';


const Home = () => {
    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado } = authContext;

    //Extrar informacion del cliente
    const clienteContext = useContext(ClienteContext);
    const {mostrar_form_mascota,mostrar_mis_mascotas,mostrar_mis_pedidos,mostrar_form_pedidos} = clienteContext;


    useEffect(() => {
      usuarioAutenticado()
    }, [])
    
    return ( 
        <div className='contenedor-app'>
            <Sidebar />
            <div className='seccion-principal'>
                <Barra />
                <main>
                 {mostrar_form_mascota ? <NuevaMascota /> : null}
                 {mostrar_mis_mascotas? <MisMascotas /> : null}
                 {mostrar_mis_pedidos ? <ListadoCombo /> : null}
                 {mostrar_form_pedidos ? <NuevoPedido /> : null}
                </main>
            </div>
        </div>
     );
}
 
export default Home;