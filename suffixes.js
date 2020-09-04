var suffixes = [
  { effect: ' to str', name: 'frailty',         valMin: -10, valMax: -6, occurrence: 'ASW BJ', qlvl: 3,  steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -3 },
  { effect: ' to str', name: 'weakness',        valMin: -5,  valMax: -1, occurrence: 'ASWtBJ', qlvl: 1,  steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -2 },
  { effect: ' to str', name: 'strength',        valMin: 1,   valMax: 5,  occurrence: 'ASWtBJ', qlvl: 1,  steps: 4, base: 200,  max: 1000,  range: 800,   multiplier: 2 },
  { effect: ' to str', name: 'might',           valMin: 6,   valMax: 10, occurrence: 'ASW BJ', qlvl: 5,  steps: 4, base: 1200, max: 2000,  range: 800,   multiplier: 3 },
  { effect: ' to str', name: 'power',           valMin: 11,  valMax: 15, occurrence: 'ASW BJ', qlvl: 11, steps: 4, base: 2200, max: 3000,  range: 800,   multiplier: 4 },
  { effect: ' to str', name: 'giants',          valMin: 16,  valMax: 20, occurrence: 'A W BJ', qlvl: 17, steps: 4, base: 3200, max: 5000,  range: 1800,  multiplier: 7 },
  { effect: ' to str', name: 'titans',          valMin: 21,  valMax: 30, occurrence: '  W  J', qlvl: 23, steps: 9, base: 5200, max: 10000, range: 4800,  multiplier: 10 },

  { effect: ' to mag', name: 'the fool',        valMin: -10, valMax: -6, occurrence: 'ASWTBJ', qlvl: 3,  steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -3 },
  { effect: ' to mag', name: 'dyslexia',        valMin: -5,  valMax: -1, occurrence: 'ASWTBJ', qlvl: 1,  steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -2 },
  { effect: ' to mag', name: 'magic',           valMin: 1,   valMax: 5,  occurrence: 'ASWTBJ', qlvl: 1,  steps: 4, base: 200,  max: 1000,  range: 800,   multiplier: 2 },
  { effect: ' to mag', name: 'the mind',        valMin: 6,   valMax: 10, occurrence: 'ASWTBJ', qlvl: 5,  steps: 4, base: 1200, max: 2000,  range: 800,   multiplier: 3 },
  { effect: ' to mag', name: 'brilliance',      valMin: 11,  valMax: 15, occurrence: 'ASWTBJ', qlvl: 11, steps: 4, base: 2200, max: 3000,  range: 800,   multiplier: 4 },
  { effect: ' to mag', name: 'sorcery',         valMin: 16,  valMax: 20, occurrence: 'AWTBJ',  qlvl: 17, steps: 4, base: 3200, max: 5000,  range: 1800,  multiplier: 7 },
  { effect: ' to mag', name: 'wizardry',        valMin: 21,  valMax: 30, occurrence: '  T J',  qlvl: 23, steps: 9, base: 5200, max: 10000, range: 4800,  multiplier: 10 },

  { effect: ' to dex', name: 'paralysis',       valMin: -10, valMax: -6, occurrence: 'ASW BJ', qlvl: 3,  steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -3 },
  { effect: ' to dex', name: 'atrophy',         valMin: -5,  valMax: -1, occurrence: 'ASWtBJ', qlvl: 1,  steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -2 },
  { effect: ' to dex', name: 'dexterity',       valMin: 1,   valMax: 5,  occurrence: 'ASWtBJ', qlvl: 1,  steps: 4, base: 200,  max: 1000,  range: 800,   multiplier: 2 },
  { effect: ' to dex', name: 'skill',           valMin: 6,   valMax: 10, occurrence: 'ASW BJ', qlvl: 5,  steps: 4, base: 1200, max: 2000,  range: 800,   multiplier: 3 },
  { effect: ' to dex', name: 'accuracy',        valMin: 11,  valMax: 15, occurrence: 'ASW BJ', qlvl: 11, steps: 4, base: 2200, max: 3000,  range: 800,   multiplier: 4 },
  { effect: ' to dex', name: 'precision',       valMin: 16,  valMax: 20, occurrence: 'A W BJ', qlvl: 17, steps: 4, base: 3200, max: 5000,  range: 1800,  multiplier: 7 },
  { effect: ' to dex', name: 'perfection',      valMin: 21,  valMax: 30, occurrence: '    BJ', qlvl: 23, steps: 9, base: 5200, max: 10000, range: 4800,  multiplier: 10 },

  { effect: ' to vit', name: 'illness',         valMin: -10, valMax: -6, occurrence: 'ASW BJ', qlvl: 3,  steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -3 },
  { effect: ' to vit', name: 'disease',         valMin: -5,  valMax: -1, occurrence: 'ASWtBJ', qlvl: 1,  steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -2 },
  { effect: ' to vit', name: 'vitality',        valMin: 1,   valMax: 5,  occurrence: 'ASWtBJ', qlvl: 1,  steps: 4, base: 200,  max: 1000,  range: 800,   multiplier: 2 },
  { effect: ' to vit', name: 'zest',            valMin: 6,   valMax: 10, occurrence: 'ASW BJ', qlvl: 5,  steps: 4, base: 1200, max: 2000,  range: 800,   multiplier: 3 },
  { effect: ' to vit', name: 'vim',             valMin: 11,  valMax: 15, occurrence: 'ASW BJ', qlvl: 11, steps: 4, base: 2200, max: 3000,  range: 800,   multiplier: 4 },
  { effect: ' to vit', name: 'vigor',           valMin: 16,  valMax: 20, occurrence: 'A W BJ', qlvl: 17, steps: 4, base: 3200, max: 5000,  range: 1800,  multiplier: 7 },
  { effect: ' to vit', name: 'life',            valMin: 21,  valMax: 30, occurrence: '     J', qlvl: 23, steps: 9, base: 5200, max: 10000, range: 4800,  multiplier: 10 },

  { effect: ' to all stats', name: 'trouble',     valMin: -10, valMax: -6, occurrence: 'ASWtBJ', qlvl: 12, steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -10 },
  { effect: ' to all stats', name: 'the pit',     valMin: -5,  valMax: -1, occurrence: 'ASWtBJ', qlvl: 5,  steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -5 },
  { effect: ' to all stats', name: 'the sky',     valMin: 1,   valMax: 3,  occurrence: 'ASWtBJ', qlvl: 5,  steps: 2, base: 800,   max: 4000,  range: 3200,   multiplier: 5 },
  { effect: ' to all stats', name: 'the moon',    valMin: 4,   valMax: 7,  occurrence: 'ASWtBJ', qlvl: 11, steps: 3, base: 4800,  max: 8000,  range: 3200,   multiplier: 10 },
  { effect: ' to all stats', name: 'the stars',   valMin: 8,   valMax: 11, occurrence: 'A W BJ', qlvl: 17, steps: 3, base: 8800,  max: 12000, range: 3200,   multiplier: 15 },
  { effect: ' to all stats', name: 'the heavens', valMin: 12,  valMax: 15, occurrence: '  W BJ', qlvl: 25, steps: 3, base: 12800, max: 20000, range: 72000,  multiplier: 20 },
  { effect: ' to all stats', name: 'the zodiac',  valMin: 16,  valMax: 20, occurrence: '     J', qlvl: 30, steps: 4, base: 20800, max: 40000, range: 19200,  multiplier: 30 },

  { effect: ' to life', name: 'the vulture',  valMin: -25,  valMax: -11,  occurrence: 'AS   J', qlvl: 4,   steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -4 },
  { effect: ' to life', name: 'the jackal',   valMin: -10,  valMax: -1,   occurrence: 'AS   J', qlvl: 1,   steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -2 },
  { effect: ' to life', name: 'the fox',      valMin: 10,   valMax: 15,   occurrence: 'AS   J', qlvl: 1,   steps: 5,   base: 100,    max: 1000,  range: 900,   multiplier: 2 },
  { effect: ' to life', name: 'the jaguar',   valMin: 16,   valMax: 20,   occurrence: 'AS   J', qlvl: 5,   steps: 4,   base: 1100,   max: 2000,  range: 900,   multiplier: 3 },
  { effect: ' to life', name: 'the eagle',    valMin: 21,   valMax: 30,   occurrence: 'AS   J', qlvl: 9,   steps: 9,   base: 2100,   max: 4000,  range: 1900,  multiplier: 5 },
  { effect: ' to life', name: 'the wolf',     valMin: 30,   valMax: 40,   occurrence: 'AS   J', qlvl: 15,  steps: 10,  base: 4100,   max: 6000,  range: 1900,  multiplier: 7 },
  { effect: ' to life', name: 'the tiger',    valMin: 41,   valMax: 50,   occurrence: 'AS   J', qlvl: 21,  steps: 9,   base: 6100,   max: 10000, range: 3900,  multiplier: 9 },
  { effect: ' to life', name: 'the lion',     valMin: 51,   valMax: 60,   occurrence: 'A    J', qlvl: 27,  steps: 9,   base: 10100,  max: 15000, range: 4900,  multiplier: 11 },
  { effect: ' to life', name: 'the mammoth',  valMin: 61,   valMax: 80,   occurrence: 'A     ', qlvl: 35,  steps: 19,  base: 15100,  max: 19000, range: 3900,  multiplier: 12 },
  { effect: ' to life', name: 'the whale',    valMin: 81,   valMax: 100,  occurrence: 'A     ', qlvl: 60,  steps: 19,  base: 19100,  max: 30000, range: 10900, multiplier: 13 },

  { effect: ' damage', name: 'quality',   valMin: 1,  valMax: 2,  occurrence: '  WtB ', qlvl: 2,   steps: 1,  base: 100,   max: 200,   range: 100,   multiplier: 2 },
  { effect: ' damage', name: 'maiming',   valMin: 3,  valMax: 5,  occurrence: '  WtB ', qlvl: 7,   steps: 2,  base: 1300,  max: 1500,  range: 200,   multiplier: 3 },
  { effect: ' damage', name: 'slaying',   valMin: 6,  valMax: 8,  occurrence: '  W   ', qlvl: 15,  steps: 2,  base: 2600,  max: 3000,  range: 400,   multiplier: 5 },
  { effect: ' damage', name: 'gore',      valMin: 9,  valMax: 12, occurrence: '  W   ', qlvl: 25,  steps: 3,  base: 4100,  max: 5000,  range: 900,   multiplier: 8 },
  { effect: ' damage', name: 'carnage',   valMin: 13, valMax: 16, occurrence: '  W   ', qlvl: 35,  steps: 3,  base: 5100,  max: 10000, range: 4900,  multiplier: 10 },
  { effect: ' damage', name: 'slaughter', valMin: 17, valMax: 20, occurrence: '  W   ', qlvl: 60,  steps: 3,  base: 10100, max: 15000, range: 4900,  multiplier: 13 },

  { effect: ' damage from enemies', name: 'pain',       valMin: 4,  valMax: 2,  occurrence: 'AS   j', qlvl: 4,   steps: undefined, base: undefined, max: undefined, range: undefined,  multiplier: -4 },
  { effect: ' damage from enemies', name: 'tears',      valMin: 1,  valMax: 1,  occurrence: 'AS   j', qlvl: 2,   steps: undefined, base: undefined, max: undefined, range: undefined,  multiplier: -2 },
  { effect: ' damage from enemies', name: 'health',     valMin: -1, valMax: -1, occurrence: 'AS   J', qlvl: 2,   steps: undefined, base: 200,  max: 200,   range: undefined,           multiplier: 2 },
  { effect: ' damage from enemies', name: 'protection', valMin: -2, valMax: -2, occurrence: 'AS    ', qlvl: 6,   steps: undefined, base: 400,  max: 400,   range: undefined,           multiplier: 4 },
  { effect: ' damage from enemies', name: 'absorbtion', valMin: -3, valMax: -3, occurrence: 'AS    ', qlvl: 12,  steps: undefined, base: 1001, max: 1001,  range: undefined,           multiplier: 10 },
  { effect: ' damage from enemies', name: 'deflection', valMin: -4, valMax: -4, occurrence: 'A     ', qlvl: 20,  steps: undefined, base: 2500, max: 2500,  range: undefined,           multiplier: 15 },
  { effect: ' damage from enemies', name: 'osmosis',    valMin: -5, valMax: -6, occurrence: 'A     ', qlvl: 50,  steps: 1,         base: 7500, max: 10000, range: 2500,                multiplier: 20 },

  { effect: ' fire damage', name: 'flame',   valMin: 1,  valMax: 3,  occurrence: '    B ', qlvl: 1,  steps: undefined, base: 2000, max: undefined, range: undefined, multiplier: 2 },
  { effect: ' fire damage', name: 'fire',    valMin: 1,  valMax: 6,  occurrence: '    B ', qlvl: 11, steps: undefined, base: 4000, max: undefined, range: undefined, multiplier: 4 },
  { effect: ' fire damage', name: 'burning', valMin: 1,  valMax: 16, occurrence: '    B ', qlvl: 35, steps: undefined, base: 6000, max: undefined, range: undefined, multiplier: 6 },
  // Prefix: { effect: 'fire damage', name: 'flaming', valMin: 1,  valMax: 10, occurrence: '  WT  ', qlvl: 7,  steps: undefined, base: 5000, max: undefined, range: undefined, multiplier: 2 },

  { effect: ' lightning damage', name: 'shock',      valMin: 1,  valMax: 6,  occurrence: '    B ', qlvl: 13, steps: undefined, base: 6000,   max: undefined, range: undefined, multiplier: 2 },
  { effect: ' lightning damage', name: 'lightning',  valMin: 1,  valMax: 10, occurrence: '    B ', qlvl: 21, steps: undefined, base: 8000,   max: undefined, range: undefined, multiplier: 4 },
  { effect: ' lightning damage', name: 'thunder',    valMin: 1,  valMax: 20, occurrence: '    B ', qlvl: 60, steps: undefined, base: 12000,  max: undefined, range: undefined, multiplier: 6 },
  // Prefix: { effect: 'lightning damage', name: 'lightning',  valMin: 2,  valMax: 20, occurrence: '  WT  ', qlvl: 18, steps: undefined, base: 10000,  max: undefined, range: undefined, multiplier: 2 },

  { effect: '% Steal Life', name: 'the leech',  valMin: 3,  valMax: 3,  occurrence: '  W   ', qlvl: 8,  steps: undefined, base: 7500,   max: undefined, range: undefined, multiplier: 3 },
  { effect: '% Steal Life', name: 'blood',      valMin: 5,  valMax: 5,  occurrence: '  W   ', qlvl: 19, steps: undefined, base: 15000,  max: undefined, range: undefined, multiplier: 3 },

  { effect: '% Steal Mana', name: 'the bat',  valMin: 3,  valMax: 3,  occurrence: '  W   ', qlvl: 8,  steps: undefined, base: 7500,   max: undefined, range: undefined, multiplier: 3 },
  { effect: '% Steal Mana', name: 'vampires', valMin: 5,  valMax: 5,  occurrence: '  W   ', qlvl: 19, steps: undefined, base: 15000,  max: undefined, range: undefined, multiplier: 3 },

  // These have extra rules in Hellfire
  { effect: ' to target\'s armor', name: 'piercing',   valMin: -6,  valMax: -2, occurrence: '  W B ', qlvl: 1,  steps: undefined, base: 1000,  max: undefined, range: undefined, multiplier: 3 },
  { effect: ' to target\'s armor', name: 'puncturing', valMin: -12, valMax: -4, occurrence: '  W B ', qlvl: 9,  steps: undefined, base: 2000,  max: undefined, range: undefined, multiplier: 6 },
  { effect: ' to target\'s armor', name: 'bashing',    valMin: -24, valMax: -8, occurrence: '  W   ', qlvl: 17, steps: undefined, base: 4000,  max: undefined, range: undefined, multiplier: 12 },

  { effect: '% Light Radius', name: 'the dark',   valMin: -40,  valMax: -40,  occurrence: 'A W  J', qlvl: 6, steps: undefined, base: undefined,  max: undefined, range: undefined, multiplier: -3 },
  { effect: '% Light Radius', name: 'the night',  valMin: -20,  valMax: -20,  occurrence: 'A W  J', qlvl: 3, steps: undefined, base: undefined,  max: undefined, range: undefined, multiplier: -2 },
  { effect: '% Light Radius', name: 'light',      valMin: 20,   valMax: 20,   occurrence: 'A W  J', qlvl: 4, steps: undefined, base: 750,   max: undefined, range: undefined, multiplier: 2 },
  { effect: '% Light Radius', name: 'radiance',   valMin: 40,   valMax: 40,   occurrence: 'A W  J', qlvl: 8, steps: undefined, base: 1500,  max: undefined, range: undefined, multiplier: 3 },

  { effect: 'Attack', name: 'readiness',  value: 'quick',   occurrence: '  WTB ', qlvl: 1,  steps: undefined, base: 2000,   max: undefined,  range: undefined, multiplier: 2 },
  { effect: 'Attack', name: 'swiftness',  value: 'fast',    occurrence: '  WTB ', qlvl: 10, steps: undefined, base: 4000,   max: undefined,  range: undefined, multiplier: 4 },
  { effect: 'Attack', name: 'speed',      value: 'faster',  occurrence: '  WT  ', qlvl: 19, steps: undefined, base: 8000,   max: undefined,  range: undefined, multiplier: 8 },
  { effect: 'Attack', name: 'haste',      value: 'fastest', occurrence: '  WT  ', qlvl: 27, steps: undefined, base: 16000,  max: undefined,  range: undefined, multiplier: 16 },

  { effect: 'Hit Recovery', name: 'balance',    value: 'fast',    occurrence: 'A    J', qlvl: 1,  steps: undefined, base: 2000,  max: undefined,  range: undefined, multiplier: 2 },
  { effect: 'Hit Recovery', name: 'stability',  value: 'faster',  occurrence: 'A    J', qlvl: 10, steps: undefined, base: 4000,  max: undefined,  range: undefined, multiplier: 4 },
  { effect: 'Hit Recovery', name: 'harmony',    value: 'fastest', occurrence: 'A    J', qlvl: 20, steps: undefined, base: 8000,  max: undefined,  range: undefined, multiplier: 8 },

  { effect: 'Modified Durability', name: 'fragility',    value: undefined,                   occurrence: 'ASW   ', qlvl: 3,  steps: undefined, base: undefined,  max: undefined,  range: undefined, multiplier: -4 },
  { effect: '% Durability', name: 'brittleness',    valMin: -75,  valMax: -26,  occurrence: 'ASW   ', qlvl: 1,  steps: undefined, base: undefined,  max: undefined,  range: undefined, multiplier: -2 },
  { effect: '% Durability', name: 'sturdiness',     valMin: 26,   valMax: 75,   occurrence: 'ASWt  ', qlvl: 1,  steps: undefined, base: 100,  max: undefined,  range: undefined, multiplier: 2 },
  { effect: '% Durability', name: 'craftsmanship',  valMin: 26,   valMax: 75,   occurrence: 'ASWt  ', qlvl: 6,  steps: undefined, base: 200,  max: undefined,  range: undefined, multiplier: 2 },
  { effect: '% Durability', name: 'structure',      valMin: 26,   valMax: 75,   occurrence: 'ASWt  ', qlvl: 12, steps: undefined, base: 300,  max: undefined,  range: undefined, multiplier: 2 },
  { effect: '% Durability', name: 'many',           valMin: 26,   valMax: 75,   occurrence: '    B ', qlvl: 3,  steps: undefined, base: 750,  max: undefined,  range: undefined, multiplier: 2 },
  { effect: '% Durability', name: 'plenty',         valMin: 26,   valMax: 75,   occurrence: '    B ', qlvl: 7,  steps: undefined, base: 1500, max: undefined,  range: undefined, multiplier: 3 },
  { effect: 'Indestructible', name: 'the ages',     value: undefined,    occurrence: 'ASWt  ', qlvl: 25, steps: undefined, base: 600,  max: undefined,  range: undefined, multiplier: 5 },

  { effect: 'knocks target back',               name: 'the bear',     occurrence: '  WTB ', qlvl: 5,  steps: undefined, base: 750,  max: undefined,  range: undefined, multiplier: 2 },
  { effect: 'fast block',                       name: 'blocking',     occurrence: ' S    ', qlvl: 5,  steps: undefined, base: 4000, max: undefined,  range: undefined, multiplier: 4 },
  { effect: 'absorbs half trap damage',         name: 'thieves',      occurrence: 'AS   J', qlvl: 11, steps: undefined, base: 1500, max: undefined,  range: undefined, multiplier: 2 },
  { effect: 'attacker takes damage 1-3',        name: 'thorns',       occurrence: 'AS    ', qlvl: 1,  steps: undefined, base: 500,  max: undefined,  range: undefined, multiplier: 2 },
  { effect: '5% chance of doing x3 damage',     name: 'devastation',  occurrence: '  WtB ', qlvl: 1,  steps: undefined, base: 1200, max: undefined,  range: undefined, multiplier: 3 },
  { effect: 'each swing does x0-6 damage',      name: 'jester\'s',    occurrence: '  W   ', qlvl: 7,  steps: undefined, base: 1200, max: undefined,  range: undefined, multiplier: 3 },
  { effect: 'x2 damage to monster, x1 to user', name: 'peril',        occurrence: '  WtB ', qlvl: 5,  steps: undefined, base: 500,  max: undefined,  range: undefined, multiplier: 1 },

  { effect: ' to mana', name: 'corruption', valMin: -25,  valMax: -11,  occurrence: 'ASW   ', qlvl: 5,   steps: undefined, base: -1000, max: undefined, range: undefined, multiplier: 2 },
]

