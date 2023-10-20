import React from 'react';

function NavBar() {
  return (
    <div className="bg-gray-900 h-screen w-64 p-4">
      <h1 className="text-3xl font-semibold text-white mb-8">Prueba PPF</h1>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-gray-300 hover:text-white">Vehiculos</a>
        </li>
        {/* Agrega más elementos de menú según tus necesidades */}
      </ul>
    </div>
  );
}

export default NavBar;

