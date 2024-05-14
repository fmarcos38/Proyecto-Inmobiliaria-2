import { propiedades } from "../../Helps/propiedades";
import { 
    DETALLE_PORP, FILTRA_OPERACION_TIPO,  GET_PROPS, IS_OPEN_MODAL_PICTURE, 
    LOADING, 
    MUESTRA_DESTACADAS, RESET_DETALLE,   
} from "./ActionsType";


//trae props
export const getProps = (props = propiedades) => {
    return function(dispatch){
        dispatch({type: LOADING});//loading        
        dispatch({type: GET_PROPS, payload: props});    
    }
};

//filtra por operacion y tipo
export const filtraOperacionTipo = (obj) => {
    return function(dispatch){
        dispatch({type: FILTRA_OPERACION_TIPO, payload: obj});
    }
};

//muestra props destacadas
export const muestraDestacadas = (obj) => {
    return function(dispatch){
        dispatch({type:MUESTRA_DESTACADAS, payload:obj});
    }
};

//detalle prop
export const detalleProp = (id) => {
    return function(dispatch){
        dispatch({type: DETALLE_PORP, payload: id});
    }
};

//reset detalle
export const resetDetalle = () => {
    return function(dispatch) {
        dispatch({ type: RESET_DETALLE });
    }
};

//cierra Modal imagen prop
export const isOpenModalPicture = () => {
    return function(dispatch){
        dispatch({type: IS_OPEN_MODAL_PICTURE});
    }
};