import {getUserDataManager, db} from "../../database.js";
import {getLet, getStuff, f, SeasonEnd} from "../../utils.js"

const Stats = {
  names: ["stats", "stat"],
  func: async ({chat, client, userData})=>{
    const earn = await f("workcity", chat.author.id)
    const earn2 = await f("advertcity", chat.author.id)
    const earn3 = await f("workbeach", chat.author.id)
    const earn4 = await f('advertbeach', chat.author.id)
    const earn5 = await f('workdank', chat.author.id)
    const earn6 = await f('advertdank', chat.author.id)
    const earn7 = await f('workspace', chat.author.id)
    const earn8 = await f('advertspace', chat.author.id)

    const c1 = userData.value.city.wage
    const c2 = userData.value.beach.wage
    const c3 = userData.value.dank.wage
    const c4 = userData.value.space.wage
    var Say = ``

    switch (userData.value.spot.toLowerCase()) {
      case "city":
        Say = `City | Money: $${getLet(userData.value.city.money, 2)} | Workers: ${getLet(userData.value.city.workers)} | Wage: $${getLet(c1, 2)} | Customers: ${getLet(userData.value.city.customers)} | Prestige: ${userData.value.city.prestige} | Earn (b!auto w): $${getLet(earn, 2)} | Cost (b!auto a): $${getLet(earn2, 2)}`
        break;

      case "beach":
        Say = `Beach | Money: $${getLet(userData.value.beach.money, 2)} | Workers: ${getLet(userData.value.beach.workers)} | Wage: $${getLet(c2, 2)} | Customers: ${getLet(userData.value.beach.customers)} | Prestige: ${userData.value.beach.prestige} | Earn (b!auto w): $${getLet(earn3, 2)} | Cost (b!auto a): $${getLet(earn4, 2)}`
        break;

      case "dank":
        Say = `Danker Land | Money: $${getLet(userData.value.dank.money, 2)} | Workers: ${getLet(userData.value.dank.workers)} | Wage: $${getLet(c3, 2)} | Customers: ${getLet(userData.value.dank.customers)} | Prestige: ${userData.value.dank.prestige} | Earn (b!auto w): $${getLet(earn5, 2)} | Cost (b!auto a): $${getLet(earn6, 2)}`
        break;

      case "space":
        Say = `Space Center | Money: $${getLet(userData.value.space.money, 2)} | Workers: ${getLet(userData.value.space.workers)} | Wage: $${getLet(c4, 2)} | Customers: ${getLet(userData.value.space.customers)} | Prestige: ${userData.value.space.prestige} | Earn (b!auto w): $${getLet(earn7, 2)} | Cost (b!auto a): $${getLet(earn8, 2)}`
        break;
      case "event":
        Say = `Event Spot | Money: $${getLet(userData.value.event['money'], 2)} | Workers: ${getLet(userData.value.event['workers'])} | Customers: ${getLet(userData.value.event['customers'])}`
    }

    var Say2 = `Main | Credits: ${getLet(userData.value.credits)} | Level: ${userData.value.lvl} | Rank: ${userData.value.rank} | Season ends: '${SeasonEnd}' | (for event help use: <b!help event>)`

    
    setTimeout(function( ) {
      chat.reply(Say)
      setTimeout(function( ) {
        chat.reply(Say2)
      }, 100)
    }, 500)
  },
  description: "Check your stats!",
  permission: rank => rank != "Banned"
};

export {Stats};