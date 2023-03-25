import { OBTENER_PEDIDOS } from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) => {
    switch(action.type){
        case OBTENER_PEDIDOS:
            return{
                ...state,
               pedidos:action.payload
            }      

        default:
            return state;
    }    
}