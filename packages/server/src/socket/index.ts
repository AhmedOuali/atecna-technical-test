interface Sockets {
  init: (server: any) => void | undefined
  io: any,

}

export enum eventTypes {
  CHANNELS_VIEWERS_COUNT = 'CHANNELS_VIEWERS_COUNT'
}

const sockets: Sockets = {
  init: undefined,
  io: undefined,
}

sockets.init = function (server) {
  this.io = require('socket.io')(server, {
    cors: {
      origin: process.env['APP_FRONT_URL'],
      methods: ['GET'],
    },
  })

  this.io.sockets.on('connection', function (socket) {})
}

export default sockets
