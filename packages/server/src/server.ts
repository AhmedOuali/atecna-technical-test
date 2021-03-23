require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
import express from 'express'
import deployRoutes from './routes'
import sockets from './socket'
import i18n from './middleware/i18n'
import errorHandler from './middleware/errorHandler'
import securityFilter from './middleware/securityFilter'
import parsersFilter from './middleware/parsersFilter'
import fetchFromTwitch from './functions/fetchFromTwitch'
import constants from './constants'

const app = express()
const http = require('http').createServer(app)

const PORT = process.env['APP_PORT']

app.use(i18n.init)
app.set('trust proxy', 1)
app.use(securityFilter)

app.use(parsersFilter)
deployRoutes(app)
sockets.init(http);
setInterval( () => {
  fetchFromTwitch()
    .then()
    .catch()
}, 60000 / (Math.trunc(parseInt(process.env["TWITCH_THROTTLING_LIMIT"]) /constants.source_games.length)))


app.use(errorHandler)

//------------------------HTTP-SERVER------------------------------------
//-----------------------------------------------------------------------
http.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT)
})
