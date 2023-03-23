import React,{useContext,useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';


const Barra = () => {
        //Extraer la informacion de autenticacion
        const authContext = useContext(AuthContext);
        const {usuario,usuarioAutenticado,cerrarSesion,user_tipo } = authContext;
    
        useEffect(() => {
          usuarioAutenticado()
        }, [])

    return ( 
        <header className='app-header'>
            {usuario ? <p className='nombre-usuario'>{usuario} |  <span>{ user_tipo === "1" ? "Cliente" : "Vendedor"}</span></p> :null}
            
            <nav className='nav-principal'>
                <button className='btn btn-blank cerrar-sesion'
                onClick={() => cerrarSesion()}
                >
                    Cerrar Session
                </button>
            </nav>
        </header>
     );
}
 
export default Barra;