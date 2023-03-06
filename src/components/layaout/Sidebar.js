import React from 'react';
import OptionsSlider from '../vendedor/OptionsSlider';
const Sidebar = () => {
    return ( 
        <aside>
            <h1>Gestion de <span>Pedidos</span></h1>
             {/* <NuevoProyecto /> */}
            <div className='proyectos'>
                <h2> Veterinaria</h2>
                <OptionsSlider />
                <hr />
            </div>
        </aside>
     );
}
 
export default Sidebar;