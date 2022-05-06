import db from "quick.db"

export function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

export function getRandomInt (max) {
  return Math.floor(Math.random() * max)
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



const flier = {
  name: 'fliers',
  id: 'flier',
  
  cost: 25,
  earn: 15
}

const radio = {
  name: 'radio ADS',
  id: 'radio',
  
  cost: 100,
  earn: 25
}

const mobile = {
  name: 'mobile ADS',
  id: 'mobile',
  
  cost: 200,
  earn: 50
}

const tv = {
  name: 'television ADS',
  id: 'tv',
  
  cost: 500,
  earn: 100
}

const uhaul = {
  name: 'Uhaul trucks',
  id: 'uhaul',
  
  cost: 1000,
  earn: 500
}

const bb = {
  name: 'billboards',
  id: 'billboard',
  
  cost: 1500,
  earn: 1000
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

    default:
      return "false";
  }
}

const date = new Date()
date.toLocaleString( "en-US", { timeZone: "America/New_York" });

export var Day = date.getDate()

export var Frans = []

setTimeout(async function( ) {
  if (db.get('Frans') != undefined) {
    Frans = await db.get('Frans')
  }
}, 1000)