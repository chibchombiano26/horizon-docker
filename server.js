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

const horizonServer = horizon(httpServer, {
    auto_create_collection: process.env.CREATE_COLLECTION | true,
    auto_create_index: process.env.CREATE_INDEX | true,
    project_name: process.env.PROJECT_NAME || 'HorizonWithDocker',
    permissions: process.env.PERMISSION | false,
    rdb_host: process.env.RDB_HOST || 'localhost',
    rdb_port: process.env.RDB_PORT || 28015,
    auth: {
        allow_anonymous: process.env.ALLOW_ANONYMOUS || true,
        allow_unauthenticated: process.env.ALLOW_UNAUTHENTICATED || true,
        token_secret: process.env.TOKEN_SECRET || 'HorizonWithDockerIsSecret'
    }
});