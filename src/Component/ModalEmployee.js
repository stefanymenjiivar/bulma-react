import React, { useCallback, useState } from 'react';
import CatDog from '../ServiceContentful/CatDog';

const ModalEmployee = ({ employee, isUpdate, setComponentEmployee }) => {
  const [dataEmployee, setDataEmployee] = useState(employee);

  const closeModal = useCallback(() => setComponentEmployee(false), [setComponentEmployee]);

  const manageContent = useCallback(() => {
    if (isUpdate) {
      CatDog.updateEmployee(dataEmployee)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    } else {
      CatDog.createEmployee(dataEmployee)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  }, [isUpdate, dataEmployee]);

  const onChangeInput = useCallback(
    (e) => {
      if (e.target === 'starDate') {
        setDataEmployee({ ...dataEmployee, [e.target.name]: e.target.valueAsNumber });
      } else {
        setDataEmployee({ ...dataEmployee, [e.target.name]: e.target.value });
      }
    },
    [dataEmployee, setDataEmployee]
  );

  return (
    <div className='modal is-active'>
      <div className='modal-background' />
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>{isUpdate ? 'Update Employee' : 'New Employee'}</p>
          <button className='delete' aria-label='close' onClick={closeModal} />
        </header>
        <section className='modal-card-body'>
          <div className='field'>
            <label className='label' htmlFor='username'>
              Username
            </label>
            <div className='control'>
              <input
                onChange={onChangeInput}
                className='input'
                value={dataEmployee.username}
                name='username'
                type='text'
              />
            </div>
          </div>
          <div className='field'>
            <label className='label' htmlFor='code'>
              Code
            </label>
            <div className='control'>
              <input onChange={onChangeInput} className='input' value={dataEmployee.code} name='code' type='text' />
            </div>
          </div>
          <div className='field'>
            <label htmlFor='startDate' className='label'>
              StartDate
            </label>
            <div className='control'>
              <input
                name='startDate'
                onChange={onChangeInput}
                value={new Date(dataEmployee.startDate).toISOString().split('T')[0]}
                className='input'
                type='date'
              />
            </div>
          </div>
          <div className='field'>
            <label className='label' htmlFor='dui'>
              Dui
            </label>
            <div className='control'>
              <input onChange={onChangeInput} className='input' name='dui' value={dataEmployee.dui} type='text' />
            </div>
          </div>
          <div className='field'>
            <label className='label' htmlFor='position'>
              Position
            </label>
            <div className='control'>
              <input
                onChange={onChangeInput}
                className='input'
                name='position'
                value={dataEmployee.position}
                type='text'
              />
            </div>
          </div>
        </section>
        <footer className='modal-card-foot'>
          <button className='button is-success' onClick={manageContent}>
            Save changes
          </button>
          <button className='button' onClick={closeModal}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
export default ModalEmployee;
