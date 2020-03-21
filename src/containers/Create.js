import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

// local files
import { Input, AutocomleteComponent, Message } from '../components';
import { filterUsers } from '../store/users/users.action';
import { createTransaction } from '../store/transaction/transaction.action';

function Create(props) {
  const history = useHistory();
  const { users, filterUsers, transaction } = props;
  const [formData, setFormData] = React.useState({});
  const [error, setError] = React.useState(null);
  const [value, setNewValue] = React.useState();
  const [searchData, setSearchData] = React.useState([]);

  useEffect(() => {
    const { data } = users;
    const { error } = transaction;

    if (error && error.response) {
      setError(error.response.data);
    }

    if (transaction.data && transaction.data.trans_token) {
      history.push('/list');
    } 

    setSearchData(data);
  }, [users, transaction, history]);

  function submit(e) {
    e.preventDefault();
    props.createTransaction(formData);
  }

  function onChange(e, name) {
    let value = {};
    value[name] = e.target.value;

    setFormData(Object.assign(formData, value));
  }

  function search(value) {
    setNewValue(value);
    filterUsers(value);
  }

  function onSelect(name) {
    setNewValue(name);
    setFormData(Object.assign(formData, { name }));
  }

  function clearError() {
    setError(null);
  }

  return <React.Fragment>
    <h1 className="text-center">Create new Transaction</h1>
    <Message message={error} onClick={() => clearError()} />

    <form onSubmit={submit}>
      <AutocomleteComponent
        search={search}
        select={onSelect}
        data={searchData}
        label="Name"
        value={value} />

      <Input
        name="amount"
        type="number"
        onChange={onChange}
        label="Amount" />

      <button
        type="submit"
        className="btn btn-primary">{ transaction.loading ? 'Loading...' : 'Submit' }</button>
    </form>
  </React.Fragment>
}

const mapStateToProps = ({ users, transaction }) => ({ users, transaction });

const mapDispatchToProps = dispatch => ({
  filterUsers: value => dispatch(filterUsers(value)),
  createTransaction: data => dispatch(createTransaction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
