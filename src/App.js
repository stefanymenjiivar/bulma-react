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
            <div className='container'>
              <table className='table is-fullwidth is-hoverable'>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Code</th>
                    <th>Start Date</th>
                    <th>DUI</th>
                    <th>Position</th>
                    <th>Config</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>19</th>
                    <td>38</td>
                    <td>9</td>
                    <td>7</td>
                    <td>22</td>
                    <td>
                      <p className='buttons'>
                        <button className='button is-small is-info is-outlined'>
                          <span className='icon is-small'>
                            <i className='fas fa-user-edit' />
                          </span>
                        </button>
                        <button className='button is-small is-danger is-outlined'>
                          <span className='icon is-small'>
                            <i className='fas fa-user-times' />
                          </span>
                        </button>
                      </p>
                    </td>
                  </tr>
                  <tr />
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
