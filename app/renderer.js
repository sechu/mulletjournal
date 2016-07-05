// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
require('electron-cookies');

let db = require('./models')('default');
const remoteDBAddress = 'http://localhost:5984/';
const Moment = require('moment');
let Collection = require('./models/collection')(db);
let Bullet = require('./models/bullet')(db);

String.prototype.toHex = function () {
    return this.split('').map(c => c.charCodeAt(0).toString(16)).join('');
};

let remoteDB = new PouchDB(remoteDBAddress + 'default');
