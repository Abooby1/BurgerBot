import {getUserDataManager, db} from "../../database.js";
import {getLet, getStuff, f} from "../../utils.js"

const Stats = {
  names: ["stats", "stat"],
  func: async ({chat, client, userData})=>{
    const earn = await f("workcity", chat.author.id)
    const earn2 = await f("advertcity", chat.author.id)
    const earn3 = await f("workbeach", chat.author.id)
    const earn4 = await f('advertbeach', chat.author.id)

    const c1 = userData.value.wage
    const c2 = userData.value.wagebeach
    var Say = ``

    switch (userData.value.spot.toLowerCase()) {
      case "city":
        Say = `City | Money: $${getLet(userData.value.money, 2)} | Workers: ${getLet(userData.value.workers)} | Wage: $${getLet(c1, 2)} | Customers: ${getLet(userData.value.customers)} | Earn (b!auto w): $${getLet(earn, 2)} | Cost (b!auto a): $${getLet(earn2, 2)}`
        break;

      case "beach":
        Say = `Beach | Money: $${getLet(userData.value.moneybeach, 2)} | Workers: ${getLet(userData.value.workersbeach)} | Wage: $${getLet(c2, 2)} | Customers: ${getLet(userData.value.customsbeach)} | Earn (b!auto w): $${getLet(earn3, 2)} | Cost (b!auto a): $${getLet(earn4, 2)}`
        break;
    }

    var Say2 = `Main | Credits: ${getLet(userData.value.credits)} | Prestige: ${userData.value.prestige} | Rank: ${userData.value.rank} (for event help use: <b!help event>)`

    
    setTimeout(function( ) {
      chat.reply(Say)
      setTimeout(function( ) {
        chat.post.chat(Say2)
      }, 100)
    }, 500)
  },
  description: "Check your stats!",
  permission: rank => rank != "Banned"
};

export {Stats};