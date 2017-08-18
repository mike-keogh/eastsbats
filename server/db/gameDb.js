function insertNewGame (body, knex) {
  return knex('game')
  .insert(body)
}

function showGameList (body, knex) {
  return knex('game').select()
}

function getGameById (id, knex) {
  return knex('game')
    .where('game_id', id)
}

function deleteGame (id, knex) {
  return knex('game')
    .where('game_id', id)
    .del()
}
module.exports = {
  insertNewGame,
  showGameList,
  deleteGame,
  getGameById
}
