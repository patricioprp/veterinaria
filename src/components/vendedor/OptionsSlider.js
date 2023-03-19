import React, {useContext} from "react";
import VendedorContext from "../../context/vendedor/vendedorContext";

const OptionsSlider = () => {
    //Extrart la informacion de vendedor
    const vendedorContext = useContext(VendedorContext);
    const {mostrarFormUsuario,mostrarFormPedido,mostrarListadoPedido} =  vendedorContext
    return(
        <ul>
             {/* onClick = { */}
        <li onClick={mostrarFormPedido}>Nuevo Pedido</li>
        <li onClick={mostrarListadoPedido}>Listado de Pedidos</li>
        <li onClick ={mostrarFormUsuario}>Nuevo Usuario</li>
    </ul>
    )
}

export default OptionsSlider