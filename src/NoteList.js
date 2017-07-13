import './NoteList.css'
import Note from './Note'

const NoteList = () => {
  const sortNotes = (a, b) => {
    return (notes[b].updatedAt || 0) - notes[a].updatedAt
  }

  const noteIds = Object.keys(notes).sort(sortNotes)

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {noteIds.map(noteId => (
          <Note key={noteId} note={notes[noteId]} />
        ))}
      </ul>
    </div>
    )
  }

export default NoteList