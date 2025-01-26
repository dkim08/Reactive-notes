import './style.css';
import { useState } from 'react';


const NoteCreator = () => {
    const [count, setCount] = useState(0);

    const addNotes = () => {
        setCount(count+1);
        console.log(`Количество заметок: ${setCount}`);
    };

    return (
        <div className="notecreator-container">
            <input type="text" />
            <button onClick={addNotes}>Добавить заметку</button>
        </div>
        
    )
};

export default NoteCreator;