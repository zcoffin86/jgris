  var baseArmors = [
    { name: 'Rags',                  occurrence: 'A', acMin: 2,   acMax: 6,   dur: 6,   reqs: {},         price: 5,     qlvl: 1  },
    { name: 'Cape',                  occurrence: 'A', acMin: 1,   acMax: 5,   dur: 12,  reqs: {},         price: 10,    qlvl: 1  },
    { name: 'Cloak',                 occurrence: 'A', acMin: 3,   acMax: 7,   dur: 18,  reqs: {},         price: 40,    qlvl: 2  },
    { name: 'Robe',                  occurrence: 'A', acMin: 4,   acMax: 7,   dur: 24,  reqs: {},         price: 75,    qlvl: 3  },
    { name: 'Quilted Armor',         occurrence: 'A', acMin: 7,   acMax: 10,  dur: 30,  reqs: {},         price: 200,   qlvl: 4  },
    { name: 'Leather Armor',         occurrence: 'A', acMin: 19,  acMax: 13,  dur: 35,  reqs: {},         price: 300,   qlvl: 6  },
    { name: 'Hard Leather Armor',    occurrence: 'A', acMin: 11,  acMax: 14,  dur: 40,  reqs: {},         price: 450,   qlvl: 7  },
    { name: 'Studded Leather Armor', occurrence: 'A', acMin: 15,  acMax: 17,  dur: 45,  reqs: {str: 20},  price: 700,   qlvl: 9  },
    { name: 'Ring Mail',             occurrence: 'A', acMin: 17,  acMax: 20,  dur: 50,  reqs: {str: 25},  price: 900,   qlvl: 11 },
    { name: 'Chain Mail',            occurrence: 'A', acMin: 18,  acMax: 22,  dur: 55,  reqs: {str: 30},  price: 1250,  qlvl: 13 },
    { name: 'Scale Mail',            occurrence: 'A', acMin: 23,  acMax: 28,  dur: 60,  reqs: {str: 35},  price: 2300,  qlvl: 15 },
    { name: 'Splint Mail',           occurrence: 'A', acMin: 30,  acMax: 35,  dur: 65,  reqs: {str: 40},  price: 3250,  qlvl: 17 },
    { name: 'Breast Plate',          occurrence: 'A', acMin: 20,  acMax: 24,  dur: 80,  reqs: {str: 40},  price: 2800,  qlvl: 16 },
    { name: 'Plate Mail',            occurrence: 'A', acMin: 42,  acMax: 50,  dur: 75,  reqs: {str: 60},  price: 4600,  qlvl: 19 },
    { name: 'Field Plate',           occurrence: 'A', acMin: 40,  acMax: 45,  dur: 80,  reqs: {str: 65},  price: 5800,  qlvl: 21 },
    { name: 'Gothic Plate',          occurrence: 'A', acMin: 50,  acMax: 60,  dur: 100, reqs: {str: 80},  price: 8000,  qlvl: 23 },
    { name: 'Full Plate Mail',       occurrence: 'A', acMin: 60,  acMax: 75,  dur: 90,  reqs: {str: 90},  price: 6500,  qlvl: 25 }
  ]
  var baseAxes = [
    { name: 'Small Axe',  occurrence: 'W', dmgMin: 2,  dmgMax: 10, dur: 24, reqs: {},        price: 150,   qlvl: 2  },
    { name: 'Axe',        occurrence: 'W', dmgMin: 4,  dmgMax: 12, dur: 32, reqs: {str: 22}, price: 450,   qlvl: 4  },
    { name: 'Large Axe',  occurrence: 'W', dmgMin: 6,  dmgMax: 16, dur: 40, reqs: {str: 30}, price: 750,   qlvl: 6  },
    { name: 'Broad Axe',  occurrence: 'W', dmgMin: 8,  dmgMax: 20, dur: 50, reqs: {str: 50}, price: 1000,  qlvl: 8  },
    { name: 'Battle Axe', occurrence: 'W', dmgMin: 10, dmgMax: 25, dur: 60, reqs: {str: 65}, price: 1500,  qlvl: 10 },
    { name: 'Great Axe',  occurrence: 'W', dmgMin: 12, dmgMax: 30, dur: 75, reqs: {str: 80}, price: 2500,  qlvl: 12 },
  ]
  var baseBows = [
    { name: 'Short Bow',         occurrence: 'B', dmgMin: 1,      dmgMax: 4,      dur: 30,      reqs: {},                 price: 100,      qlvl: 1    },
    { name: 'Long Bow',          occurrence: 'B', dmgMin: 1,      dmgMax: 6,      dur: 35,      reqs: {str: 25, dex: 30}, price: 250,      qlvl: 5    },
    { name: 'Hunter\'s Bow',     occurrence: 'B', dmgMin: 2,      dmgMax: 5,      dur: 40,      reqs: {str: 20, dex: 35}, price: 350,      qlvl: 3    },
    { name: 'Composite Bow',     occurrence: 'B', dmgMin: 3,      dmgMax: 6,      dur: 45,      reqs: {str: 25, dex: 40}, price: 600,      qlvl: 7    },
    { name: 'Short Battle Bow',  occurrence: 'B', dmgMin: 3,      dmgMax: 7,      dur: 45,      reqs: {str: 30, dex: 50}, price: 750,      qlvl: 9    },
    { name: 'Long Battle Bow',   occurrence: 'B', dmgMin: 1,      dmgMax: 10,     dur: 50,      reqs: {str: 30, dex: 60}, price: 1000,     qlvl: 11   },
    { name: 'Short War Bow',     occurrence: 'B', dmgMin: 4,      dmgMax: 8,      dur: 55,      reqs: {str: 35, dex: 70}, price: 1500,     qlvl: 15   },
    { name: 'Long War Bow',      occurrence: 'B', dmgMin: 1,      dmgMax: 14,     dur: 60,      reqs: {str: 45, dex: 80}, price: 2000,     qlvl: 19   },
  ]
  var baseClubs = [
    { name: 'Club',          occurrence: 'W', dmgMin: 1,      dmgMax: 6,      dur: 20,      reqs: {},             price: 20,       qlvl: 1    },
    { name: 'Spiked Club',   occurrence: 'W', dmgMin: 3,      dmgMax: 6,      dur: 20,      reqs: {str: 18},      price: 225,      qlvl: 4    },
    { name: 'Mace',          occurrence: 'W', dmgMin: 1,      dmgMax: 8,      dur: 32,      reqs: {str: 16},      price: 200,      qlvl: 2    },
    { name: 'Morning Star',  occurrence: 'W', dmgMin: 1,      dmgMax: 10,     dur: 40,      reqs: {str: 26},      price: 300,      qlvl: 3    },
    { name: 'Flail',         occurrence: 'W', dmgMin: 2,      dmgMax: 12,     dur: 36,      reqs: {str: 30},      price: 500,      qlvl: 7    },
    { name: 'War Hammer',    occurrence: 'W', dmgMin: 5,      dmgMax: 9,      dur: 50,      reqs: {str: 40},      price: 600,      qlvl: 5    },
    { name: 'Maul',          occurrence: 'W', dmgMin: 6,      dmgMax: 20,     dur: 50,      reqs: {str: 50},      price: 900,      qlvl: 10   },
  ]
  var baseHelms = [
    { name: 'Cap',         occurrence: 'A', acMin: 1,      acMax: 3,      dur: 15,      reqs: {},         price: 15,      qlvl: 1    },
    { name: 'Skull Cap',   occurrence: 'A', acMin: 2,      acMax: 4,      dur: 20,      reqs: {},         price: 25,      qlvl: 4    },
    { name: 'Helm',        occurrence: 'A', acMin: 4,      acMax: 6,      dur: 30,      reqs: {str: 25},  price: 40,      qlvl: 8    },
    { name: 'Full Helm',   occurrence: 'A', acMin: 6,      acMax: 8,      dur: 35,      reqs: {str: 35},  price: 90,      qlvl: 12   },
    { name: 'Crown',       occurrence: 'A', acMin: 8,      acMax: 12,     dur: 40,      reqs: {},         price: 200,     qlvl: 16   },
    { name: 'Great Helm',  occurrence: 'A', acMin: 10,     acMax: 15,     dur: 60,      reqs: {str: 50},  price: 400,     qlvl: 20   },
  ]
  var baseShields = [
    { name: 'Buckler',       occurrence: 'S', acMin: 1,      acMax: 5,      dur: 16,      reqs: {},             price: 30,      qlvl: 1    },
    { name: 'Small Shield',  occurrence: 'S', acMin: 3,      acMax: 8,      dur: 24,      reqs: {str: 25},      price: 90,      qlvl: 5    },
    { name: 'Large Shield',  occurrence: 'S', acMin: 5,      acMax: 10,     dur: 32,      reqs: {str: 40},      price: 200,     qlvl: 9    },
    { name: 'Kite Shield',   occurrence: 'S', acMin: 8,      acMax: 15,     dur: 40,      reqs: {str: 50},      price: 400,     qlvl: 14   },
    { name: 'Gothic Shield', occurrence: 'S', acMin: 14,     acMax: 18,     dur: 60,      reqs: {str: 80},      price: 2300,    qlvl: 23   },
    { name: 'Tower Shield',  occurrence: 'S', acMin: 12,     acMax: 20,     dur: 50,      reqs: {str: 60},      price: 850,     qlvl: 20   },
  ]
  var baseStaves = [
    { name: 'Short Staff',     occurrence: 'T', dmgMin: 2,      dmgMax: 4,      dur: 25,      reqs: {},         price: 30,      qlvl: 1    },
    { name: 'Long Staff',      occurrence: 'T', dmgMin: 4,      dmgMax: 8,      dur: 35,      reqs: {},         price: 100,     qlvl: 4    },
    { name: 'Composite Staff', occurrence: 'T', dmgMin: 5,      dmgMax: 10,     dur: 45,      reqs: {},         price: 500,     qlvl: 6    },
    { name: 'Quarter Staff',   occurrence: 'T', dmgMin: 6,      dmgMax: 12,     dur: 55,      reqs: {str: 20},  price: 1000,    qlvl: 9    },
    { name: 'War Staff',       occurrence: 'T', dmgMin: 8,      dmgMax: 16,     dur: 75,      reqs: {str: 30},  price: 1500,    qlvl: 12   },
  ]
  var baseSwords = [
    { name: 'Dagger',            occurrence: 'W', dmgMin: 1,      dmgMax: 4,      dur: 16,      reqs: {},                 price: 60,    qlvl: 1    },
    { name: 'Sword',             occurrence: 'W', dmgMin: 1,      dmgMax: 5,      dur: 8,       reqs: {str: 15, dex: 20}, price: 50,    qlvl: 255  },
    { name: 'Short Sword',       occurrence: 'W', dmgMin: 2,      dmgMax: 6,      dur: 24,      reqs: {str: 18},          price: 120,   qlvl: 1    },
    { name: 'Sabre',             occurrence: 'W', dmgMin: 1,      dmgMax: 8,      dur: 45,      reqs: {str: 17},          price: 170,   qlvl: 1    },
    { name: 'Scimitar',          occurrence: 'W', dmgMin: 3,      dmgMax: 7,      dur: 28,      reqs: {str: 23, dex: 23}, price: 200,   qlvl: 4    },
    { name: 'Blade',             occurrence: 'W', dmgMin: 3,      dmgMax: 8,      dur: 30,      reqs: {str: 25, dex: 30}, price: 280,   qlvl: 4    },
    { name: 'Falchion',          occurrence: 'W', dmgMin: 4,      dmgMax: 8,      dur: 20,      reqs: {dex: 30},          price: 250,   qlvl: 2    },
    { name: 'Long Sword',        occurrence: 'W', dmgMin: 2,      dmgMax: 10,     dur: 40,      reqs: {str: 30, dex: 30}, price: 350,   qlvl: 6    },
    { name: 'Claymore',          occurrence: 'W', dmgMin: 1,      dmgMax: 12,     dur: 36,      reqs: {str: 35},          price: 450,   qlvl: 5    },
    { name: 'Broad Sword',       occurrence: 'W', dmgMin: 4,      dmgMax: 12,     dur: 50,      reqs: {str: 40},          price: 750,   qlvl: 8    },
    { name: 'Bastard Sword',     occurrence: 'W', dmgMin: 6,      dmgMax: 15,     dur: 60,      reqs: {str: 50},          price: 1000,  qlvl: 10   },
    { name: 'Two-Handed Sword',  occurrence: 'W', dmgMin: 8,      dmgMax: 16,     dur: 75,      reqs: {str: 65},          price: 1800,  qlvl: 14   },
    { name: 'Great Sword',       occurrence: 'W', dmgMin: 10,     dmgMax: 20,     dur: 100,     reqs: {str: 75},          price: 3000,  qlvl: 17   },
  ]
  var baseJewelry = [
    { name: 'Ring',      occurrence: 'J', price: 1000,      qlvl: 5    },
    { name: 'Ring',      occurrence: 'J', price: 1000,      qlvl: 10   },
    { name: 'Ring',      occurrence: 'J', price: 1000,      qlvl: 15   },
    { name: 'Amulet',    occurrence: 'J', price: 1200,      qlvl: 8    },
    { name: 'Amulet',    occurrence: 'J', price: 1200,      qlvl: 16   },
  ]

