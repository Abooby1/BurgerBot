import {getUserDataManager} from "../../database.js";

const Stats = {
  names: ["stats", "stat"],
  func: async ({chat, args: [userid]})=>{
    if (!userid || userid == "@me") {
      userid = chat.author.id
    }
    var data = await getUserDataManager(userid)
    if (data.value.rank != "Banned") {
      if (userid != chat.author.id) {
        if (data.value.rankshow == false) {
          var Say = `Money: $${data.value.money.toFixed(2)} | Workers: ${data.value.workers} | Wage: $${data.value.wage.toFixed(3)} | Customers: ${data.value.customers} | Prestige: ${data.value.prestige.toFixed(2)}`
        } else {
          Say = `Money: $${data.value.money.toFixed(2)} | Workers: ${data.value.workers} | Wage: $${data.value.wage.toFixed(3)} | Customers: ${data.value.customers} | Prestige: ${data.value.prestige.toFixed(2)} | Rank: ${data.value.rank}`
        }
      } else {
        Say = `Money: $${data.value.money.toFixed(2)} | Workers: ${data.value.workers} | Wage: $${data.value.wage.toFixed(3)} | Customers: ${data.value.customers} | Prestige: ${data.value.prestige.toFixed(2)} | Rank: ${data.value.rank}`
      }
    } else {
      chat.reply(`That person is banned...`)
    }

    setTimeout(function( ) {
      chat.reply(Say)
    }, 500)
  },
  description: "Check your stats!",
  permission: rank => rank != "Banned"
};

export {Stats};