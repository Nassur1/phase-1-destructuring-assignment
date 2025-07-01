const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// ===== 1. Animal sounds (destructuring strings) =====
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// ===== 2. Animal names (skip horse) =====
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// ===== 3. Animal colors (only 3 animals left) =====
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// ===== 4. Destructure all rainbow color names =====
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// ===== 5. Destructure initials only (skip indigo) =====
const [r, o, y, g, b, , v] = colors;

// ===== 6. Destructure only indigo =====
const [, , , , , indg] = colors;

// ===== 7. Destructure muppet object =====
const { muppetName, color, song, job, partner } = muppet;

// ===== 8. Destructure nestedMuppet album and other properties =====
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;
