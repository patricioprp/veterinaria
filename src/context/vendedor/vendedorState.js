import React,{useReducer} from "react";
import clienteAxios from "../../config/axios";
import vendedorReducer from "./vendedorReducer";
import vendedorContext from "./vendedorContext";

import {
    MOSTRAR_FORM_USUARIO,
    MOSTRAR_FORM_MASCOTA_DUENIO,
    MOSTRAR_LISTADO_PEDIDO,
    MOSTRAR_LISTADO_USUARIO,
    OBTENER_LISTADO_USUARIOS,
    LOGIN_ERROR
} from "../../types"

const VendedorState = props => {
    const initialState = {
        form_mascota_duenio: null,
        form_usuario: null,
        listado_pedido: true,
        listado_usuario: null,
        listado_users: []
    }

    const [state,dispatch] = useReducer(vendedorReducer,initialState);

    const mostrarFormUsuario = () => {
        dispatch({
            type: MOSTRAR_FORM_USUARIO
        })
    }

    const mostrarFormMascotaDuenio = () => {
        dispatch({
            type: MOSTRAR_FORM_MASCOTA_DUENIO
        })
    }

    const mostrarListadoPedido = () => {
        dispatch({
            type: MOSTRAR_LISTADO_PEDIDO
        })
    }
    const mostrarListadoUsuario = async() => {
        try{
            const respuesta = await clienteAxios.get('/users');
            const user_filtrado = respuesta.data.filter(usuario => usuario.tipo === '2');
            user_filtrado.forEach(function(item){
                item.tipo = "Vendedor"
              });
            dispatch({
                type: MOSTRAR_LISTADO_USUARIO,
                payload: user_filtrado
            })
        }catch(error){
            console.error(error)
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

    const obtenerListadoUsuarios = async () =>{
        try{
            const respuesta = await clienteAxios.get('/users');
            const user_filtrado = respuesta.data.filter(usuario => usuario.tipo === '2');
            user_filtrado.forEach(function(item){
                item.tipo = "Vendedor"
              });
            dispatch({
                type: OBTENER_LISTADO_USUARIOS,
                payload: user_filtrado
            })
        } catch(error){
            console.error(error)
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

    return(
        <vendedorContext.Provider
        value={{
           form_usuario: state.form_usuario,
           form_mascota_duenio: state.form_mascota_duenio,
           listado_pedido: state.listado_pedido,
           listado_usuario: state.listado_usuario,
           listado_users : state.listado_users,
            mostrarFormUsuario,
            mostrarFormMascotaDuenio,
            mostrarListadoPedido,
            mostrarListadoUsuario,
            obtenerListadoUsuarios
        }}
        >
            {props.children}
        </vendedorContext.Provider>
    )
}

export default VendedorState;

