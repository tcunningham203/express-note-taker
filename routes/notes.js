const note = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// The "get" route here was taken directly from the module 11 mini project.
note.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


note.delete('/:id', (req, res) => {
    const myNote = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const rewrite = json.filter((note) => note.id !== myNote);
            writeToFile('./db/db.json', rewrite);
            res.json(`Note Deleted`);
        });
});

// The "post" route here was taken directly from the module 11 mini project.
note.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully!`);
    } else {
        res.error('Failed to add note');
    }
});

module.exports = note;
