const fs = require('fs')
const db = require('./connect')

const sql = fs.readFileSync(__dirname + '/setup-db.sql').toString()

db.query(sql)
    .then(data => console.log('Setup-complete'))
    .catch(error => console.log(error))