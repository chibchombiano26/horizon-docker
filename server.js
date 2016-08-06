'use strict'
const express = require('express');
const horizon = require('@horizon/server');
const path = require('path');
const app = express();
app.use(express.static('./'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const httpServer = app.listen(8081, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on port 8081.');
    }
});

let autoCreateCollection = true;
let auto_create_index = true;
let permission = false;
let allow_anonymous = true;
let allow_unauthenticated = true;

if(process.env.CREATE_COLLECTION){
    autoCreateCollection = process.env.CREATE_COLLECTION;
}

if(process.env.CREATE_INDEX){
    auto_create_index = process.env.CREATE_INDEX;
}

if(process.env.PERMISSION){
    permission = process.env.PERMISSION;
}

if(process.env.ALLOW_ANONYMOUS){
    allow_anonymous = process.env.ALLOW_ANONYMOUS;
}

if(process.env.ALLOW_UNAUTHENTICATED){
    allow_unauthenticated = process.env.ALLOW_UNAUTHENTICATED;
}

const horizonServer = horizon(httpServer, {
    auto_create_collection: autoCreateCollection,
    auto_create_index: auto_create_index,
    project_name: process.env.PROJECT_NAME || 'HorizonWithDocker',
    permissions: permission,
    rdb_host: process.env.RDB_HOST || 'localhost',
    rdb_port: process.env.RDB_PORT || 28015,
    auth: {
        allow_anonymous: allow_anonymous,
        allow_unauthenticated: allow_unauthenticated,
        token_secret: process.env.TOKEN_SECRET || 'HorizonWithDockerIsSecret'
    }
});