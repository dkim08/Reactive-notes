import { useState } from 'react';
import './style.css';

const NoteCreator = (addNoteAction) => {
    const [noteText, setNoteText] = useState("");

    const handleAddNote = (event) => {
        setNoteText(event.target.value);
    }

    const handleAction = () => {
        addNoteAction(noteText);
        setNoteText("");
    }

    return (
        <div className="note-creator-container">
            <textarea value={noteText} onChange={handleAddNote}/>
            <button onClick={handleAction}>
                Добавить заметку
            </button>
        </div>  
    )
};

export default NoteCreator;