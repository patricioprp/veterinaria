import React,{useReducer} from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import clienteAxios from "../../config/axios";


import {

    LOGIN_ERROR,
    LOGIN_EXITOSO,
    CERRAR_SESION,
    REGISTRO_ERROR,
    REGISTRO_EXITOSO,
    OBTENER_USUARIO,
    ES_CLIENTE,
    ES_VENDEDOR

} from '../../types'

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: false,
        usuario: null,
        mensaje: null,
        cargando: true,
        uri: null,
        user_tipo: null,
        user_id: null,
        // usuario_tipos: null
    }

    const [state,dispatch] = useReducer(authReducer,initialState);

     

    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/register',datos);
            console.log(respuesta)
            dispatch({
                type:REGISTRO_EXITOSO,
                payload:respuesta.data
            });          
        } catch (error) {
            console.log(error);
            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error'
            }
            dispatch({
                type:REGISTRO_ERROR,
                payload: alerta
            });
        }
    };

    const usuarioAutenticado = async () => {
        const user = localStorage.getItem('user');
        dispatch({
            type: OBTENER_USUARIO,
            payload: user
        });
    }

    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/login',datos);
            localStorage.setItem('token',respuesta.data.accessToken)
            localStorage.setItem('user', JSON.stringify(respuesta.data.user));
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data.user
            });

           usuarioAutenticado(); 
        
        } catch (error) {
            console.log('error de session',error);
            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error'
            }
            dispatch({
                type:LOGIN_ERROR,
                payload: alerta
            }); 
        }
    }

    const perfil = (tipo_id) =>{

        if(tipo_id === "1"){
            const set_perfil = {
                uri: '/home/cliente',
                user_tipo: 1
            }
            dispatch({
                type:ES_CLIENTE,
                payload:set_perfil
            });
        }
        if(tipo_id === "2") {
            const set_perfil = {
                uri: '/home/vendedor',
                user_tipo: 2
            }
            dispatch({
                type: ES_VENDEDOR,
                payload: set_perfil
            });
         }
    }

    const cerrarSesion = () => {
        
        dispatch({
            type: CERRAR_SESION
        });
    }
 
    return(
        <authContext.Provider
        value={{ 
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            cargando: state.cargando,
            uri: state.uri,
            user_tipo: state.user_tipo,
            usuario_tipos: state.usuario_tipos,
            registrarUsuario,
            usuarioAutenticado,
            iniciarSesion,
            cerrarSesion,
            perfil,
            // obtenerUsuarioTipos
         }}
        >
            {props.children}
        </authContext.Provider>
    );

}

export default AuthState