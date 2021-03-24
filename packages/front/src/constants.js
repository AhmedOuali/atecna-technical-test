module.exports = process.env.NODE_ENV === "production" ? {
  LINE_CHART_POINT_DENSITY: 100,
  WS_URL: "https://atecna-api-ahmed-ouali.herokuapp.com",
  SOURCE_GAMES: [
    743, // /directory/game/Chess
    138585, // /directory/game/Hearthstone
    30921, // /directory/game/Rocket%20League
    29595  // /game/Dota%202
  ]
} : {
  LINE_CHART_POINT_DENSITY: 100,
  WS_URL: "http://localhost:3001",
  SOURCE_GAMES: [
    743, // /directory/game/Chess
    138585, // /directory/game/Hearthstone
    30921, // /directory/game/Rocket%20League
    29595  // /game/Dota%202
  ]
}
