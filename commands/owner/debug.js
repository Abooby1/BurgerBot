import { getUserDataManager } from "../../database.js";

const TempBan = {
  names: ["ban"],
  func: async ({chat, args: [userid, time]})=>{
    if (userid != "" && time != "" && userid != "6154f0d0a8d6d106c5b869b6") {
    var data = await getUserDataManager(userid)
    var NormalRank = data.value.rank
    data.value.rank = "Banned"
    setTimeout(function( ) {
      data.value.rank = NormalRank
      setTimeout(function() {
        data.update();
      }, 1500)
    }, time * 60000)
    setTimeout(function() {
      data.update();
      chat.reply(`I have temp banned ${userid} | Time: ${time * 60} seconds`)
    }, 1500)
    } else {
      chat.reply("There has been an error, please check the chat...")
      console.log(`${chat.author.username} had an error banning someone...`)
    }
  },
  description: "Temp bans someone",
  hidden: true,
  permission: rank=>rank=="Owner" || "Mod"
};

const SetMoney = {
  names: ["setmoney"],
  func: async ({ chat, args: [userid, money] }) => {
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    data.value.money = parseFloat(money) || 0;
    data.update();
    chat.reply(`I set ${userid}'s money to ${data.value.money}`)
  },
  hidden: true,
  permission: rank=>rank=="Owner" || "Mod",
  description: "Sets your money."
};

const SetWorker = {
  names: ["setworkers"],
  func: async ({ chat, args: [userid, amount] }) => {
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    data.value.workers = parseFloat(amount) || 0;
    data.update();
    chat.reply(`I set ${userid}'s money to ${data.value.workers}`)
  },
  hidden: true,
  permission: rank=>rank=="Owner" || "Mod",
  description: "Sets your money."
};

const SetCustoms = {
  names: ["setcustoms"],
  func: async ({ chat, args: [userid, amount] }) => {
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    data.value.customers = parseFloat(amount) || 0;
    data.update();
    chat.reply(`I set ${userid}'s money to ${data.value.customers}`)
  },
  hidden: true,
  permission: rank=>rank=="Owner" || "Mod",
  description: "Sets your money."
};

export {SetMoney, TempBan, SetCustoms, SetWorker}