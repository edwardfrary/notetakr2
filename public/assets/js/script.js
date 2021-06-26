const noteTitle = document.querySelector('.note-title');
const noteText = document.querySelector('.note-textarea');
const saveNoteBtn = document.querySelector('.save-note');

const show = (elem) => {
    elem.style.display = 'inline';
};

const hide = (elem) => {
    elem.style.display = 'none';
};

const saveNote = () => {
    let title = noteTitle.value;
    let text = noteText.value
    const noteObj = { title, text };
    fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteObj),
    }).then(response => {
        if (response.ok) {
            return response.json();
        };
    });
};

const createNewNote = (body, notesArray) => {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../data/notes.json'),
      JSON.stringify({ notesArray }, null, 2)
    );
    return note;
  }