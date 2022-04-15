import {getUserDataManager} from "../../database.js";

const Stats = {
  names: ["stats"],
  func: async ({chat, args: [userid]})=>{
    if (!userid || userid == "@me") {
      userid = chat.author.id
    }
    var data = await getUserDataManager(userid)
    chat.reply(`Money: $${data.value.money.toFixed(2)} | Workers: ${data.value.workers} | Wage: ${data.value.wage.toFixed(3)} | Customers: ${data.value.customers} | Prestige Amount: ${data.value.prestige.toFixed(2)} | Rank(s): ${data.value.rank.join(' | ')}`)
  },
  description: "Check your stats!",
  permission: rank => rank != "Banned"
};

export {Stats};