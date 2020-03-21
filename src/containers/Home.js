import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { initList } from '../store/list/list.action';
import Table from '../components/table';

function Home(props) {
  const {list, initList} = props;
  const [data, setData] = React.useState([]);

  useEffect(() => initList(), [initList]);

  useEffect(() => {
    const {data} = list;
    if (data && data.trans_token) {
      setData(data.trans_token);
    }
  }, [list]);

  return <React.Fragment>
    {list.loading ? <h5 className="text-center">Loading...</h5> : <Table data={data}/> }
  </React.Fragment>
}

const mapStateToProps = ({list}) => ({list});

const mapDispatchToProps = dispatch => ({
  initList: () => dispatch(initList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
