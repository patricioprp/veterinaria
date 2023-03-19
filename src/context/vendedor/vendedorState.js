import React,{useReducer} from "react";
import vendedorReducer from "./vendedorReducer";
import vendedorContext from "./vendedorContext";

import {
    MOSTRAR_FORM_USUARIO,
    MOSTRAR_FORM_PEDIDO,
    MOSTRAR_LISTADO_PEDIDO
} from "../../types"

const VendedorState = props => {
    const initialState = {
        form_pedido: null,
        form_usuario: null,
        listado_pedido: null
    }

    const [state,dispatch] = useReducer(vendedorReducer,initialState);

    const mostrarFormUsuario = () => {
        dispatch({
            type: MOSTRAR_FORM_USUARIO
        })
    }

    const mostrarFormPedido = () => {
        dispatch({
            type: MOSTRAR_FORM_PEDIDO
        })
    }

    const mostrarListadoPedido = () => {
        dispatch({
            type: MOSTRAR_LISTADO_PEDIDO
        })
    }

    return(
        <vendedorContext.Provider
        value={{
           form_usuario: state.form_usuario,
           form_pedido: state.form_pedido,
           listado_pedido: state.listado_pedido,
            mostrarFormUsuario,
            mostrarFormPedido,
            mostrarListadoPedido
        }}
        >
            {props.children}
        </vendedorContext.Provider>
    )
}

export default VendedorState;

