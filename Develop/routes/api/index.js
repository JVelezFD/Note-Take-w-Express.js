const express = require('express');
const fs = require('fs');
const router = require('express').router();
const util = require('util');
const path = require('path');

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
)

}




