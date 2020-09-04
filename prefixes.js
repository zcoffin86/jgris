var prefixes = [
  { effect: ' to mana', name: 'hyena\'s',      valMin: -25,  valMax: -11,  occurrence: '   T J', qlvl: 4,   steps: 14,  base: 100,    max: 1000,  range: 900, multiplier: -2 },
  { effect: ' to mana', name: 'frog\'s',       valMin: -10,  valMax: -1,   occurrence: '   T J', qlvl: 1,   steps: undefined, base: undefined, max: undefined, range: undefined, multiplier: -2 },
  { effect: ' to mana', name: 'spider\'s',     valMin: 10,   valMax: 15,   occurrence: '   T J', qlvl: 1,   steps: 5,   base: 500,    max: 1000,  range: 900,   multiplier: 2 },
  { effect: ' to mana', name: 'raven\'s',      valMin: 15,   valMax: 20,   occurrence: '   T J', qlvl: 5,   steps: 5,   base: 1100,   max: 2000,  range: 900,   multiplier: 3 },
  { effect: ' to mana', name: 'snake\'s',      valMin: 21,   valMax: 30,   occurrence: '   T J', qlvl: 9,   steps: 9,   base: 2100,   max: 4000,  range: 1900,  multiplier: 5 },
  { effect: ' to mana', name: 'serpent\'s',    valMin: 30,   valMax: 40,   occurrence: '   T J', qlvl: 15,  steps: 10,  base: 4100,   max: 6000,  range: 1900,  multiplier: 7 },
  { effect: ' to mana', name: 'drake\'s',      valMin: 41,   valMax: 50,   occurrence: '   T J', qlvl: 21,  steps: 9,   base: 6100,   max: 10000, range: 3900,  multiplier: 9 },
  { effect: ' to mana', name: 'dragon\'s',     valMin: 51,   valMax: 60,   occurrence: '   T J', qlvl: 27,  steps: 9,   base: 10100,  max: 15000, range: 4900,  multiplier: 11 },
  // Hellfire only:
  //{ effect: ' to mana', name: 'wyrm',       valMin: 61,   valMax: 80,   occurrence: '   t  ', qlvl: 35,  steps: 19,  base: 15100,  max: 19000, range: 3900,  multiplier: 12 },
  //{ effect: ' to mana', name: 'hydra',      valMin: 81,   valMax: 100,  occurrence: '   t  ', qlvl: 60,  steps: 19,  base: 19100,  max: 30000, range: 10900, multiplier: 13 },

  // There is a minimum increase of 1 in AC. That is, even if the percentage will give an increase to AC less than one, it will be increased by at least one. Due to a bug, any decrease in AC less than 1 will be transformed into a positive increase by 1
  { effect: '% AC', name: 'vulnerable', valMin: -100, valMax: -51,  occurrence: 'AS    ', qlvl: 3,  steps: undefined,  base: undefined,  max: undefined, range: undefined, multiplier: -3 },
  { effect: '% AC', name: 'rusted',     valMin: -50,  valMax: -25,  occurrence: 'AS    ', qlvl: 1,  steps: undefined,  base: undefined,  max: undefined, range: undefined, multiplier: -2 },
  { effect: '% AC', name: 'fine',       valMin: 20,   valMax: 30,   occurrence: 'AS    ', qlvl: 1,  steps: 10,  base: 20,   max: 100,   range: 80,  multiplier: 2 },
  { effect: '% AC', name: 'strong',     valMin: 31,   valMax: 40,   occurrence: 'AS    ', qlvl: 3,  steps: 9,   base: 120,  max: 200,   range: 80,  multiplier: 3 },
  { effect: '% AC', name: 'grand',      valMin: 41,   valMax: 55,   occurrence: 'AS    ', qlvl: 6,  steps: 14,  base: 220,  max: 300,   range: 80,  multiplier: 5 },
  { effect: '% AC', name: 'valiant',    valMin: 56,   valMax: 70,   occurrence: 'AS    ', qlvl: 10, steps: 14,  base: 320,  max: 400,   range: 80,  multiplier: 7 },
  { effect: '% AC', name: 'glorious',   valMin: 71,   valMax: 90,   occurrence: 'AS    ', qlvl: 14, steps: 19,  base: 420,  max: 600,   range: 180, multiplier: 9 },
  { effect: '% AC', name: 'blessed',    valMin: 91,   valMax: 110,  occurrence: 'AS    ', qlvl: 19, steps: 19,  base: 620,  max: 800,   range: 180, multiplier: 11 },
  { effect: '% AC', name: 'saintly',    valMin: 111,  valMax: 130,  occurrence: 'AS    ', qlvl: 24, steps: 19,  base: 820,  max: 1200,  range: 380, multiplier: 13 },
  { effect: '% AC', name: 'awesome',    valMin: 131,  valMax: 150,  occurrence: 'AS    ', qlvl: 28, steps: 19,  base: 1220, max: 2000,  range: 780, multiplier: 15 },
  { effect: '% AC', name: 'holy',       valMin: 151,  valMax: 170,  occurrence: 'AS    ', qlvl: 35, steps: 19,  base: 5220, max: 6000,  range: 800, multiplier: 17 },
  { effect: '% AC', name: 'godly',      valMin: 171,  valMax: 200,  occurrence: 'AS    ', qlvl: 60, steps: 29,  base: 6220, max: 7000,  range: 800, multiplier: 20 },

  { effect: '% To Hit', name: 'tin',      valMin: -10,  valMax: -6,   occurrence: '  W BJ', qlvl: 3,  steps: undefined,  base: undefined, max: undefined,  range: undefined, multiplier: -3 },
  { effect: '% To Hit', name: 'brass',    valMin: -5,   valMax: -1,   occurrence: '  W BJ', qlvl: 1,  steps: undefined,  base: undefined, max: undefined,  range: undefined, multiplier: -2 },
  { effect: '% To Hit', name: 'bronze',   valMin: 1,    valMax: 5,    occurrence: '  W BJ', qlvl: 1,  steps: 4,   base: 100,    max: 500,   range: 400,   multiplier: 2 },
  { effect: '% To Hit', name: 'iron',     valMin: 6,    valMax: 10,   occurrence: '  W BJ', qlvl: 4,  steps: 4,   base: 600,    max: 1000,  range: 400,   multiplier: 3 },
  { effect: '% To Hit', name: 'steel',    valMin: 11,   valMax: 15,   occurrence: '  W BJ', qlvl: 6,  steps: 4,   base: 1100,   max: 1500,  range: 400,   multiplier: 5 },
  { effect: '% To Hit', name: 'silver',   valMin: 16,   valMax: 20,   occurrence: '  W BJ', qlvl: 9,  steps: 4,   base: 1600,   max: 2000,  range: 400,   multiplier: 7 },
  { effect: '% To Hit', name: 'gold',     valMin: 21,   valMax: 30,   occurrence: '  W BJ', qlvl: 12, steps: 9,   base: 2100,   max: 3000,  range: 900,   multiplier: 9 },
  { effect: '% To Hit', name: 'platinum', valMin: 31,   valMax: 40,   occurrence: '  W B ', qlvl: 16, steps: 9,   base: 3100,   max: 4000,  range: 900,   multiplier: 11 },
  { effect: '% To Hit', name: 'mithril',  valMin: 41,   valMax: 60,   occurrence: '  W B ', qlvl: 20, steps: 19,  base: 4100,   max: 6000,  range: 1900,  multiplier: 13 },
  { effect: '% To Hit', name: 'meteoric', valMin: 61,   valMax: 80,   occurrence: '  W B ', qlvl: 23, steps: 19,  base: 6100,   max: 10000, range: 3900,  multiplier: 15 },
  { effect: '% To Hit', name: 'weird',    valMin: 81,   valMax: 100,  occurrence: '  W B ', qlvl: 35, steps: 19,  base: 10100,  max: 14000, range: 3900,  multiplier: 17 },
  { effect: '% To Hit', name: 'strange',  valMin: 101,  valMax: 150,  occurrence: '  W B ', qlvl: 60, steps: 49,  base: 14100,  max: 20000, range: 5900,  multiplier: 20 },

  // Damage value is used for price calculations
  { effect: 'v1% To Hit, v2% Dmg Done', name: 'clumsy',       valMin: -10,  valMax: -6,   val2Min: -75, val2Max: -50, occurrence: '  WTB ', qlvl: 5,  steps: undefined,  base: undefined,  max: undefined, range: undefined,  multiplier: -7 },
  { effect: 'v1% To Hit, v2% Dmg Done', name: 'dull',         valMin: -5,   valMax: -1,   val2Min: -45, val2Max: -25, occurrence: '  WTB ', qlvl: 1,  steps: undefined,  base: undefined,  max: undefined, range: undefined,  multiplier: -5 },
  { effect: 'v1% To Hit, v2% Dmg Done', name: 'sharp',        valMin: 1,    valMax: 5,    val2Min: 20,  val2Max: 35,  occurrence: '  WTB ', qlvl: 1,  steps: 15,  base: 350,   max: 950,    range: 600,   multiplier: 5 },
  { effect: 'v1% To Hit, v2% Dmg Done', name: 'fine',         valMin: 6,    valMax: 10,   val2Min: 36,  val2Max: 50,  occurrence: '  WTB ', qlvl: 6,  steps: 14,  base: 1100,  max: 1700,   range: 600,   multiplier: 7 },
  { effect: 'v1% To Hit, v2% Dmg Done', name: 'warrior\'s',   valMin: 11,   valMax: 15,   val2Min: 51,  val2Max: 65,  occurrence: '  WTB ', qlvl: 10, steps: 14,  base: 1850,  max: 2450,   range: 600,   multiplier: 13 },
  { effect: 'v1% To Hit, v2% Dmg Done', name: 'soldier\'s',   valMin: 16,   valMax: 20,   val2Min: 66,  val2Max: 80,  occurrence: '  WT  ', qlvl: 15, steps: 14,  base: 2600,  max: 3950,   range: 1350,  multiplier: 17 },
  { effect: 'v1% To Hit, v2% Dmg Done', name: 'lord\'s',      valMin: 21,   valMax: 30,   val2Min: 81,  val2Max: 95,  occurrence: '  WT  ', qlvl: 19, steps: 14,  base: 4100,  max: 5950,   range: 1850,  multiplier: 21 },
  { effect: 'v1% To Hit, v2% Dmg Done', name: 'knight\'s',    valMin: 31,   valMax: 40,   val2Min: 96,  val2Max: 110, occurrence: '  WT  ', qlvl: 23, steps: 14,  base: 6100,  max: 8450,   range: 2350,  multiplier: 26 },
  { effect: 'v1% To Hit, v2% Dmg Done', name: 'master\'s',    valMin: 41,   valMax: 50,   val2Min: 111, val2Max: 125, occurrence: '  WT  ', qlvl: 28, steps: 14,  base: 8600,  max: 13000,  range: 4400,  multiplier: 30 },
  { effect: 'v1% To Hit, v2% Dmg Done', name: 'champion\'s',  valMin: 51,   valMax: 75,   val2Min: 126, val2Max: 150, occurrence: '  WT  ', qlvl: 40, steps: 24,  base: 15200, max: 24000,  range: 8800,  multiplier: 33 },
  { effect: 'v1% To Hit, v2% Dmg Done', name: 'king\'s',      valMin: 76,   valMax: 100,  val2Min: 151, val2Max: 175, occurrence: '  WT  ', qlvl: 28, steps: 24,  base: 24100, max: 35000,  range: 10900, multiplier: 38 },
  // Hellfire only:
  //{ effect: '% To Hit, % Dmg Done', name: 'doppelganger\'s',  valMin: 21,   valMax: 30,   val2Min: 81,  val2Max: 95,  occurrence: '  WT  ', qlvl: 11, steps: 14,  base: 2000,  max: 2400,   range: 400,   multiplier: 10 },

  { effect: '% Dmg Done', name: 'useless',      valMin: -100, valMax: -100,      occurrence: '  WtB ', qlvl: 5,   steps: undefined,  base: undefined,  max: undefined, range: undefined,  multiplier: -8 },
  { effect: '% Dmg Done', name: 'bent',         valMin: -75,  valMax: -50,       occurrence: '  WtB ', qlvl: 3,   steps: undefined,  base: undefined,  max: undefined, range: undefined,  multiplier: -4 },
  { effect: '% Dmg Done', name: 'weak',         valMin: -45,  valMax: -25,       occurrence: '  WtB ', qlvl: 1,   steps: undefined,  base: undefined,  max: undefined, range: undefined,  multiplier: -3 },
  { effect: '% Dmg Done', name: 'jagged',       valMin: 20,   valMax: 35,        occurrence: '  WtB ', qlvl: 4,   steps: 15,  base: 250,   max: 450,    range: 200,  multiplier: 3 },
  { effect: '% Dmg Done', name: 'deadly',       valMin: 36,   valMax: 50,        occurrence: '  WtB ', qlvl: 6,   steps: 14,  base: 500,   max: 700,    range: 200,  multiplier: 4 },
  { effect: '% Dmg Done', name: 'heavy',        valMin: 51,   valMax: 65,        occurrence: '  WtB ', qlvl: 9,   steps: 14,  base: 750,   max: 950,    range: 200,  multiplier: 5 },
  { effect: '% Dmg Done', name: 'vicious',      valMin: 66,   valMax: 80,        occurrence: '  WtB ', qlvl: 12,  steps: 14,  base: 1000,  max: 1450,   range: 450,  multiplier: 8 },
  { effect: '% Dmg Done', name: 'brutal',       valMin: 81,   valMax: 95,        occurrence: '  WtB ', qlvl: 16,  steps: 14,  base: 1500,  max: 1950,   range: 450,  multiplier: 10 },
  { effect: '% Dmg Done', name: 'massive',      valMin: 96,   valMax: 110,       occurrence: '  WtB ', qlvl: 20,  steps: 14,  base: 2000,  max: 2450,   range: 450,  multiplier: 13 },
  { effect: '% Dmg Done', name: 'savage',       valMin: 111,  valMax: 125,       occurrence: '  W B ', qlvl: 23,  steps: 14,  base: 2500,  max: 3000,   range: 500,  multiplier: 15 },
  { effect: '% Dmg Done', name: 'ruthless',     valMin: 126,  valMax: 150,       occurrence: '  W B ', qlvl: 35,  steps: 24,  base: 10100, max: 15000,  range: 4900, multiplier: 17 },
  { effect: '% Dmg Done', name: 'merciless',    valMin: 151,  valMax: 175,       occurrence: '  W B ', qlvl: 60,  steps: 24,  base: 15000, max: 20000,  range: 5000, multiplier: 20 },
  //Hellfire only:
  // Bonus decreases by 5% each hit. when reaching -100%, the item is destroyed
  //{ effect: '% Dmg Done', name: 'decay',        valMin: 150,  valMax: 250,       occurrence: '  WtB ', qlvl: 1,   steps: undefined,  base: 200,  max: 200, range: 0, multiplier: 2 },
  // Also has from -30% to -70% lower durability
  //{ effect: '% Dmg Done', name: 'crystalline',  valMin: 200,  valMax: 280,       occurrence: '  W   ', qlvl: 5,   steps: 79,  base: 1000,  max: 3000,   range: 2000, multiplier: 3 },

  { effect: '% Resist Magic', name: 'white',    valMin: 10, valMax: 20, occurrence: 'ASWTBJ', qlvl: 4,  steps: 10, base: 500,   max: 1500,  range: 1000, multiplier: 2 },
  { effect: '% Resist Magic', name: 'pearl',    valMin: 21, valMax: 30, occurrence: 'ASWTBJ', qlvl: 10, steps: 9,  base: 2100,  max: 3000,  range: 900,  multiplier: 2 },
  { effect: '% Resist Magic', name: 'ivory',    valMin: 31, valMax: 40, occurrence: 'ASWTBJ', qlvl: 16, steps: 9,  base: 3100,  max: 4000,  range: 900,  multiplier: 2 },
  { effect: '% Resist Magic', name: 'crystal',  valMin: 41, valMax: 50, occurrence: 'ASWTBJ', qlvl: 20, steps: 9,  base: 8200,  max: 12000, range: 3800, multiplier: 3 },
  { effect: '% Resist Magic', name: 'diamond',  valMin: 51, valMax: 60, occurrence: 'ASWTBJ', qlvl: 26, steps: 9,  base: 17100, max: 20000, range: 2900, multiplier: 5 },

  { effect: '% Resist Fire', name: 'red',     valMin: 10, valMax: 20, occurrence: 'ASWTBJ', qlvl: 4,  steps: 10, base: 500,   max: 1500,  range: 1000, multiplier: 2 },
  { effect: '% Resist Fire', name: 'krimson', valMin: 21, valMax: 30, occurrence: 'ASWTBJ', qlvl: 10, steps: 9,  base: 2100,  max: 3000,  range: 900,  multiplier: 2 },
  { effect: '% Resist Fire', name: 'crimson', valMin: 31, valMax: 40, occurrence: 'ASWTBJ', qlvl: 16, steps: 9,  base: 3100,  max: 4000,  range: 900,  multiplier: 2 },
  { effect: '% Resist Fire', name: 'garnet',  valMin: 41, valMax: 50, occurrence: 'ASWTBJ', qlvl: 20, steps: 9,  base: 8200,  max: 12000, range: 3800, multiplier: 3 },
  { effect: '% Resist Fire', name: 'ruby',    valMin: 51, valMax: 60, occurrence: 'ASWTBJ', qlvl: 26, steps: 9,  base: 17100, max: 20000, range: 2900, multiplier: 5 },

  { effect: '% Resist Lightning', name: 'blue',     valMin: 10, valMax: 20, occurrence: 'ASWTBJ', qlvl: 4,  steps: 10, base: 500,   max: 1500,  range: 1000, multiplier: 2 },
  { effect: '% Resist Lightning', name: 'azure',    valMin: 21, valMax: 30, occurrence: 'ASWTBJ', qlvl: 10, steps: 9,  base: 2100,  max: 3000,  range: 900,  multiplier: 2 },
  { effect: '% Resist Lightning', name: 'lapis',    valMin: 31, valMax: 40, occurrence: 'ASWTBJ', qlvl: 16, steps: 9,  base: 3100,  max: 4000,  range: 900,  multiplier: 2 },
  { effect: '% Resist Lightning', name: 'cobalt',   valMin: 41, valMax: 50, occurrence: 'ASWTBJ', qlvl: 20, steps: 9,  base: 8200,  max: 12000, range: 3800, multiplier: 3 },
  { effect: '% Resist Lightning', name: 'sapphire', valMin: 51, valMax: 60, occurrence: 'ASWTBJ', qlvl: 26, steps: 9,  base: 17100, max: 20000, range: 2900, multiplier: 5 },

  { effect: '% Resist All', name: 'topaz',    valMin: 10, valMax: 25, occurrence: 'ASWTBJ', qlvl: 8,  steps: 5, base: 2000,  max: 5000,  range: 3000,  multiplier: 3 },
  { effect: '% Resist All', name: 'amber',    valMin: 16, valMax: 20, occurrence: 'ASWTBJ', qlvl: 12, steps: 4, base: 7400,  max: 10000, range: 2600,  multiplier: 3 },
  { effect: '% Resist All', name: 'jade',     valMin: 21, valMax: 30, occurrence: 'ASWTBJ', qlvl: 18, steps: 9, base: 11000, max: 15000, range: 4000,  multiplier: 3 },
  { effect: '% Resist All', name: 'obsidian', valMin: 31, valMax: 40, occurrence: 'ASWTBJ', qlvl: 24, steps: 9, base: 24000, max: 40000, range: 16000, multiplier: 4 },
  { effect: '% Resist All', name: 'emerald',  valMin: 41, valMax: 50, occurrence: ' SWTB ', qlvl: 31, steps: 9, base: 61000, max: 75000, range: 14000, multiplier: 7 },

  { effect: ' Spell Levels', name: 'Angel\'s',      value: 1, occurrence: '   T  ', qlvl: 15, steps: undefined, base: 25000, max: undefined, range: undefined, multiplier: 2 },
  { effect: ' Spell Levels', name: 'Arch-Angel\'s', value: 2, occurrence: '   T  ', qlvl: 25, steps: undefined, base: 50000, max: undefined, range: undefined, multiplier: 3 },

  { effect: 'x charges', name: 'plentiful', value: 2, occurrence: '   T  ', qlvl: 4, steps: undefined, base: 2000, max: undefined, range: undefined, multiplier: 2 },
  { effect: 'x charges', name: 'bountiful', value: 3, occurrence: '   T  ', qlvl: 9, steps: undefined, base: 3000, max: undefined, range: undefined, multiplier: 3 },
]

