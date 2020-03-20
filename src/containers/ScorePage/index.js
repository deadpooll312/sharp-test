import React, {Component} from 'react';

import { connect } from 'react-redux';
import { fetchScoreData, resetScore } from "../../store/app/actions";

import ScoreItems from '../../components/Score';
import TotalScore from '../../components/TotalScore';
import Container from '../../components/Container';
import Button from '../../components/Button';

class ScorePageContainer extends Component {
  componentDidMount() {
    this.props.fetchScoreData();
  }
  
  render() {
    const { scoreData } = this.props;
    
    if (!scoreData) {
      return <div>loading...</div>
    }
    
    const { ai, player, X, O, list } = scoreData;
  
    return (
      <div className="ScorePage">
        <Container>
          <h1>Scores of all games</h1>
          <ScoreItems
            list={list}
          />
          <TotalScore
            player={player}
            ai={ai}
            O={O}
            X={X}
            resetClick={this.props.resetScore}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  scoreData: state.app.scoreData
});
const mapDispatchToProps = dispatch => ({
  fetchScoreData: () => dispatch(fetchScoreData()),
  resetScore: () => dispatch(resetScore())
});

export default connect(mapStateToProps, mapDispatchToProps)(ScorePageContainer);