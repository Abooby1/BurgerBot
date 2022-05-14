import {getUserDataManager} from "./database.js"

const PlaceHolder = {
  name: "None",
  desc: "There is no active event currently...",

  earn: null
}

const RewardEvent = {
  name: "Reward Event",
  desc: "The reward event gives you rewards for using BurgerBot!",

  earn: ["worker", "customs", "money"]
}

const ClaimEvent = {
  name: "Claim Event",
  desc: "The claim event adds to the money earned in b!claim <rank>!",

  earn: null
}

const AdvertEvent = {
  name: "Advert Event",
  desc: "The advert event cuts the price of adverts by half!",

  earn: null
}

const WorkersEvent = {
  name: "Worker Event",
  desc: "The worker event cuts your wage by half! (during the event)",

  earn: null
}

const CommandEvent = {
  name: "Command Event",
  desc: "The command event adds to b!claim! To claim rewards use <b!claim event> (max per user: 10)",

  earn: null
}

export const event = WorkersEvent

export function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

export function getRandomInt(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

export function getLet(num, other) {
  if (num >= 1000000000000) {
    return ((Math.abs(num)/1000000000000).toFixed(1)) + 't'
  } else if (num >= 1000000000) {
    return ((Math.abs(num)/1000000000).toFixed(1)) + 'b'
  } else if (num >= 1000000) {
    return ((Math.abs(num)/1000000).toFixed(1)) + 'm'
  } else if (num >= 1000) {
    return ((Math.abs(num)/1000).toFixed(1)) + 'k'
  } else {
    if (other != "none") {
      return num.toFixed(other)
    } else {
      return num
    }
  } 
}

const facebook = {
  name: "Facebook ADS",
  id: "facebook",

  rank: "ad",

  costshow: "15",
  cost: 15,
  earn: 5,

  chance: 20
}

const flier = {
  name: 'fliers',
  id: 'flier',

  rank: "ad",

  costshow: "25",
  cost: 25,
  earn: 15,

  chance: 75
}

const radio = {
  name: 'radio ADS',
  id: 'radio',

  rank: "ad",

  costshow: "100",
  cost: 100,
  earn: 25,

  chance: 50
}

const mobile = {
  name: 'mobile ADS',
  id: 'mobile',
  
  rank: "ad",

  costshow: "200",
  cost: 200,
  earn: 50,

  chance: 250
}

const tt = {
  name: "TikTok ADS",
  id: "tiktok",

  rank: "ad",

  costshow: "250",
  cost: 250,
  earn: 75,

  chance: 0
}

const yt = {
  name: "YouTube ADS",
  id: "youtube",

  rank: "ad",

  costshow: "350",
  cost: 350,
  earn: 100,

  chance: 200
}

const tv = {
  name: 'television ADS',
  id: 'tv',

  rank: "ad",

  costshow: "500",
  cost: 500,
  earn: 250,

  chance: 50
}

const uhaul = {
  name: 'Uhaul trucks',
  id: 'uhaul',

  rank: "ad",

  costshow: "1k",
  cost: 1000,
  earn: 500,

  chance: 50
}

const bb = {
  name: 'billboards',
  id: 'billboard',

  rank: "ad",

  costshow: "1.5k",
  cost: 1500,
  earn: 1000,

  chance: 100
}

const sb = {
  name: "Super Bowl ADS",
  id: "superbowl",

  rank: "ad",

  costshow: "10k",
  cost: 10000,
  earn: 2000,

  chance: 50
}

const pb = {
  name: "Photop Bot ADS",
  id: "photopbots",

  rank: "ad",

  costshow: "100k",
  cost: 100000,
  earn: 4000,

  chance: 20
}

const dm = {
  name: "Dank Memer ADS",
  id: "dank",

  rank: "ad",

  costshow: "10m",
  cost: 10000000,
  earn: 10000,

  chance: 10
}

const stove1 = {
  name: "Standard Gas Stoves",
  id: "stove1",

  rank: "stove",

  costshow: "50",
  cost: 50,

  multi: 1,
  c: 25,

  max: 100,
  needed: 0
}

const stove2 = {
  name: "Advanced Gas Stoves",
  id: "stove2",

  rank: "stove",

  costshow: "100",
  cost: 100,

  multi: 2,
  c: 50,

  max: 150,
  needed: 100
}

const stove3 = {
  name: "Standard Electeric Stoves",
  id: "stove3",

  rank: "stove",

  costshow: "500",
  cost: 500,

  multi: 1,
  c: 100,

  max: 200,
  needed: 150
}

const stove4 = {
  name: "Advanced Electeric Stoves",
  id: "stove4",

  rank: "stove",

  costshow: "1k",
  cost: 1000,

  multi: 2,
  c: 150,

  max: 250,
  needed: 150
}

const stove5 = {
  name: "Standard Dual Stoves",
  id: "stove5",

  rank: "stove",

  costshow: "1.5k",
  cost: 1500,

  multi: 1,
  c: 200,

  max: 300,
  needed: 250
}

const stove6 = {
  name: "Advanced Dual Stoves",
  id: "stove6",

  rank: "stove",

  costshow: "2k",
  cost: 2000,

  multi: 2,
  c: 250,

  max: 350,
  needed: 300
}

const stove7 = {
  name: "Dank Memer Stoves",
  id: "stove7",

  rank: "stove",

  costshow: "10k",
  cost: 10000,

  multi: 3,
  c: 500,

  max: 400,
  needed: 350
}

const stove8 = {
  name: "Apple Stoves",
  id: "stove8",

  rank: "stove",

  costshow: "100k",
  cost: 100000,

  multi: 3,
  c: 5000,

  max: 500,
  needed: 400
}

const water1 = {
  name: "Great Value Water",
  id: "water1",

  rank: "water",

  costshow: "0",
  cost: 1.50,

  multi: 1,
  
  needed: 0
}

const water2 = {
  name: "Aquafina Water",
  id: "water2",

  rank: "water",

  costshow: "100",
  cost: 3.24,

  multi: 2,
  
  needed: 100
}

const water3 = {
  name: "Dasani Water",
  id: "water3",

  rank: "water",

  costshow: "500",
  cost: 4.62,

  multi: 3,
  
  needed: 500
}

const water4 = {
  name: "Dank Memer Pee",
  id: "water4",

  rank: "water",

  costshow: "10k",
  cost: 1000,

  multi: 10,
  
  needed: 10000
}

export function getStuff (name) {
  switch (name.toLowerCase()) {
    case "flier":
      return flier;

    case "radio":
      return radio;

    case "mobile":
      return mobile;

    case "tv":
      return tv;

    case "uhaul":
      return uhaul;

    case "billboard":
      return bb;

    case "facebook":
      return facebook;

    case "tiktok":
      return tt;

    case "superbowl":
      return sb;

    case "youtube":
      return yt;

    case "photopbots":
      return pb;

    case "dank":
      return dm;

    case "stove1":
      return stove1;

    case "stove2":
      return stove2;

    case "stove3":
      return stove3;

    case "stove4":
      return stove4;

    case "stove5":
      return stove5;

    case "stove6":
      return stove6;

    case "stove7":
      return stove7;

    case "stove8":
      return stove8;

    case "water1":
      return water1;

    case "water2":
      return water2;

    case "water3":
      return water3;

    case "water4":
      return water4;

    default:
      return "false";
  }
}

export async function f (type, uid) {
  const userData = await getUserDataManager(uid)
  switch(type) {
    case "workcity":
      const w = userData.value.wage
      const f1 = getStuff(userData.value.normstove).c * userData.value.workers
      return userData.value.workers * userData.value.prestige * 0.01 * userData.value.customers - w - f1
      break;

    case "advertcity":
      const w1 = userData.value.wage
      const c = getStuff(userData.value.normwater).cost * userData.value.workers + w1
      return userData.value.workers * getStuff(userData.value.normad).cost * 3 + c
      break;

    case "workbeach":
      const w3 = userData.value.wagebeach
      const s1 = getStuff(userData.value.normstovebeach).c * userData.value.workersbeach
      return userData.value.workersbeach * userData.value.prestige * 0.01 * userData.value.customsbeach - w3 - s1
      break;

    case "advertbeach":
      const w4 = userData.value.wagebeach
      const c3 = getStuff(userData.value.normwaterbeach).cost * userData.value.workersbeach + w4
      return userData.value.workersbeach * getStuff(userData.value.normadbeach).cost * 5 + c3
      break;

    default: 
      return 0
  }
}

const date = new Date()
date.toLocaleString( "en-US", { timeZone: "America/New_York" });

export var Day = date.getDate()