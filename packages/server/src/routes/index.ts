import main from './game'

export default function (app) {
  app.use('/games', main)
}
