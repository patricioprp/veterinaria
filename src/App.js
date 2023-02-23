import React from 'react'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from './components/auth/Login';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import RutaPrivada from './components/rutas/RutaPrivada';
import HomeCliente from './components/cliente/Home';
import HomeVendedor from './components/vendedor/Home';

function App() {
  return (
      <AlertaState>
        <AuthState>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Login />} />

              { 
                  <Route exact path="/monitoreos/vendedor" element={
                      <RutaPrivada>
                        <HomeVendedor />
                      </RutaPrivada>
                    } >
                    </Route>
              }
              { <Route exact path="/monitoreos/cliente" element={
                <RutaPrivada>
                  <HomeCliente />
                </RutaPrivada>
              } /> }
            </Routes>
          </BrowserRouter>
        </AuthState>
       </AlertaState>
  );
}

export default App;
