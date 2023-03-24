import React, {useContext} from "react";
import VendedorContext from "../../context/vendedor/vendedorContext";

const OptionsSlider = () => {
    //Extrart la informacion de vendedor
    const vendedorContext = useContext(VendedorContext);
    const {
        mostrarFormUsuario,
        mostrarFormMascotaDuenio,
        mostrarListadoPedido,
        mostrarListadoUsuario} =  vendedorContext;

    return(
        <ul>
        <li onClick={mostrarFormMascotaDuenio}>Mascotas y Dueños</li>
        <li onClick={mostrarListadoPedido}>Pedidos</li>
        <li onClick ={mostrarFormUsuario}>Nuevo Vendedor</li>
        <li onClick ={mostrarListadoUsuario}>Vendedores</li>
    </ul>
    )
}

export default OptionsSlider