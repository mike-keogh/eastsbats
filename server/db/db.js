// const path = require('path')
// const config = require(path.join(__dirname, '/../../knexfile')).development
// const knex = require('knex')(config)

function getPlayer (knex) {
  return knex('players').select()
}

function getProfile (id, knex) {
  return knex('players')
    .where('players.id', id)
    .join('batting', 'batting.user_id', '=', 'players.id')
    .join('bowling', 'bowling.user_id', '=', 'players.id')
    .select('*', 'bowling.average as bowling_average', 'batting.average as batting_average')
    .select('*', 'batting.runs as batting_runs', 'bowling.runs as bowling_runs')
    .select('*', 'players.id as id')
}

function editProfile(id, data, knex) {
  return knex('batting')
    .where('user_id', id)
    .update(data)
}

module.exports = {
  getPlayer: getPlayer,
  getProfile: getProfile,
  editProfile: editProfile
}
