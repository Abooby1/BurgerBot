import {event} from "../../utils.js"

const Help = {
  names: ["help", "commands"],
  func: ({chat, body})=>{
    switch(body.toLowerCase()) {
      case "event":
        chat.reply(`Current event '${event.name}': ${event.desc}`)
        break;
      case "work":
        chat.reply(`b!work <hours>: work many hours and get money to upgrade to an industry!`)
        break;
      case "stats":
        chat.reply(`b!stats: get your stats from your current spot!`)
        break;
      case "prestige":
        chat.reply(`b!prestige: use this command to restart and earn more!`)
        break;
      case "hire":
        chat.reply(`b!hire <amount>: use this command to hire people! Be careful, the wage is very high and theres no fire command...`)
        break;
      case "donateto":
        chat.reply(`b!donateto <item> <value>: item: choose between finding a person through their name ("name") or by their userid ("userid")`)
        break;
      case "claim":
        chat.reply(`b!claim <item>: claim rank/event rewards! ("event" for event rewards!)`)
        break;
      case "change":
        chat.reply(`b!change <item> <value>: change something in your BurgerBot account! item: "normad" change the ad used in b!auto advert, "normstove": multipliers, "normwater": multipliers, "spot": change your spot!`)
        break;
      case "auto":
        chat.reply(`b!auto <item> <amount>: item: "work"/"advert", value: the days you want your workers to work (max: 5)`)
        break;
      case "advert":
        chat.reply(`b!advert <item>: item: "facebook": facebook ADS, "flier": flier ADS, "radio": radio ADS, "mobile": mobile ADS, "tt": tiktok, "yt": youtube ADS, "tv": tv ADS`)
        setTimeout(function( ) {
          chat.post.chat(`"uhaul": uhaul truck ADS, "billboard": billboard ADS, "superbowl": superbowl ADS, "photopbots": photop bot ADS, "dank": dank memer ADS`)
        }, 100)
        break;

      default:
        chat.reply(`Commands: b!work <hours> | b!stats | b!prestige | b!hire <amount> | b!donateto <item> <value> | b!claim <item> | b!change <item> <value> | b!auto <item> <amount> | b!advert <item>`)
    }
  },
  description: "Get the link for the command website",
  permission: rank => rank != "Banned"
};

export {Help};