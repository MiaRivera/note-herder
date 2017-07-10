import React, { Component } from 'react'

import './App.css'
import base, {auth} from './base'
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

  componentWillMount = () => {
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          //signed in
          this.handleAuth(user)
        } else {
          //signedout
          this.setState({uid: null})
          this.handleUnauth()
        }
      }
    )
  }

  syncNotes = () => {
    this.bindingRef = base.syncState(
      'notes/${this.state.uid}',
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

  handleAuth = (result) => {
    this.setState({uid: result.user.uid})
  }

  handleUnauth = () => {
    if(this.bindingRef) {
      base.removeBinding(this.bindingRef)
    }

    this.setState({
      uid: null,
      notes: {},
    })

    this.resetCurrentNote()
  }

  signOut = () => {
    auth 
      .signOut()
      .then(() => this.setState({uid: null}))
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
