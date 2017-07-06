import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentNote: {
        id: null,
        title: '',
        body: '',
      },

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

  setCurrentNote = (note) => {
    this.setState({currentNote: note})
  }

  render() {
    return (
      <div className="App">
        <Main 
          notes={this.state.notes} 
          currentNote={this.state.currentNote} 
          setCurrentNote={this.setCurrentNote.bind(this)}
        />
      </div>
    )
  }

}

export default App
