import React from 'react';
import OptionsSliderVendedor from '../vendedor/OptionsSlider';
import OptionsSliderCliente from '../cliente/OptionsSlider';
const Sidebar = () => {
    return ( 
        <aside>
            <h1>Gestion de <span>Pedidos</span></h1>
             {/* <NuevoProyecto /> */}
            <div className='proyectos'>
                <h2> Veterinaria</h2>
                <OptionsSliderCliente />
                <hr />
            </div>
        </aside>
     );
}
 
export default Sidebar;