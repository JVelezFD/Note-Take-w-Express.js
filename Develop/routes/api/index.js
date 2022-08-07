const express = require('express');
const fs = require('fs');
const router = require('express').router();
const util = require('util');
const path = require('path');
const res = require("express/lib/response");
const { append } = require("express/lib/response");
//retrive notes on the DB and return the note for the client

function retriveNote(req, res){
    const data = fs.readFile(
        path.join(__dirname, '../../db/db.json'),
        'utf-8',
        (err) => {
            if(err) {
                console.log(err);
            }
        }
    );
    res.json({message: 'success note retrived'});
}

//write the note to the DB from client/user input. Also give a unique ID for the note

function writeNote (req, res) {
    const userNote = req.body;
    userNote.id = Math.floor(Math.random() *10000);

// if there are existing notes adding the new notes to them

const existingNote = fs.readFileSync(
    path.join(__dirname, '../../db/db.json'),
    'utf-8', 
    (err) =>{
        if(err)    {
            console.log(err)
        }
    }
);
const notes = JSON.parse(existingNote);
notes.push(userNote);

fs.writeFile(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notes),
    'utf-8',
    (err) =>{
        if(err){
            console.log(err);
        }
    }
);
res.json({});
}

// Delete note the user selects

function deleteNote (req, res){
    const noteId = req.params.id;
    const existingNote = fs.readFileSync (
        path.join(__dirname, '../../db/db.json'),
        'utf-8',
        (err) => {
            if (err) {
                console.log(err);
            }
        }

    );
    //need to filter out the note by ID selecte by user
    const notes = JSON.parse(existingNote);
    const newNote = notes.filter((note) => note.id !== noteId);
    fs.writeFile(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(newNote),
        'utf-8', 
        (err) =>{
        if(err){
            console.log(err);
        }
        }
    );
    res.JSON({});
}

//post, delete, get routes for router

router.post('/notes',  writeNote);

router.get('/notes', existingNote);

router.delete('/notes', deleteNote);

module.exports = router;

