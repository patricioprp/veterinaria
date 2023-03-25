import React,{useReducer} from "react";
import clienteReducer from "./clienteReducer";
import clienteContext from "./clienteContext";
import clienteAxios from "../../config/axios";

import { OBTENER_DUENIOS_MASCOTAS } from "../../types";

const DueniosMascotasState = props => {
    const initialState = {
        duenios_mascotas: []
    }
    const [state,dispatch] = useReducer(clienteReducer,initialState) 

    const obtenerClientesMascotas = async() => {
        const mascotas = await obtenerMascotas();
        const duenios = await obtenerDuenios();
        mascotas.forEach(function(item){
            item.usuario_id = duenios.filter(duenio => duenio.id===item.usuario_id)
          });
          dispatch({
            type: OBTENER_DUENIOS_MASCOTAS,
            payload: mascotas
          })
    }

    const obtenerDuenios = async() =>{
        try{
            const respuesta = await clienteAxios.get('/users');
            const duenios = respuesta.data.filter(usuario => usuario.tipo === '1');
            return duenios
        }catch(error){
            console.log(error)
        }
    }

    const obtenerMascotas = async() => {
        try{
            const respuesta = await clienteAxios.get('/mascotas');
            return respuesta.data
        }catch(error){
            console.log(error)
        }
    }

    return(
        <clienteContext.Provider
        value={{ 
            duenios_mascotas: state.duenios_mascotas,
            obtenerClientesMascotas
         }}>
            {props.children}
        </clienteContext.Provider>
    )
}
export default DueniosMascotasState;