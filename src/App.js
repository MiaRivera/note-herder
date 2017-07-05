import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {
        'note-1': {
          id: 'change',
          title: 'the change',
          body: 'this is my',
        },
        'note-2': {
          id: 'nnn',
          title: 'title',
          body: 'curvy',
        },
        }
      } 
  }
  

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} />
      </div>
    )
  }

}

export default App
