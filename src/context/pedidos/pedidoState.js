import React,{useReducer} from "react";
import clienteAxios from "../../config/axios";
import pedidoReducer from "./pedidoReducer";
import pedidoContext from "./pedidoContext";

import { 
    OBTENER_PEDIDOS
 } from "../../types";

const PedidoState = props => {
    const initialState = {
        pedidos: []
    }

    const [state,dispatch] = useReducer(pedidoReducer,initialState)

    const obtenerPedidos = async() => {
        try{
            const respuesta = await clienteAxios.get('/pedidos');
            dispatch({
                type: OBTENER_PEDIDOS,
                payload: respuesta.data
            })
            
        }catch(error){
            console.log(error)
        }
    }

    const cambiar_estado_pedido = async pedido => {
        try{
            if(pedido.estado_id === "1"){
                pedido.estado_id = "2"
            }else{
                pedido.estado_id = "1"
            }
            await clienteAxios.put(`/pedidos/${pedido.id}`,pedido)
            obtenerPedidos();

        }catch(error){

        }
    }

    return(
        <pedidoContext.Provider
        value={{ 
            pedidos:state.pedidos,
            obtenerPedidos,
            cambiar_estado_pedido
         }}>
            {props.children}
        </pedidoContext.Provider>
    )
}

export default PedidoState;