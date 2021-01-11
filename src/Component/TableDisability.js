const TableDisability = () => {
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
  );
};

export default TableDisability;
