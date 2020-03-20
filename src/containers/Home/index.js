import React, {Component} from 'react';
import TeamDisplay from "../../components/Team";
import Board from "../../components/Board";
import ActionButtons from "../../components/ActionButtons";
import GameStatus from "../../components/GameStatus";
import Container from '../../components/Container';
import {connect} from "react-redux";
import {fetchMainGameData, nextGame, resetGame, sendTurn} from "../../store/app/actions";

class Home extends Component {
  componentDidMount() {
    this.props.fetchMainGameData();
  }
  
  render() {
    const {
      ai,
      player,
      board,
      end,
      loading,
      winner
    } = this.props;
    
    this.squareCLickHandler = (event, index) => {
      if (!loading && !end && index !== 'X' && index !== 'O') {
        this.props.sendTurn(index);
      }
    };
    
    if (!ai) {
      return <div>Loading...</div>
    }
    
    return (
      <div className="Home">
        <Container>
          <h1>Tic-Tac-Toe</h1>
          <TeamDisplay
            ai={ai}
            player={player}
          />
          <Board
            board={board}
            onClick={this.squareCLickHandler}
          />
          <ActionButtons
            end={end}
            resetGame={this.props.resetGame}
            nextGame={this.props.nextGame}
          />
          <GameStatus end={end} winner={winner}/>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ai: state.app.ai,
  player: state.app.player,
  board: state.app.board,
  end: state.app.end,
  winner: state.app.winner,
  loading: state.app.loading
});

const mapDispatchToProps = dispatch => ({
  fetchMainGameData: () => dispatch(fetchMainGameData()),
  sendTurn: index => dispatch(sendTurn(index)),
  resetGame: () => dispatch(resetGame()),
  nextGame: () => dispatch(nextGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);