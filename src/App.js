import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentNote: this.blankNote,
      
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

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = {...this.state.notes}
    if(!note.id) {
      note.id = Date.now()
    }
    notes[note.id] = note
    
    this.setState({ notes })
    this.setCurrentNote(note)
  }

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
    }
    return (
      <div className="App">
        <Main 
          notes={this.state.notes} 
          currentNote={this.state.currentNote} 
          {...actions}
        />
      </div>
    )
  }

}

export default App
