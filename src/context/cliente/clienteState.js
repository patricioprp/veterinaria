import React,{useReducer} from "react";
import clienteReducer from "./clienteReducer";
import clienteContext from "./clienteContext";
import clienteAxios from "../../config/axios";
import moment from 'moment';

import { 
    OBTENER_DUENIOS_MASCOTAS,
    OBTENER_ESPECIES,
    MOSTRAR_FORM_MASCOTA,
    MOSTRAR_FORM_PEDIDOS,
    MOSTRAR_MIS_MASCOTAS,
    MOSTRAR_MIS_PEDIDOS,
    OBTENER_MIS_MASCOTAS,
    OBTENER_MIS_PEDIDOS
 } from "../../types";

const ClienteState = props => {
    const initialState = {
        duenios_mascotas: [],
        especies: [],
        mascotas: [],
        pedidos: [],
        mostrar_form_mascota:null,
        mostrar_form_pedidos:null,
        mostrar_mis_mascotas:null,
        mostrar_mis_pedidos:null
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

    const registrarMascota = async (mascota) => {
        try{
            const respuesta = await clienteAxios.post("/mascotas",mascota)
            console.log(respuesta)

        }catch(error){
            console.log(error)
        }
    }

    const obtenerEspecies = async () => {
        try{
            const respuesta = await clienteAxios.get('/especies');
            dispatch({
                type:OBTENER_ESPECIES,
                payload: respuesta.data
            })

        }catch(error){
            console.log(error)
        }
    }

    const mostrarFormMascota = () => {
        dispatch({
            type: MOSTRAR_FORM_MASCOTA
        })
    }

    const mostrarFormPedidos = () => {
        dispatch({
            type: MOSTRAR_FORM_PEDIDOS
        })
    }

    const obtenerMisMascotas = async (user_id) =>{
        try{
        const mascotas = await clienteAxios.get('/mascotas')
        const misMascotas = mascotas.data.filter(mascota => mascota.usuario_id === user_id)
        dispatch({
            type: OBTENER_MIS_MASCOTAS,
            payload: misMascotas
        })
        }catch(error){
            console.log(error)
        }
    }

    const mostrarMisMascotas = () =>{
        dispatch({
            type: MOSTRAR_MIS_MASCOTAS
        })
    }

    const mostrarMisPedidos = () =>{
        dispatch({
            type: MOSTRAR_MIS_PEDIDOS
        })
    }

    const obtenerMisPedidos = async (user_id) => {
        try{
            const respuesta = await clienteAxios.get('/pedidos')
            const mis_pedidos = respuesta.data.filter(pedido => pedido.usuario_id === user_id)
            dispatch({
                type: OBTENER_MIS_PEDIDOS,
                payload: mis_pedidos
            })
        }catch(error){
            console.log(error)
        }
    }

    const registrarPedido = async(mascota) => {
        if(mascota.especie_id === '1'){
            const pedido_seteado = setPedidoGato(mascota)
            try{
                const respuesta = await clienteAxios.post('/pedidos',pedido_seteado)
                console.log(respuesta)
            }catch(error){
                console.log(error)
            }
        }else{
            const pedido_seteado = setPedidoPerro(mascota)
            try{
                const respuesta = await clienteAxios.post('/pedidos',pedido_seteado)
                console.log(respuesta)
            }catch(error){
                console.log(error)
            }
        }
    }


    const setPedidoGato = (gato) => {

        const pedido = {};
        pedido.alimento = gato.peso/2;
        pedido.usuario_id = gato.usuario_id;
        pedido.mascota_id = gato.id;
        pedido.estado_id = "1" ;
        calcularEdad(gato.fecha_nacimiento) > 5 ? pedido.complemento = "SI" : pedido.complemento = "NO";
        gato.esterelizado == "si" ? pedido.complemento_extra = "SI" : pedido.complemento_extra = "NO";
        return pedido
    }

    const setPedidoPerro = (perro) => {
        const pedido = {};
        pedido.alimento = perro.peso * 0.8;
        pedido.usuario_id = perro.usuario_id;
        pedido.mascota_id = perro.id;
        pedido.estado_id = "1" ;
        const edad = calcularEdad(perro.fecha_nacimiento);
        (perro.esterelizado == "SI" && edad > 5) ? pedido.complemento_extra = "SI" : pedido.complemento_extra = "NO";
        pedido.complemento = Math.trunc(edad/3);
        return pedido
    }

    const calcularEdad = (fecha_nacimiento) => {
        var now = moment().format("DD-MM-YYYY");
        var now_parse = moment(now,"DD-MM-YYYY");
        var fecha_nac_parse = moment(fecha_nacimiento, "DD-MM-YYYY");
        return now_parse.diff(fecha_nac_parse, 'years');
    }



    return(
        <clienteContext.Provider
        value={{ 
            duenios_mascotas: state.duenios_mascotas,
            mostrar_form_mascota: state.mostrar_form_mascota,
            mostrar_form_pedidos: state.mostrar_form_pedidos,
            mostrar_mis_mascotas: state.mostrar_mis_mascotas,
            mostrar_mis_pedidos: state.mostrar_mis_pedidos,
            especies: state.especies,
            mascotas: state.mascotas,
            pedidos: state.pedidos,
            obtenerClientesMascotas,
            registrarMascota,
            obtenerEspecies,
            mostrarFormMascota,
            mostrarFormPedidos,
            obtenerMisMascotas,
            mostrarMisMascotas,
            mostrarMisPedidos,
            obtenerMisPedidos,
            registrarPedido
         }}>
            {props.children}
        </clienteContext.Provider>
    )
}
export default ClienteState;