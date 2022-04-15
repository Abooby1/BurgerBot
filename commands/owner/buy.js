import { getUserDataManager } from "../../database.js";

const Buy = {
  names: ["buy"],
  func: async ({chat, args: [userid, item]})=>{
    var data = await getUserDataManager(userid)
    if (item == "workers") {
      data.value.workers += 5
      data.value.wage += 5 * 0.0015
    }
    if (item == "money") {
      data.value.money += 10
    }
    if (item == "customers") {
      data.value.customers += 5
    }
  },
  description: "Buy command for other bots",
  permission: "Bot"
};

export {Buy};