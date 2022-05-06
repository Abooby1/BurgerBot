import { getUserDataManager } from "../../database.js";

const Buy = {
  names: ["buy"],
  func: async ({chat, args: [userid, item]})=>{
    var data = await getUserDataManager(userid)
    if (item == "workers") {
      data.value.workers += 5
      data.value.wage += 5 * 10.23
      setTimeout(function( ) {
        data.update()
      }, 2500)
    }
    if (item == "money") {
      data.value.money += 10
      setTimeout(function( ) {
        data.update()
      }, 2500)
    }
    if (item == "customers") {
      data.value.customers += 5
      setTimeout(function( ) {
        data.update()
      }, 2500)
    }
  },
  description: "Buy command for other bots",
  permission: "Bot"
};

export {Buy};