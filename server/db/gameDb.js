function insertNewGame (body, knex) {
  return knex('game')
  .insert(body)
}

function showGameList (body, knex) {
  return knex('game')
}

module.exports = {
  insertNewGame,
  showGameList
}
