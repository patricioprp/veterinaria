import React, {useContext,useEffect} from 'react';
import Sidebar from '../layaout/Sidebar';
import Barra from '../layaout/Barra';
// import FormTarea from '../../../components/supervisor/tareas/FormTarea';
// import ListadoTarea from '../../supervisor/tareas/ListadoTarea';
import AuthContext from '../../context/autenticacion/authContext';

const Home = () => {
    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado()
    }, [])
    
    return ( 
        <div className='contenedor-app'>
            <Sidebar />
            <div className='seccion-principal'>
                <Barra />
                <main>
                    aqui va el datatable de clientes
                {/* <FormTarea />
                    <div className='contenedor-tareas'>
                        <ListadoTarea />
                    </div> */}
                </main>
            </div>
        </div>
     );
}
 
export default Home;