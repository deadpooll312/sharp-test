import React from 'react';

export function Table(props) {
  const { data } = props;

  const body = data.map(item => <tr key={item.id}>
    <th scope="row">{item.id}</th>
    <td>{item.date}</td>
    <td>{item.username}</td>
    <td>{item.amount}</td>
    <td>{item.balance}</td>
  </tr>);

  return !data.length ? <h5 className="text-center">No data...</h5> :
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Date</th>
          <th scope="col">username</th>
          <th scope="col">amount</th>
          <th scope="col">balance</th>
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>;
}
