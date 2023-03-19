import {
    MOSTRAR_FORM_PEDIDO,
    MOSTRAR_FORM_USUARIO,
    MOSTRAR_LISTADO_PEDIDO

} from '../../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) => {
        switch(action.type){
            case MOSTRAR_FORM_USUARIO:
                return{
                    ...state,
                    form_usuario : true,
                    form_pedido : false,
                    listado_pedido: false
                }
            case MOSTRAR_FORM_PEDIDO:
                return{
                    ...state,
                    form_usuario : false,
                    form_pedido : true,
                    listado_pedido: false
                }
            case MOSTRAR_LISTADO_PEDIDO:
                return{
                    ...state,
                   form_usuario : false,
                   form_pedido : false,
                   listado_pedido: true
                }      

            default:
                return state;
        }    
}