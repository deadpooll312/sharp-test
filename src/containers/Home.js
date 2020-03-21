import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { initList } from '../store/list/list.action';
import { Table, Message } from '../components';

function Home(props) {
  const { list, initList } = props;
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  useEffect(() => initList(), [initList]);

  useEffect(() => {
    const abortController = new AbortController()
    const { data, error } = list;

    if (data && data.trans_token) {
      setData(data.trans_token);
    }

    if (error && error.response) {
      setError(error.response.data);
    }

    return function cleanup() {
      abortController.abort();
    }

  }, [list]);

  return <React.Fragment>
    <Message message={error} onClick={() => setError(null)}/>
    {list.loading ? <h5 className="text-center">Loading...</h5> : <Table data={data} />}
  </React.Fragment>
}

const mapStateToProps = ({ list }) => ({ list });

const mapDispatchToProps = dispatch => ({
  initList: () => dispatch(initList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
