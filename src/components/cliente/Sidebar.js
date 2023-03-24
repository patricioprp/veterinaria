import React from 'react';
import OptionsSliderCliente from '../cliente/OptionsSlider';
import AuthContext from '../../context/autenticacion/authContext';

const Sidebar = () => {

    return ( 
        <aside>
            <h1>Gestion de <span>Pedidos</span></h1>
            <div className='proyectos'>
                <h2> Veterinaria</h2>
                <OptionsSliderCliente />
                <hr />
            </div>
        </aside>
     );
}
 
export default Sidebar;