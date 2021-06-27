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

const printResults = resultArr => {
    console.log("resultArray: " + resultArr);

    const notesHTML = resultArr.map(({ title, text, id}) => {
        return `
    <div class="col-12 col-md-5 mb-3">
      <div class="card p-3" data-id=${id}>
        <h4 class="text-primary">${title}</h4>
           Text: ${text}
      </div>
    </div>
      `;
    });
    console.log(notesHTML);

    noteList.innerHTML = notesHTML.join('');
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
    }).then(data => {
        printResults(noteObj);
    });
};