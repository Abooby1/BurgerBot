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

const facebook = {
  name: "Facebook ADS",
  id: "facebook",

  costshow: "15",
  cost: 15,
  earn: 5
}

const flier = {
  name: 'fliers',
  id: 'flier',

  costshow: "25",
  cost: 25,
  earn: 15
}

const radio = {
  name: 'radio ADS',
  id: 'radio',

  costshow: "100",
  cost: 100,
  earn: 25
}

const mobile = {
  name: 'mobile ADS',
  id: 'mobile',

  costshow: "200",
  cost: 200,
  earn: 50
}

const tt = {
  name: "TikTok ADS",
  id: "tiktok",

  costshow: "250",
  cost: 250,
  earn: 75
}

const yt = {
  name: "YouTube ADS",
  id: "youtube",

  costshow: "350",
  cost: 350,
  earn: 100
}

const tv = {
  name: 'television ADS',
  id: 'tv',

  costshow: "500",
  cost: 500,
  earn: 250
}

const uhaul = {
  name: 'Uhaul trucks',
  id: 'uhaul',

  costshow: "1k",
  cost: 1000,
  earn: 500
}

const bb = {
  name: 'billboards',
  id: 'billboard',

  costshow: "1.5k",
  cost: 1500,
  earn: 1000
}

const sb = {
  name: "Super Bowl ADS",
  id: "superbowl",

  costshow: "10k",
  cost: 10000,
  earn: 2000
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

    default:
      return "false";
  }
}

const date = new Date()
date.toLocaleString( "en-US", { timeZone: "America/New_York" });

export var Day = date.getDate()