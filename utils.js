import {getUserDataManager, db} from "./database.js"

const date = new Date()

function changeTimeZone(date, timeZone) {
  if (typeof date === 'string') {
    return new Date(
      new Date(date).toLocaleString('en-US', {
        timeZone,
      }),
    );
  }

  return new Date(
    date.toLocaleString('en-US', {
      timeZone,
    }),
  );
}

export async function getDay (tt) {
  switch (tt) {
    case 'asia':
      const d1 = await changeTimeZone(new Date(), 'Asia/Singapore');
      return d1.getDate()
    case 'global':
      const d2 = await changeTimeZone(new Date(), 'America/New_York');
      return d2.getDate()
    case 'korean':
      const d3 = await changeTimeZone(new Date(), 'Asia/Seoul');
      return d3.getDate()
    case 'japan':
      const d4 = await changeTimeZone(new Date(), 'Asia/Tokyo');
      return d4.getDate()
    case 'china':
      const d5 = await changeTimeZone(new Date(), 'Asia/Shanghai');
      return d5.getDate()
    case 'europe':
      const d6 = await changeTimeZone(new Date(), 'Europe/Copenhagen');
      return d6.getDate()
    default:
      return date.getDate()
  }
}

export const SeasonMulti = 3
export const Version = 3
export const SeasonNum = 2
export const SeasonEnd = "July 9"
export const SeasonName = "Birmingham"
export const VersionID = '2.03'
export var Day = await getDay('global')
export var event = {}
export const d12d = true

export var QuestW = {}
export var QuestS = {name: 'Work', desc: 'Work 500 times', max: 500}

function getEvent (n) {
  switch (n) {
    case 1:
      return {
        name: "Spot Event",
        desc: "The spot event adds a spot you can freely change to using <b!change spot event>! (when prestiging, you will get the rewards | lasts for 5 days)",
      
        last: 5,
        earn: null
      }
    case 2:
      return {
        name: "Command Event",
        desc: "The command event adds to b!claim! To claim rewards use <b!claim event> (lasts for 2 days)",
      
        last: 2,
        earn: null
      }
    case 3:
      return {
        name: "Worker Event",
        desc: "The worker event cuts your wage by half! (during the event | lasts for 2 days)",
      
        last: 2,
        earn: null
      }
    case 4:
      return {
        name: "Advert Event",
        desc: "The advert event cuts the price of adverts by half! (during the event | lasts for 2 days)",
      
        last: 2,
        earn: null
      }
    case 5:
      return {
        name: "Claim Event",
        desc: "The claim event adds to the credits earned in b!claim <rank>! (lasts for 7 days)",
      
        last: 7,
        earn: null
      }
    case 6:
      return {
        name: "Reward Event",
        desc: "The reward event gives you rewards for using BurgerBot! (lasts for 3 days)",
      
        last: 3,
        earn: ["worker", "customs", "credits", "exp"]
      }

    case 7:
      return {
        name: 'Co-Owner Event',
        desc: 'The co-owner event makes the money earned from the co-owner doubled! (lasts for 2 days)',

        last: 2,
        earn: null
      }

    case 'ESE':
      return {
        name: 'End of Season Event',
        desc: 'The End of Season Event gives you a lot of exp for using commands and working! (lasts for the rest of the season)',

        last: 0,
        earn: null
      }

    case 'SSE':
      return {
        name: 'Start of Season Event',
        desc: 'The Start of Season Event gives you rewards every 1 minute of your post being connected! (lasts for 4 days)',

        last: 4,
        earn: ['credits', 'exp']
      }

    default:
      return {name: 'None...', desc: 'No event today :('}
  }
}

function getQuest (n) {
  switch (n) {
    case 1:
      return {
        name: 'Work Quest',
        desc: 'Work until completed!',
        earn: ['money 10', 'credits 2']
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
  if (Day != d.day) {
    if (d.last > 1) {
      d.last -= 1
      d.day = Day
      event = getEvent(d.num)
      const d1 = JSON.stringify(d)
      db.set('EventDay', await d1)
    } else {
      const n = getRandomInt(1, 7)
      event = await getEvent(n)
      d.last = event.last
      d.day = Day
      d.num = n
      const d1 = JSON.stringify(d)
      db.set('EventDay', await d1)
    }
  } else {
    event = getEvent(d.num)
  }
}, 100)

/*
setInterval(async function( ) {
  var da = JSON.parse(await db.get('QuestDay'))
  if (Day > da.day) {
    
  } else {
    QuestW = getQuest(da.num)
  }
}, 100)
*/

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

const ba = {
  name: "Birmingham ADS",
  id: "birming",

  rank: "ad",

  costshow: "20m",
  cost: 20000000,
  earn: 30000,

  chance: 10
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

const water5 = {
  name: "Birmingham Water",
  id: "water5",

  rank: "water",

  costshow: "1k",
  cost: 5.91,

  multi: 4,
  
  needed: 1000
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

export function getCrate(name) {
  switch (name.toLowerCase()) {
    case 'commoncrate':
      return {
        name: 'Common Crate',
        earn: ['exp 3', 'citymoney 5', 'citymoney 25', 'customcity 2'],

        cost: 10
      }
    case 'rarecrate':
      return {
        name: 'Rare Crate',
        earn: ['exp 5', 'citymoney 25', 'citymoney 50', 'customcity 3'],

        cost: 25
      }
    case 'epiccrate':
      return {
        name: 'Epic Crate',
        earn: ['exp 10', 'citymoney 50', 'citymoney 75', 'customcity 4'],

        cost: 50
      }
    case 'legendcrate':
      return {
        name: 'Legendary Crate',
        earn: ['exp 15', 'citymoney 100', 'citymoney 150', 'customcity 5'],

        cost: 100
      }
    case 'seasoncrate':
      return {
        name: 'Season Crate',
        earn: ['exp 50', 'money 1000', 'money 1500', 'custom 100'],

        cost: 500
      }
  }
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

    case 'birming':
      return ba;

    case "water1":
      return water1;

    case "water2":
      return water2;

    case "water3":
      return water3;

    case "water4":
      return water4;

    case 'water5':
      return water5;

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
        w = userData.value.city.wage / 2
      } else {
        w = userData.value.city.wage
      }
      return userData.value.city.workers * userData.value.city.prestige * 0.01 * userData.value.city.customers - w
      break;

    case "advertcity":
      var w1 = 0
      var a = 0
      if (event.name == "Advert Event") {
        a = getStuff(userData.value.city.normad).cost / 2
      } else {
        a = getStuff(userData.value.city.normad).cost * 2
      }
      if (event.name == "Worker Event") {
        w1 = userData.value.city.wage / 2
      } else {
        w1 = userData.value.city.wage
      }
      const c = a * userData.value.city.workers + w1
      return c
      break;

    case "workbeach":
      var w3 = 0
      if (event.name == "Worker Event") {
        w3 = userData.value.beach.wage / 2
      } else {
        w3 = userData.value.beach.wage
      }
      return userData.value.beach.workers * userData.value.beach.prestige * 0.01 * userData.value.beach.customers - w3
      break;

    case "advertbeach":
      var w4 = 0
      var a = 0
      if (event.name == "Advert Event") {
        a = getStuff(userData.value.beach.normad).cost * 5 / 2
      } else {
        a = getStuff(userData.value.beach.normad).cost * 5
      }
      if (event.name == "Worker Event") {
        w4 = userData.value.beach.wage / 2
      } else {
        w4 = userData.value.beach.wage
      }
      const c3 = a * userData.value.beach.workers + w4
      return c3
      break;

    case "workdank":
      var w5 = 0
      if (event.name == "Worker Event") {
        w5 = userData.value.dank.wage / 2
      } else {
        w5 = userData.value.dank.wage
      }
      return userData.value.dank.workers * userData.value.dank.prestige * 0.01 * userData.value.dank.customers - w5
      break;

    case "advertdank":
      var w6 = 0
      var a1 = 0
      if (event.name == "Advert Event") {
        a1 = getStuff(userData.value.dank.normad).cost * 10 / 2
      } else {
        a1 = getStuff(userData.value.dank.normad).cost * 10
      }
      if (event.name == "Worker Event") {
        w6 = userData.value.dank.wage / 2
      } else {
        w6 = userData.value.dank.wage
      }
      const c4 = a1 * userData.value.dank.workers + w6
      return c4
      break;

    case "workspace":
      var w7 = 0
      if (event.name == "Worker Event") {
        w7 = userData.value.space.wage / 2
      } else {
        w7 = userData.value.space.wage
      }
      return userData.value.space.workers * userData.value.space.prestige * 0.01 * userData.value.space.customers - w7
      break;

    case "advertspace":
      var w8 = 0
      var a2 = 0
      if (event.name == "Advert Event") {
        a2 = getStuff(userData.value.space.normad).cost * 5 / 2
      } else {
        a2 = getStuff(userData.value.space.normad).cost * 5
      }
      if (event.name == "Worker Event") {
        w8 = userData.value.space.wage / 2
      } else {
        w8 = userData.value.space.wage
      }
      const c5 = a2 * userData.value.space.workers + w8
      return c5
      break;

    case "workbirming":
      var w9 = 0
      if (event.name == "Worker Event") {
        w9 = userData.value.birming.wage / 2
      } else {
        w9 = userData.value.birming.wage
      }
      return userData.value.birming.workers * userData.value.birming.prestige * 0.01 * userData.value.birming.customers - w9
      break;
      
    case "advertbirming":
      var w10 = 0
      var a3 = 0
      if (event.name == "Advert Event") {
        a3 = getStuff(userData.value.space.normad).cost * 6 / 2
      } else {
        a3 = getStuff(userData.value.space.normad).cost * 6
      }
      if (event.name == "Worker Event") {
        w10 = userData.value.space.wage / 2
      } else {
        w10 = userData.value.space.wage
      }
      const c6 = a3 * userData.value.space.workers + w10
      return c6
      break;

    default: 
      return 0
  }
}