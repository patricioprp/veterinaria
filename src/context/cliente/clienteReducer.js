import { 
    OBTENER_DUENIOS_MASCOTAS,
    OBTENER_ESPECIES,
    MOSTRAR_FORM_MASCOTA,
    MOSTRAR_MIS_MASCOTAS,
    MOSTRAR_FORM_PEDIDOS,
    MOSTRAR_MIS_PEDIDOS,
    OBTENER_MIS_MASCOTAS,
    OBTENER_MIS_PEDIDOS
 } from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) => {
    switch(action.type){
        case OBTENER_DUENIOS_MASCOTAS:
            return{
                ...state,
               duenios_mascotas:action.payload
            }      
        
        case OBTENER_ESPECIES:
            return{
                ...state,
                especies: action.payload
            }
        case MOSTRAR_FORM_MASCOTA:
            return{
                ...state,
                mostrar_form_mascota: true,
                mostrar_mis_mascotas: false,
                mostrar_mis_pedidos: false
            }
        case MOSTRAR_MIS_MASCOTAS:
            return{
                ...state,
                mostrar_mis_mascotas: true,
                mostrar_form_mascota: false,
                mostrar_mis_pedidos: false
            }
        case OBTENER_MIS_MASCOTAS:
            return{
                ...state,
                mascotas: action.payload
            }

        case MOSTRAR_MIS_PEDIDOS:
            return{
                ...state,
                mostrar_mis_mascotas: false,
                mostrar_form_mascota: false,
                mostrar_mis_pedidos: true
            }
        case OBTENER_MIS_PEDIDOS:
            return{
                ...state,
                pedidos: action.payload
            }
        default:
            return state;
    }    
}