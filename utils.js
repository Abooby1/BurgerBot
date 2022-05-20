import {getUserDataManager, db} from "./database.js"

const date = new Date()
date.toLocaleString( "en-US", { timeZone: "America/New_York" });

export const SeasonMulti = 1
export const Version = 1
export const SeasonEnd = "June 11"
export const VersionID = '1.20'
export var Day = date.getDate()
export var event = {}

function getEvent (n) {
  switch (n) {
    case 0:
      return {
        name: "Spot Event",
        desc: "The spot event adds a spot you can freely change to using <b!change spot event>! (when prestiging, you will get the rewards | lasts: 5 days)",
      
        last: 5,
        earn: null
      }
    case 1:
      return {
        name: "Command Event",
        desc: "The command event adds to b!claim! To claim rewards use <b!claim event> (lasts: 2 days)",
      
        last: 2,
        earn: null
      }
    case 2:
      return {
        name: "Worker Event",
        desc: "The worker event cuts your wage by half! (during the event | lasts: 2 days)",
      
        last: 2,
        earn: null
      }
    case 3:
      return {
        name: "Advert Event",
        desc: "The advert event cuts the price of adverts by half! (during the event | lasts: 2 days)",
      
        last: 2,
        earn: null
      }
    case 4:
      return {
        name: "Claim Event",
        desc: "The claim event adds to the credits earned in b!claim <rank>! (lasts: 7 days)",
      
        last: 7,
        earn: null
      }
    case 5:
      return {
        name: "Reward Event",
        desc: "The reward event gives you rewards for using BurgerBot! (lasts: 3 days)",
      
        last: 3,
        earn: ["worker", "customs", "credits", "exp"]
      }

    default:
      return {
        name: "Claim Event",
        desc: "The claim event adds to the credits earned in b!claim <rank>! (lasts: 7 days)",
      
        last: 7,
        earn: null
      }
  }
}

export function getRandomInt(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

setInterval(async function( ) {
  var d = JSON.parse(await db.get('EventDay'))
  if (Day > d.day) {
    if (d.last >= 1) {
      d.last -= 1
      d.day = Day
      const d1 = JSON.stringify(d)
      db.set('EventDay', await d1)
    } else {
      const n = await getEvent(getRandomInt(0, 5))
      event = await n
      d.last = n.last
      d.day = Day
      const d1 = JSON.stringify(d)
      db.set('EventDay', await d1)
    }
  }
}, 100)

export function getLet(num, other) {
  if (num >= 1000000000000000000000000) {
    return ((Math.abs(num)/1000000000000000000000000).toFixed(1)) + 'Y'
  } else if (num >= 1000000000000000000000) {
    return ((Math.abs(num)/1000000000000000000000).toFixed(1)) + 'Z'
  } else  if (num >= 1000000000000000000) {
    return ((Math.abs(num)/1000000000000000000).toFixed(1)) + 'E'
  } else if (num >= 1000000000000000) {
    return ((Math.abs(num)/1000000000000000).toFixed(1)) + 'P'
  } else if (num >= 1000000000000) {
    return ((Math.abs(num)/1000000000000).toFixed(1)) + 'T'
  } else if (num >= 1000000000) {
    return ((Math.abs(num)/1000000000).toFixed(1)) + 'B'
  } else if (num >= 1000000) {
    return ((Math.abs(num)/1000000).toFixed(1)) + 'M'
  } else if (num >= 1000) {
    return ((Math.abs(num)/1000).toFixed(1)) + 'K'
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

const ma = {
  name: "Movie ADS",
  id: "movie",

  rank: "ad",

  costshow: "15m",
  cost: 15000000,
  earn: 15000,

  chance: 100
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

    case "movie":
      return ma;

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
      var w = 0
      if (event.name == "Worker Event") {
        w = userData.value.wage / 2
      } else {
        w = userData.value.wage
      }
      return userData.value.workers * userData.value.prestige * 0.01 * userData.value.customers - w
      break;

    case "advertcity":
      var w1 = 0
      var a = 0
      if (event.name == "Advert Event") {
        a = getStuff(userData.value.normad).cost / 2
      } else {
        a = getStuff(userData.value.normad).cost * 2
      }
      if (event.name == "Worker Event") {
        w1 = userData.value.wage / 2
      } else {
        w1 = userData.value.wage
      }
      const c = a * userData.value.workers + w1
      return c
      break;

    case "workbeach":
      var w3 = 0
      if (event.name == "Worker Event") {
        w3 = userData.value.wagebeach / 2
      } else {
        w3 = userData.value.wagebeach
      }
      return userData.value.workersbeach * userData.value.prestigebeach * 0.01 * userData.value.customsbeach - w3
      break;

    case "advertbeach":
      var w4 = 0
      var a = 0
      if (event.name == "Advert Event") {
        a = getStuff(userData.value.normadbeach).cost * 5 / 2
      } else {
        a = getStuff(userData.value.normadbeach).cost * 5
      }
      if (event.name == "Worker Event") {
        w4 = userData.value.wagebeach / 2
      } else {
        w4 = userData.value.wagebeach
      }
      const c3 = a * userData.value.workersbeach + w4
      return c3
      break;

    case "workdank":
      var w5 = 0
      if (event.name == "Worker Event") {
        w5 = userData.value.wagedank / 2
      } else {
        w5 = userData.value.wagedank
      }
      return userData.value.workersdank * userData.value.prestigedank * 0.01 * userData.value.customsdank - w5
      break;

    case "advertdank":
      var w6 = 0
      var a1 = 0
      if (event.name == "Advert Event") {
        a1 = getStuff(userData.value.normaddank).cost * 10 / 2
      } else {
        a1 = getStuff(userData.value.normaddank).cost * 10
      }
      if (event.name == "Worker Event") {
        w6 = userData.value.wagedank / 2
      } else {
        w6 = userData.value.wagedank
      }
      const c4 = a1 * userData.value.workersdank + w6
      return c4
      break;

    case "workspace":
      var w7 = 0
      if (event.name == "Worker Event") {
        w7 = userData.value.wagespace / 2
      } else {
        w7 = userData.value.wagespace
      }
      return userData.value.workersspace * userData.value.prestigespace * 0.01 * userData.value.customsspace - w7
      break;

    case "advertspace":
      var w8 = 0
      var a2 = 0
      if (event.name == "Advert Event") {
        a2 = getStuff(userData.value.normadspace).cost * 5 / 2
      } else {
        a2 = getStuff(userData.value.normadspace).cost * 5
      }
      if (event.name == "Worker Event") {
        w8 = userData.value.wagespace / 2
      } else {
        w8 = userData.value.wagespace
      }
      const c5 = a2 * userData.value.workersspace + w8
      return c5
      break;

    default: 
      return 0
  }
}