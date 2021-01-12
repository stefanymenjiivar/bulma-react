import React, { useCallback, useEffect, useState } from 'react';
import ModalDisability from './ModalDisability';
import TableEmployee from './TableEmployee';

const data = [
  {
    code: '1PZWyMCHgY5PejxMbGAmJ4',
    dateAdmission: 1610312739091,
    medicalUnit: 'General',
    doctor: 'Good Doctor',
    initiate: 1609564530000,
    end: 1609912800000,
    employee: {
      username: 'Kernel',
      code: 'SAJKCksjlsdewu',
      startDate: '2021-01-13T00:00-06:00',
      dui: '999999-2',
      position: 'Gerente GENERAL'
    }
  },
  {
    code: '4B9G1oZeZBUUZgUltlPlUj',
    dateAdmission: 1610315341046,
    medicalUnit: 'Especialidad',
    doctor: 'The Good Doctor',
    initiate: 1609564530000,
    end: 1609912800000,
    employee: {
      username: 'Kernel',
      code: 'SAJKCksjlsdewu',
      startDate: '2021-01-13T00:00-06:00',
      dui: '999999-2',
      position: 'Gerente GENERAL'
    }
  },
  {
    code: '3ZWfHjmKVJfSaPSxDagYev',
    dateAdmission: 1610313586893,
    medicalUnit: 'General',
    doctor: 'Good Doctor',
    initiate: 1609564530000,
    end: 1609912800000,
    employee: {
      username: 'Carlos (Kernel)',
      code: 'SAJKCksjlsdewu',
      startDate: 1610297620981,
      dui: '999999-2',
      position: 'Investigador'
    }
  },
  {
    code: '6OZhZbs7hsSNfrK04Bbdj7',
    dateAdmission: 1610312669264,
    medicalUnit: 'UCB',
    doctor: 'Good Doctor',
    initiate: 1609564530000,
    end: 1609912800000,
    employee: {
      username: 'DR. Dre',
      code: 'OJKCSA-15',
      startDate: 1610320425246,
      dui: '55555-12',
      position: 'Gerente'
    }
  }
];

const TableDisability = () => {
  const [disabilityList, setDisabilityList] = useState([]);
  const [componentDisability, setComponentDisability] = useState(null);

  const deleteDisability = useCallback(
    (disability) => () => {
      console.log(disability, 'delete');
    },
    []
  );

  const updateDisability = useCallback(
    (disability) => () => {
      setComponentDisability(
        <ModalDisability isUpdate={true} disability={disability} setComponentDisability={setComponentDisability} />
      );
    },
    []
  );

  const createDisability = useCallback(() => {
    setComponentDisability(
      <ModalDisability
        isUpdate={false}
        disability={{ username: '', code: '', dateAdmission: Date.now(), medicalUnit: '', doctor: '',initiate: Date.now(), end: Date.now() }}
        setComponentDisability={setComponentDisability}
      />
    );
  }, []);

  useEffect(() => {
    setDisabilityList(
      data.map((element) => {
        const {  code, dateAdmission, medicalUnit, doctor, initiate, end } = element;
        return (
          <tr key={code}>
            <td>{code}</td>
            <td>{new Date(dateAdmission).toLocaleString()}</td>
            <td>{medicalUnit}</td>
            <td>{doctor}</td>
            <td>{new Date(initiate).toLocaleString()}</td>
            <td>{new Date(end).toLocaleString()}</td>
            <td>
              <p className='buttons'>
                <button onClick={updateDisability(element)} className='button is-small is-info is-outlined'>
                  <span className='icon is-small'>
                    <i className='fas fa-user-edit' />
                  </span>
                </button>
                <button onClick={deleteDisability(element)} className='button is-small is-danger is-outlined'>
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
  }, [deleteDisability, updateDisability]);

  return (
    <>
      <div className='buttons'>
        <button onClick={createDisability} className='button is-link'>
          Create Disability
        </button>
      </div>

      <table className='table is-fullwidth is-hoverable'>
        <thead>
          <tr>
            <th>Code</th>
            <th>Date Admission</th>
            <th>Doctor</th>
            <th>Initiate</th>
            <th>End</th>
            <th>Config</th>
          </tr>
        </thead>
        <tbody>{disabilityList}</tbody>
      </table>
      {componentDisability}
    </>
  );
};

export default TableDisability;
