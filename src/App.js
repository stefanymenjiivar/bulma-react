/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useCallback, useState } from 'react';
import Navbar from './Component/Navbar';
import TableDisability from './Component/TableDisability';
import TableEmployee from './Component/TableEmployee';

const menuOptions = ['Create disability', 'Manage employee'];

function App() {
  const [optionSelected, setOptionSelected] = useState(-1);

  const setActiveOption = useCallback((key) => (event) => setOptionSelected(key), []);
  let innerContent = null;
  switch (optionSelected) {
    case 0:
      innerContent = <TableDisability></TableDisability>;
      break;
    case 1:
      innerContent = <TableEmployee></TableEmployee>;
      break;
    default:
      innerContent = null;
  }

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
            <div className='container'>{innerContent}</div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
