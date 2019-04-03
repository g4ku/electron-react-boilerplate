import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';
import { AppState } from '../reducers';

function mapStateToProps(state: AppState) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators<any, any>(CounterActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
