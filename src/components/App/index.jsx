import './style.css';
import NoteCreator from '../NoteCreator';
import NoteList from '../NoteList';

function App() {
  return (
    <div className="App">
      <h1>Заметки</h1>
      <NoteCreator />
      <NoteList />
    </div>
  );
}

export default App;
