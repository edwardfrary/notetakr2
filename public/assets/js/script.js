const noteTitle = document.querySelector('.note-title');
const noteText = document.querySelector('.note-textarea');
const newNoteBtn = document.querySelector('.new-note');
const noteList = document.querySelectorAll('.list-container .list-group');
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