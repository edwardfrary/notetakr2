const router = require('express').Router();
const { createNewNote } = require('../../public/assets/js/script.js');
const { notes } = require('../../data/notes.json');

console.log(notes);

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = note.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;