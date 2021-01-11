/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useCallback, useState } from 'react';
import Navbar from './Component/Navbar';

const menuOptions = ['Agregar incapacidad', 'Gestionar empleados'];

function App() {
  const [optionSelected, setOptionSelected] = useState(-1);

  const setActiveOption = useCallback((key) => (event) => setOptionSelected(key), []);

  const menu = menuOptions.map((text, key) => {
    let classMenu = '';
    if (key === optionSelected) {
      classMenu = 'is-active';
    }
    return (
      <li key={key} onClick={setActiveOption(key)}>
        <a className={classMenu}>{text}</a>
      </li>
    );
  });

  return (
    <>
      <Navbar />
      <div className='columns p-5'>
        <div className='column is-2'>
          <aside className='menu'>
            <p className='menu-label'>Gestionar</p>
            <ul className='menu-list'>{menu}</ul>
          </aside>
        </div>
        <div className='column'>
          <section className='section'>
            <div className='container'></div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
