function getPlayer (knex) {
  return knex('players').select()
}

function createNewPlayer (body, knex) {
  return knex('players')
    .select()
    .insert(body)
    .first()
}

function getProfile(id, knex) {
  return knex('players')
    .where('id', id)
    .first()
}

function getPlayerBowling (id, knex) {
  return knex('bowling')
    .where('user_id', id)
    .first()
}

function getPlayerBatting (id, knex) {
  return knex('batting')
    .where('user_id', id)
    .first()
}

function editProfile(id, data, knex) {
  return knex('batting')
    .where('user_id', id)
    .update(data)
}

module.exports = {
  getPlayer,
  getProfile,
  getPlayerBowling,
  getPlayerBatting,
  editProfile,
  createNewPlayer
}
