import bodyParser from 'body-parser'

export default [
  // for parsing application/json
  bodyParser.json(),
  // for parsing application/xwww-
  bodyParser.urlencoded({ extended: true }),
]
