exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {
         id: 1,
         name: 'Felix Faisandier',
         characteristic: 'Right hand bat, right arm beamers',
         nickname: 'fe fi fo'
       },
        {id: 2, name: 'Jason Foote', characteristic: 'Right hand bat, right arm everything', nickname: 'oz' },
        {id: 3, name: 'Jack Foster', characteristic: 'Right arm bat, right arm medium pace', nickname: 'post-structuralism'},
        {id: 4, name: 'Evan Frost', characteristic: 'Right arm bat, left arm top of off stump', nickname: 'kev, ev, van man, vo'},
        {id: 5, name: 'Gabriel George-Baker', characteristic: 'Front foot fetish, right arm aggression', nickname: 'dizzy'},
        {id: 6, name: 'Nick Honey', characteristic: 'Right hand bat, right arm celebrations', nickname: 'honey badger'},
        {id: 7, name: 'Mike Keogh', characteristic: 'Left hand bat, right arm bruiser', nickname: 'kony'},
        {id: 8, name: 'Paul Matthews', characteristic: 'Right hand bat, right arm outta nowhere', nickname: 'Steven Speilberg'},
        {id: 9, name: 'Joe Sloane', characteristic: 'Right hand bat, right arm bouncers', nickname: 'frosty'},
        {id: 10, name: 'Rhys Stannard', characteristic: 'Right arm bat, right arm revenge', nickname: 'cap, moggy, ol nine lives' },
        {id: 11, name: 'Isaiah Wilson', characteristic: 'Right arm bat, right arm you gettin a bouncer', nickname: 'mf zazu'}
      ]);
    });
};
