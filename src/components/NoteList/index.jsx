import './style.css';

const NoteList = ({allNotes, updateNote}) => {
    const deleteNote = (note) => {
        const index = 0;

        if (allNotes.lenght > 0) {
            updateNote([...allNotes.splice(index + 1, allNotes.lenght - 1)]);
        }
    }

    return (
        <div className="note-list-container">
           {allNotes.map((note) => {
                <div className="note-line">
                    {note}
                    <button onClick={() => deleteNote(note)}>delete</button>
                </div>;
            })}
        </div>
    )
}

export default NoteList;