import React,{useReducer} from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import clienteAxios from "../../config/axios";
import clienteAxiosResource from "../../config/axiosResource";
import tokenAuth from "../../config/token";
import jwt_decode from "jwt-decode";
import moment from 'moment';

import {

    LOGIN_ERROR,
    LOGIN_EXITOSO,
    CERRAR_SESION,
    REGISTRO_ERROR,
    REGISTRO_EXITOSO,
    OBTENER_USUARIO,
    ES_INVITADO,
    ES_SUPERVISOR,
    ES_OPERADOR

} from '../../types'

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true,
        uri: null,
        user_type: null
    }

    const [state,dispatch] = useReducer(authReducer,initialState);

    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios',datos);
            localStorage.setItem('token', respuesta.data.token);
            dispatch({
                type:REGISTRO_EXITOSO,
                payload:respuesta.data
            });    
            // usuarioAutenticado();        
        } catch (error) {
            console.log(error);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type:REGISTRO_ERROR,
                payload: alerta
            });
        }
    };

    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        const domain = localStorage.getItem('domain');
        if(token){
            tokenAuth(token);
        }
            try {

                const respuesta = await clienteAxiosResource.get(`/get?userName=${username}&domainName=${domain}`);
                dispatch({
                    type: OBTENER_USUARIO,
                    payload: respuesta.data
                });
    
            } catch (error) {
                console.log('error',error.response);
                dispatch({
                    type:LOGIN_ERROR
                });
            }

    }

    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/meucci/auth',datos);
            localStorage.setItem('token',respuesta.data.token)
            localStorage.setItem('username', datos.username);
            localStorage.setItem('domain', datos.domain);
            localStorage.setItem('refresh_token',respuesta.data.refresh_token);

            // const token = jwt_decode(respuesta.data.token);
            // console.log('exp',token.exp,respuesta.data.token,moment.unix(token.exp).format('DD MM YYYY hh:mm:ss'));
            // const tokenExp = moment.unix(token.exp).format('DD MM YYYY hh:mm:ss');
            // var now = moment().format('DD MM YYYY hh:mm:ss');
            // console.log(tokenExp,now,moment(tokenExp).isSameOrAfter(now,'hours'));
            // console.log(now,tokenExp,moment(now).isSameOrAfter(tokenExp,'hours'));
            // console.log(now < tokenExp)
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });

        usuarioAutenticado(); 
        
        } catch (error) {
            console.log('error de session',error.response.data);
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

    const perfil = (card_id) =>{

        const operador = [5,67,101,207,221];
        const supervisor = [6,14,72,93,99,40,161];
    
        let is_operador = operador.find(element => element === card_id)
        let is_supervisor = supervisor.find(element => element === card_id)
    
        if(is_supervisor){
            const set_perfil = {
                uri: '/monitoreos/supervisor',
                user_type: 'supervisor'
            }
            dispatch({
                type:ES_SUPERVISOR,
                payload:set_perfil
            });
        }else {
            if(is_operador){
                const set_perfil = {
                    uri: '/monitoreos/operador',
                    user_type: 'operador'
                }
                dispatch({
                    type: ES_OPERADOR,
                    payload: set_perfil   
                });
            }else{
                const set_perfil = {
                    uri: '/invitado',
                    user_type: 'invitado'
                }
                dispatch({
                    type: ES_INVITADO,
                    payload: set_perfil
                });
            }
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
            user_type: state.user_type,
            registrarUsuario,
            usuarioAutenticado,
            iniciarSesion,
            cerrarSesion,
            perfil
         }}
        >
            {props.children}
        </authContext.Provider>
    );

}

export default AuthState