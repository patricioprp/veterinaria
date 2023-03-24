import React,{useReducer} from "react";
import clienteAxios from "../../config/axios";
import pedidoReducer from "./pedidoReducer";
import pedidoContext from "./pedidoContext";

import { OBTENER_PEDIDOS } from "../../types";

const PedidoState = props => {
    const initialState = {
        pedidos: []
    }

    const [state,dispatch] = useReducer(pedidoReducer,initialState)

    const obtenerPedidos = async() => {
        try{
            const respuesta = await clienteAxios.get('/pedidos');
            console.log(respuesta)
        }catch(error){

        }


        dispatch({
            type: OBTENER_PEDIDOS
        })
    }

    return(
        <pedidoContext.Provider
        value={{ 
            pedidos:state.pedidos,
            obtenerPedidos
         }}>
            {props.children}
        </pedidoContext.Provider>
    )
}

export default PedidoState;