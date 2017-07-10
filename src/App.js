import React, { Component } from 'react'
import base from './base'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      uid: null,
      currentNote: this.blankNote,
      notes: {}
      } 
  }

  componentDidMount = () => {
    base.syncState(
      'notes',
      {
        context: this,
        state: 'notes',
      }

    )
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

  deleteNote = () => {
    const notes = {...this.state.notes}

    notes[this.state.currentNote.id] = null
    this.setState({ notes })
    this.resetCurrentNote()
  }

  signedIn = () => {
    return this.state.uid
  }

  handleAuth = () => {
    this.setState({uid: 'mrivera'})
  }

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
      deleteNote: this.deleteNote,
    }
    return (
      <div className="App">

        {this.signedIn() ? 
          <Main notes={this.state.notes} currentNote={this.state.currentNote} {...actions} /> :
          <SignIn handleAuth={this.handleAuth} />
        }
        
      </div>
    )
  }

}

export default App
