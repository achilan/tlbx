const express = require('express')
const routes = require('./routes')
var cors = require('cors')
const app = express()
//app.use(express.static(path.join(__dirname, 'public')));
app.set('port',3001)
app.use(express.json())
app.use(cors());
app.options('*', cors());
app.use('/', routes)
app.listen(app.get('port'),()=>{
    console.log('server running on port', app.get('port'))
})