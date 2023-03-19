import {

    LOGIN_ERROR,
    LOGIN_EXITOSO,
    CERRAR_SESION,
    REGISTRO_ERROR,
    REGISTRO_EXITOSO,
    OBTENER_USUARIO,
    ES_VENDEDOR,
    ES_CLIENTE,
    OBTENER_USUARIO_TIPOS

} from '../../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) => {
    //debugger
    switch(action.type){

        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            //  localStorage.setItem('token', action.payload.token)
            // console.log('state-reducer',action.payload.email,action.payload.type,action.payload.id)

            return{
                ...state,
                autenticado:true,
                mensaje:null,
                usuario: action.payload.email, 
                user_tipo: action.payload.type,
                cargando: false,
                user_id: action.payload.id
            }
            case OBTENER_USUARIO: 
            return {
                ...state,
                autenticado: true,
                usuario: JSON.parse(action.payload).email, 
                user_tipo: JSON.parse(action.payload).type,
                cargando: false,
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            return{
                ...state,
                token: null,
                usuario: null,
                autenticado: false,
                mensaje:action.payload,
                cargando: false,
                uri: null,
                user_tipo: null,
                user_id: null
            }
        case ES_VENDEDOR:
        case ES_CLIENTE:
            return{
                ...state,
                uri: action.payload.uri,
                user_tipo: action.payload.user_tipo
            }
        case OBTENER_USUARIO_TIPOS:
            return{
                ...state,
                usuario_tipos : action.payload
            }
        default:
            return state;
    }
}