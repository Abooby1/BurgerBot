import {getUserDataManager} from "../../database.js";
import {getLet, getStuff} from "../../utils.js"
import db from "quick.db"

const Stats = {
  names: ["stats", "stat"],
  func: async ({chat, client , args: [name]})=>{
    if (!name || name == "@me") {
      name = chat.author.username
    }
    const user = await client.getUserFromUsername(name)
    if (user != undefined) {
      const userid = user.id
    
      const check = await db.get("v1/" + userid)
      var data = await getUserDataManager(userid)
      if (check) {
        if (data.value.rank != "Banned") {
          if (userid != chat.author.id) {
            if (data.value.rankshow == false) {
              var Say = `Money: $${getLet(data.value.money, 2)} | Workers: ${data.value.workers} | Wage: $${getLet(data.value.wage, 2)} | Customers: ${getLet(data.value.customers)} | Prestige: ${data.value.prestige.toFixed(2)}`
            } else {
              Say = `Money: $${getLet(data.value.money, 2)} | Workers: ${data.value.workers} | Wage: $${getLet(data.value.wage, 2)} | Customers: ${getLet(data.value.customers)} | Prestige: ${data.value.prestige.toFixed(2)}`
            }
          } else {
            const s = 2.16 * data.value.workers
            var earn = data.value.workers * data.value.prestige * 0.01 * data.value.customers - data.value.wage - s
  
            const c = 1.50 * data.value.workers + data.value.wage
            var earn2 = data.value.workers * getStuff(data.value.normad).cost * 2 + c
            
            Say = `Money: $${getLet(data.value.money, 2)} | Workers: ${data.value.workers} | Wage: $${getLet(data.value.wage, 2)} | Customers: ${getLet(data.value.customers)} | Prestige: ${data.value.prestige.toFixed(2)} | Earning (b!auto w): $${getLet(earn, 2)} | Cost (b!auto a): $${getLet(earn2, 2)} | Rank: ${data.value.rank}`
          }
        } else {
          chat.reply(`${name} is banned...`)
        }
    
        setTimeout(function( ) {
          chat.reply(Say)
        }, 500)
      } else {
        chat.reply(`${name} hasnt used BurgerBot yet...`)
      }
    } else {
      chat.reply(`Thats not a username...`)
    }
  },
  description: "Check your stats!",
  permission: rank => rank != "Banned"
};

export {Stats};