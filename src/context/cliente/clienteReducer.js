import { OBTENER_DUENIOS_MASCOTAS } from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) => {
    switch(action.type){
        case OBTENER_DUENIOS_MASCOTAS:
            return{
                ...state,
               duenios_mascotas:action.payload
            }      

        default:
            return state;
    }    
}