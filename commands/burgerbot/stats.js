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

    const c1 = userData.value.wage
    const c2 = userData.value.wagebeach
    const c3 = userData.value.wagedank
    const c4 = userData.value.wagespace
    var Say = ``

    switch (userData.value.spot.toLowerCase()) {
      case "city":
        Say = `City | Money: $${getLet(userData.value.money, 2)} | Workers: ${getLet(userData.value.workers)} | Wage: $${getLet(c1, 2)} | Customers: ${getLet(userData.value.customers)} | Prestige: ${userData.value.prestige} | Earn (b!auto w): $${getLet(earn, 2)} | Cost (b!auto a): $${getLet(earn2, 2)}`
        break;

      case "beach":
        Say = `Beach | Money: $${getLet(userData.value.moneybeach, 2)} | Workers: ${getLet(userData.value.workersbeach)} | Wage: $${getLet(c2, 2)} | Customers: ${getLet(userData.value.customsbeach)} | Prestige: ${userData.value.prestigebeach} | Earn (b!auto w): $${getLet(earn3, 2)} | Cost (b!auto a): $${getLet(earn4, 2)}`
        break;

      case "dank":
        Say = `Danker Land | Money: $${getLet(userData.value.moneydank, 2)} | Workers: ${getLet(userData.value.workersdank)} | Wage: $${getLet(c3, 2)} | Customers: ${getLet(userData.value.customsdank)} | Prestige: ${userData.value.prestigedank} | Earn (b!auto w): $${getLet(earn5, 2)} | Cost (b!auto a): $${getLet(earn6, 2)}`
        break;

      case "space":
        Say = `Space Center | Money: $${getLet(userData.value.moneyspace, 2)} | Workers: ${getLet(userData.value.workersspace)} | Wage: $${getLet(c4, 2)} | Customers: ${getLet(userData.value.customsspace)} | Prestige: ${userData.value.prestigespace} | Earn (b!auto w): $${getLet(earn7, 2)} | Cost (b!auto a): $${getLet(earn8, 2)}`
        break;
      case "event":
        Say = `Event Spot | Money: $${getLet(userData.value.moneyevent, 2)} | Workers: ${getLet(userData.value.workersevent)} | Customers: ${getLet(userData.value.customsevent)}`
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