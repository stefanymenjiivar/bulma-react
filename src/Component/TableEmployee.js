import React, { useCallback, useEffect, useState } from 'react';

const data = [
  {
    id: '5JDXYLWEGzPvp3XPYh9KHz',
    username: 'DR. Dre',
    code: 'OJKCSA-15',
    startDate: 1610320425246,
    dui: '55555-12',
    position: 'Gerente',
  },
  {
    id: '2RUko5vn1oL0A2GbrWcTeB',
    username: 'Kernel',
    code: 'SAJKCksjlsdewu',
    startDate: '2021-01-13T00:00-06:00',
    dui: '999999-2',
    position: 'Gerente GENERAL',
  },
  {
    id: '4LfW5mN77uCo836Dzz9vJZ',
    username: 'Carlos (Kernel)',
    code: 'SAJKCksjlsdewu',
    startDate: 1610297620981,
    dui: '999999-2',
    position: 'Investigador',
  },
];

const TableEmployee = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const deleteEmployee = useCallback(
    (employee) => () => {
      console.log(employee, 'delete');
    },
    []
  );
  const updateEmployee = useCallback(
    (employee) => () => {
      console.log(employee, 'update');
    },
    []
  );

  useEffect(() => {
    setEmployeeList(
      data.map((element) => {
        const { id, username, code, startDate, dui, position } = element;
        return (
          <tr key={id}>
            <td>{username}</td>
            <td>{code}</td>
            <td>{new Date(startDate).toDateString()}</td>
            <td>{dui}</td>
            <td>{position}</td>
            <td>
              <p className='buttons'>
                <button onClick={updateEmployee(element)} className='button is-small is-info is-outlined'>
                  <span className='icon is-small'>
                    <i className='fas fa-user-edit' />
                  </span>
                </button>
                <button onClick={deleteEmployee(element)} className='button is-small is-danger is-outlined'>
                  <span className='icon is-small'>
                    <i className='fas fa-user-times' />
                  </span>
                </button>
              </p>
            </td>
          </tr>
        );
      })
    );
  }, [deleteEmployee, updateEmployee]);

  return (
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
      <tbody>{employeeList}</tbody>
    </table>
  );
};

export default TableEmployee;
