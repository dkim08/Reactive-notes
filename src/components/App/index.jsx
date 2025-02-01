import { useState } from 'react';
import './style.css';
import NoteCreator from '../NoteCreator';
import NoteList from '../NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...(notes), note])
    
  }
  return (
    <div className="App">
      <h1>Заметки</h1>
      <button className='btn' onClick={addNote}>Добавить заметку</button>
      <NoteCreator addNoteAction={addNote}/>
      <NoteList allNotes={notes} updateNote={setNotes} />
    </div>
  );
}

export default App;
