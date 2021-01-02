import React, { Component } from 'react';
import './App.css';
import EntryList from './components/EntryList';
import { connect } from 'react-redux';
import { RootState, EntryListType } from './store/types'

const mapStateToProps = (state: RootState) => ({
  entries: state.schedule,
});

type Props = {
  entries: EntryListType
}

class App extends Component<Props> {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Easy Schedule</h1>
        </header>
        <EntryList entries={this.props.entries.entries} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(App);
