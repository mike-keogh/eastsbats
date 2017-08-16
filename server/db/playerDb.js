function getPlayer (knex) {
  return knex('players').select()
}

function createNewPlayer (body, knex) {
  return knex('players')
    .insert(body)
    .then(id => getProfile(id[0], knex))
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

function deletePlayer (id, knex) {
  console.log({id});
  return knex('players')
    .where('players.id', id)
    .del()
}

module.exports = {
  getPlayer,
  createNewPlayer,
  getProfile,
  getPlayerBowling,
  getPlayerBatting,
  editProfile,
  deletePlayer
}
