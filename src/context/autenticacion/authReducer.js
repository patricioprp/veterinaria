import {

    LOGIN_ERROR,
    LOGIN_EXITOSO,
    CERRAR_SESION,
    REGISTRO_ERROR,
    REGISTRO_EXITOSO,
    OBTENER_USUARIO,
    ES_INVITADO,
    ES_SUPERVISOR,
    ES_OPERADOR

} from '../../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) => {
    switch(action.type){

        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            //  localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                autenticado:true,
                mensaje:null,
                cargando: false
            }
            case OBTENER_USUARIO: 
            return {
                ...state,
                autenticado: true,
                usuario: action.payload, 
                cargando: false
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            return{
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje:action.payload,
                cargando: false,
                uri: null
            }
        case ES_INVITADO:
        case ES_OPERADOR:
        case ES_SUPERVISOR:
            return{
                ...state,
                uri: action.payload.uri,
                user_type: action.payload.user_type
            }
        default:
            return state;
    }
}