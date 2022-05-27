import {event, Version, SeasonEnd, SeasonNum, getStuff} from "../../utils.js"
import {db} from "../../database.js"

const Help = {
  names: ["help", "about"],
  func: ({chat, args: [body, body1], userData})=>{
    switch(body.toLowerCase()) {
      case "event":
        chat.reply(`Current event '${event.name}': ${event.desc}`)
        break;
      case "spots":
      case "spot":
        chat.reply(`You can buy spots in b!change spot <spot you want to buy>! Each spot costs more credits!`)
        setTimeout(function( ) {
          chat.reply(`Spots: "city" (free starter) | "beach" (5k credits) | "dank" (25k credits) | "space" (50k credits) | ******* (10k credits)`)
        }, 500)
        break;
      case "season":
        chat.reply(`Season ${SeasonNum} ends: '${SeasonEnd}' | Earn rewards using b!claim season! (earn exp by working, events, and prestiging!)`)
        break;
      case "credits":
        chat.reply(`You can use credits for buying spots!`)
        break;
      case "symbols":
      case "symbol":
        chat.reply(`Symbols | 'K': thousand | 'M': million | 'B': billion | 'T': trillion | 'P': quadrillion | 'E': quintillion | 'Z': sextillion | 'Y': septillion`)
        break;
      case 'b!open':
      case 'open':
        chat.reply(`b!open <crate> <amount (empty for just one crate)>: open crates with credits! (you can also open the seasonal crate!)`)
        break;
      case "b!work":
      case "work":
        chat.reply(`b!work <hours>: work many hours and get money to upgrade to an industry!`)
        break;
      case "b!stats":
      case "stats":
        chat.reply(`b!stats: get your stats from your current spot!`)
        break;
      case "b!prestige":
      case "prestige":
        switch (userData.value.spot.toLowerCase()) {
          case "city":
            chat.reply(`Prestiging adds to your money earning (in the spot your prestiging in) | Requirements (City): $10K, 5K customers, 500 workers!`)
            break;
          case "beach":
            chat.reply(`Prestiging adds to your money earning (in the spot your prestiging in) | Requirements (Beach): $20K, 10K customers, 1K workers!`)
            break;
          case "dank":
            chat.reply(`Prestiging adds to your money earning (in the spot your prestiging in) | Requirements (Danker Land): $40K, 20K customers, 2K workers!`)
            break;
          case "space":
            chat.reply(`Prestiging adds to your money earning (in the spot your prestiging in) | Requirements (Space Center): $100K, 50K customers, 5K workers!`)
            break;
          case 'event':
            chat.reply(`Prestiging adds to your money earning (in the spot your prestiging in) | Requirements (Event Spot): $1K, 1k customers, 100 workers!`)
            break;
        }
        break;
      case "b!hire":
      case "hire":
        chat.reply(`b!hire <amount>: use this command to hire people! Be careful, the wage is very high and theres no fire command...`)
        break;
      case "b!donateto":
      case "donateto":
        chat.reply(`b!donateto <type> <name> <amount>: type: choose what you want to donate. Either "money" for city money or "credits" for credits!`)
        break;
      case "b!claim":
      case "claim":
        chat.reply(`b!claim <item>: claim rank/event/seasonal rewards! ("event" for event rewards! "season" for seasonal rewards (you can do this after every level up!))`)
        break;
        //
      case "b!change":
      case "change":
        chat.reply(`b!change <item> <value>: change something in your BurgerBot account! item: "normad" change the ad used in b!auto advert, "normwater": multipliers, "spot": change your spot!`)
        setTimeout(function( ) {
          chat.reply(`"promote": add a supervisor, an accountant, or a co-owner!`)
        }, 500)
        break;
      case 'changeinfo':
        switch (body1) {
          case 'supervisor':
            chat.reply(`The supervisor fires people if they do something wrong while autoing! | You need 10 workers to promote a supervisor.`)
            break;
          case 'accountant':
            chat.reply(`The accountant is useful! It tells you how much youve earned/spent after autoing (you also get extra stats!)`)
            break;
          case 'co-owner':
          case 'coowner':
            chat.reply(`The co-owner is good when you earn from autoing! It starts autoing and youll earn money every minute! (autoing started after connecting post)`)
            break;
          default:
            chat.reply(`Thats not a change command...`)
        }
        //
      case "b!auto":
      case "auto":
        chat.reply(`b!auto <item> <amount>: item: "work"/"advert", value: the days you want your workers to work (max: 5)`)
        break;
        //
      case "b!advert":
      case "advert":
        chat.reply(`b!advert <item>: item: "facebook": facebook ADS, "flier": flier ADS, "radio": radio ADS, "mobile": mobile ADS, "tiktok": tiktok ADS, "youtube": youtube ADS, "tv": tv ADS`)
        setTimeout(function( ) {
          chat.reply(`"uhaul": uhaul truck ADS, "billboard": billboard ADS, "superbowl": superbowl ADS, "photopbots": photop bot ADS, "dank": dank memer ADS | "movie": movie ADS`)
        }, 100)
        break;
      case 'advertinfo':
        const i = getStuff(body1)
        if (i != 'false') {
          switch (userData.value.spot) {
            case 'city':
              chat.reply(`City | Cost: ${getLet(i.cost, 2)} | Max gain: ${getLet(i.earn)}`)
              break;
            case 'beach':
              chat.reply(`Beach | Cost: ${getLet(i.cost * 2, 2)} | Max gain: ${getLet(i.earn)}`)
              break;
            case 'dank':
              chat.reply(`Danker Land | Cost: ${getLet(i.cost * 3, 2)} | Max gain: ${getLet(i.earn)}`)
              break;
            case 'space':
              chat.reply(`Space | Cost: ${getLet(i.cost * 4, 2)} | Max gain: ${getLet(i.earn)}`)
              break;
          }
        } else {
          chat.reply(`Thats not an advert...`)
        }
        break;
        //

      default:
        chat.reply(`Commands: b!work <hours> | b!stats | b!prestige | b!hire <amount> | b!donateto <item> <value> | b!claim <item> | b!change <item> <value> | b!auto <item> <amount> | b!advert <item>`)
        setTimeout(function( ) {
          chat.reply(`b!open <crate> <amount>`)
          setTimeout(function( ) {
            chat.reply(`Normal: "season" | "credits" | "spots" | "event" | "symbols" | "advertinfo <advert>" | "changeinfo <change name>"`)
          }, 100)
        }, 100)
    }
  },
  description: "Get the link for the command website",
  permission: rank => rank != "Banned"
};

export {Help};