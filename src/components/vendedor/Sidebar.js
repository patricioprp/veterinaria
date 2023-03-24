import React from 'react';
import OptionsSliderVendedor from './OptionsSlider';

const Sidebar = () => {

    return ( 
        <aside>
            <h1>Gestion de <span>Pedidos</span></h1>
            <div className='proyectos'>
                <h2> Veterinaria</h2>
                <OptionsSliderVendedor />
                <hr />
            </div>
        </aside>
     );
}
 
export default Sidebar;