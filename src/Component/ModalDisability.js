import React, { useCallback, useState } from 'react';
import CatDog from '../ServiceContentful/CatDog';

const ModalDisability = ({ disability, isUpdate, setComponentDisability }) => {
  const [dataDisability, setDataDisability] = useState(disability);

  const closeModal = useCallback(() => setComponentDisability(false), [setComponentDisability]);

  const manageContent = useCallback(() => {
    if (isUpdate) {
      CatDog.updateDisability(dataDisability)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    } else {
      CatDog.createDisability(dataDisability)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  }, [isUpdate, dataDisability]);

  const onChangeInput = useCallback(
    (e) => {
      if (e.target === 'dataAdmission') {
        setDataDisability({ ...dataDisability, [e.target.name]: e.target.valueAsNumber });
      } else {
        setDataDisability({ ...dataDisability, [e.target.name]: e.target.value });
      }
    },
    [dataDisability, setDataDisability]
  );

  return (
    <div className='modal is-active'>
      <div className='modal-background' />
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>{isUpdate ? 'Update Disability' : 'New Disability'}</p>
          <button className='delete' aria-label='close' onClick={closeModal} />
        </header>
        <section className='modal-card-body'>
          <div className='field'>
            <label className='label' htmlFor='Code'>
              Code
            </label>
            <div className='control'>
              <input
                onChange={onChangeInput}
                className='input'
                value={dataDisability.code}
                name='code'
                type='text'
              />
            </div>
          </div>
          <div className='field'>
            <label htmlFor='dateAdmission' className='label'>
              Date Admission
            </label>
            <div className='control'>
              <input
                name='dateAdmission'
                onChange={onChangeInput}
                value={new Date(dataDisability.dateAdmission).toISOString().split('T')[0]}
                className='input'
                type='date'
              />
            </div>
          </div>
          <div className='field'>
            <label className='label' htmlFor='medicalUnit'>
              Medial Unit
            </label>
            <div className='control'>
              <input onChange={onChangeInput} className='input' name='medicalUnit' value={dataDisability.medicalUnit} type='text' />
            </div>
          </div>
          <div className='field'>
            <label className='label' htmlFor='doctor'>
              Doctor
            </label>
            <div className='control'>
              <input onChange={onChangeInput} className='input' name='doctor' value={dataDisability.doctor} type='text' />
            </div>
          </div>
          <div className='field'>
            <label htmlFor='initiate' className='label'>
              Initiate
            </label>
            <div className='control'>
              <input
                name='initiate'
                onChange={onChangeInput}
                value={new Date(dataDisability.initiate).toISOString().split('T')[0]}
                className='input'
                type='date'
              />
            </div>
          </div>
          <div className='field'>
            <label htmlFor='end' className='label'>
              End
            </label>
            <div className='control'>
              <input
                name='end'
                onChange={onChangeInput}
                value={new Date(dataDisability.end).toISOString().split('T')[0]}
                className='input'
                type='date'
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
export default ModalDisability;
