exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del().then(function() {
    // Inserts seed entries
    return knex('players').insert([
      {
        id: 1,
        name: 'Felix Faisandier',
        batting_style: 'Right-hand bat',
        bowling_style: 'Right-arm medium',
        nickname: 'fe fi fo',
        born: '5th March 1993, Wellington',
        age: '24',
        teams: ' ECC Bats, Caged Sharks, EGG',
        playing_role: 'Top order batsman, Wicket Keeper',
        image: 'images/Felix_Faisandier.jpg'

      }, {
        id: 2,
        name: 'Jason Foote',
        batting_style: 'Right-hand bat',
        bowling_style: 'Right-arm offbreak',
        nickname: 'oz',
        born: '29th July 1991, Waikato',
        age: 26,
        teams: 'ECC Bats, Silverdale Spitfires, Hillcrest Holts',
        playing_role: 'Middle order batsman, Specialist feilder',
        image: '/images/Jason_Foote.jpg'
      }, {
        id: 3,
        name: 'Jack Foster',
        batting_style: 'Right-hand bat',
        bowling_style: 'Right-arm medium',
        nickname: 'post-structuralism',
        born: '26th August 1989, Christchurch',
        age: 27,
        teams: 'ECC Sharks, ECC Bats, Wellington College 27th XI',
        playing_role: 'First change / opening bowler'
      }, {
        id: 4,
        name: 'Evan Frost',
        batting_style: 'Right-hand bat',
        bowling_style: 'Left-arm orthodox',
        nickname: 'kev, ev, van man, vo',
        born: '17th August 1993, Auckland',
        age: '24',
        teams: 'ECC Sharks, ECC Bats',
        playing_role: 'All rounder'
      }, {
        id: 5,
        name: 'Gabriel George-Baker',
        batting_style: 'Right-hand bat',
        bowling_style: 'Talk me up',
        nickname: 'dizzy',
        born: '20th September 1991, Wellington',
        age: 25,
        teams: 'ECC Bats',
        playing_role: 'Opening bowler'
      }, {
        id: 6,
        name: 'Nick Honey',
        batting_style: 'Right-hand bat',
        bowling_style: 'Right-arm medium ',
        nickname: 'honey badger',
        born: '27th August 1989, Wellington',
        age: 27,
        teams: 'Wellington College 7th XI, ECC Bats, Black Caps',
        playing_role: 'Opening batsman'
      }, {
        id: 7,
        name: 'Mike Keogh',
        batting_style: 'Left-hand bat',
        bowling_style: 'Right-arm medium',
        nickname: 'kony',
        born: '6th December 1989, Lower Hutt',
        age: 27,
        teams: 'ECC Sharks, ECC Bats, Caged Sharks, Naenae Cricket Club XI (All timers)',
        playing_role: 'Opening batsman'
      }, {
        id: 8,
        name: 'Paul Matthews',
        batting_style: 'Right-hand bat',
        bowling_style: 'Right-arm medium',
        nickname: 'Steven Speilberg',
        playing_role: 'Middle order batsman'
      }, {
        id: 9,
        name: 'Joe Sloane',
        batting_style: 'Right-hand bat',
        bowling_style: 'Right-arm medium',
        nickname: 'frosty',
        playing_role: 'Middle order batsman',
        born: '8th November 1989, Lower Hutt',
        age: 27,
        teams: 'HIBS 10b, HIBS 3rd XI, EGG, Caged Sharks, ECC Sharks, ECC Bats, Naenae Cricket Club (All timers)'
      }, {
        id: 10,
        name: 'Rhys Stannard',
        batting_style: 'Right-hand bat',
        bowling_style: 'Right arm fast',
        nickname: 'cap, moggy, ol nine lives',
        born: '5th December 1991, Takapuna',
        age: 25,
        teams: 'ECC Sharks, ECC Bats, Wellington College 3rd XI, Kuwait English School 1st XI, Kuwait Oil Company XI, Caged Sharks',
        playing_role: 'Captain, All rounder'
      }, {
        id: 11,
        name: 'Isaiah Wilson',
        batting_style: 'Right-hand bat',
        bowling_style: 'Right arm fast',
        nickname: 'mf zazu',
        born: '1st January 1992, Tokoroa',
        age: 25,
        teams: 'ECC Sharks, ECC Bats, Saint Johns College 5th & 3rd XI',
        playing_role: 'Opening bowler'
      }
    ]);
  });
};
