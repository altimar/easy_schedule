import React, {Component} from 'react';
import './App.css';
import {EntryList, EntryListProps} from './components/EntryList';

class App extends Component<EntryListProps> {
  constructor(props: EntryListProps) {
    super(props)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Easy Schedule</h1>
        </header>
        <EntryList entries={this.props.entries}/>
      </div>
    );
  }
}

export default App;
