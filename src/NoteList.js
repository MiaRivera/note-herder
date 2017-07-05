import React from 'react'
import './NoteList.css'
import Note from './Note'

const NoteList = () => {
  const notes = [
  {
    id: 'note',
    title: 'my note',
    body: 'this is my note',
  },
  {
    id: 'nnn',
    title: 'title',
    body: 'curvy',
  },
  ]
    return (
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {notes.map(note => <Note note={note} />)}
          </ul>
        </div>
    )
}

export default NoteList