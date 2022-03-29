import React from 'react'

export const Menu = () => {

  const op3 = document.getElementById('op3');
// Este sería el menú
  const menu = document.querySelector('.menu');

  op3.addEventListener('click', showMenu);
// Este evento sería para cuando ya no se esté encima del menú, no es precisamente con cancelIdleCallback, pero podría ServiceWorkerRegistration.
  menu.addEventListener('mouseleave', hideMenu);


  function showMenu() {
    menu.classList.add('menu-visible');
    menu.classList.remove('menu-hidden');
  }

  function hideMenu() {
    if (menu.classList.contains('menu-visible')) {
      menu.classList.add('menu-hidden');
      menu.classList.remove('menu-visible');
    }  
  }

  return (
    <div>
      <h1>Menú Desplegable</h1>
      <hr />
      <table>
        <tr>
          <td>
            <button>Opción 1</button>
          </td>      
          <td>
            <button>Opción 2</button>
          </td>      
          <td>
            <button id="op3">Opción 3</button>
          </td>      
        </tr>
      </table>
      <div className="menu menu-hidden">
        <ul>
          <li><a href="#">Opción 3.1</a></li>
          <li><a href="#">Opción 3.2</a></li>
          <li><a href="#">Opción 3.3</a></li>
        </ul>
      </div>
   </div>
  )
}
