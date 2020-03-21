import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
// local files
import { Input, Message } from '../components';
import { initUser } from '../store/user/user.actions';
import { ID_TOKEN } from '../constants';

function Registration(props) {
  const history = useHistory();
  const {user} = props;
  const [formData, setFormData] = React.useState({});
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const { error, data } = user;

    if (error && error.response) {
      setError(error.response.data);
    }

    if (data && data.id_token) {
      localStorage.setItem(ID_TOKEN, data.id_token);
      history.push('/');
    }

  }, [user, history]);

  function submit(e) {
    e.preventDefault();
    props.initUser(formData);
  }

  function onChange(e, name) {
    let value = {};
    value[name] = e.target.value;

    setFormData(Object.assign(formData, value));
  }

  function messageClick() {
    setError(null);
  }

  return <React.Fragment>
    <h1 className="text-center">Registration Page</h1>

    <Message message={error} onClick={messageClick} />

    <form onSubmit={submit}>
      <Input
        name="username"
        onChange={onChange}
        label="Username"
        placeholder="Matt" />
      <Input
        name="email"
        onChange={onChange}
        label="Email address"
        type="email"
        placeholder="matt@gmail.com" />
      <Input
        name="password"
        onChange={onChange}
        label="Password"
        type="password"
        placeholder="" />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </React.Fragment>
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  initUser: data => dispatch(initUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
