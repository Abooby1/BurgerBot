import { defaultData, getUserDataManager } from "../../database.js";

const isNaN = function(value) {
    const n = Number(value);
    return n !== n;
};

const TempBan = {
  names: ["ban"],
  func: async ({chat, client, args: [name, time]})=>{
    const user = await client.getUserFromUsername(name)
    if (name != "" && time != "" && name != "Abooby" && user != undefined) {
      const ID = user.id
      var data = await getUserDataManager(ID)
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
        chat.reply(`I have temp banned ${name} | Time: ${time * 60} seconds`)
      }, 1500)
    } else {
      chat.reply("There has been an error, please check the chat...")
      console.log(`${chat.author.username} had an error banning someone...`)
    }
  },
  description: "Temp bans someone",
  hidden: true,
  permission: rank => rank == "Owner" || rank == "Mod"
};

const ResetData = {
  names: ["resetdata"],
  func: async ({ chat, args: [userid] }) => {
    if (userid == "6154f0d0a8d6d106c5b869b6") return;
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);

    // deep clone defaultData
    data.value = JSON.parse(JSON.stringify(defaultData));
    data.applyRanks();

    setTimeout(function() {
      data.update();
      chat.reply("I reset their data!")
    }, 1500)
  },
  hidden: true,
  description: "Resets a specific substat of a user to its default value. Note: Ranks are hard coded and cannot be reset.",
  permission: rank => rank == "Owner" || rank == "Mod",
}

const SetMoney = {
  names: ["setmoney"],
  func: async ({ chat, args: [userid, type, money] }) => {
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    switch (type.toLowerCase()) {
      case "city":
        data.value.money = parseFloat(money) || 0;
        break;
      case "beach":
        data.value.moneybeach = parseFloat(money) || 0;
        break;
    }
    data.update();
    chat.reply(`I set ${userid}'s money to ${data.value.money}`)
  },
  hidden: true,
  permission: rank=>rank == "Owner" || rank == "Mod",
  description: "Sets your money."
};

const SetPrestige = {
  names: ["setprest"],
  func: async ({ chat, args: [userid, money] }) => {
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    data.value.prestige = parseFloat(money) || 0;
    data.update();
    chat.reply(`I set ${userid}'s prestige to ${data.value.prestige}`)
  },
  hidden: true,
  permission: rank=>rank == "Owner" || rank == "Mod",
  description: "Sets your prestige."
};

const SetWorker = {
  names: ["setworkers"],
  func: async ({ chat, args: [userid, type, amount] }) => {
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    switch (type.toLowerCase()) {
      case "city":
        data.value.workers = parseFloat(amount) || 0;
        data.value.wage = parseFloat(amount * 10.23) || 0;
        break;
      case "beach":
        data.value.workersbeach = parseFloat(amount) || 0;
        data.value.wagebeach = parseFloat(amount * 20.46) || 0;
        break;
    }
    data.update();
    chat.reply(`I set ${userid}'s workers to ${data.value.workers}`)
  },
  hidden: true,
  permission: rank=>rank == "Owner" || rank == "Mod",
  description: "Sets your money."
};

const SetCustoms = {
  names: ["setcustoms"],
  func: async ({ chat, args: [userid, type, amount] }) => {
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    switch (type.toLowerCase()) {
      case "city":
        data.value.customers = parseFloat(amount) || 0;
        break;
      case "beach":
        data.value.customsbeach = parseFloat(amount) || 0;
        break;
    }
    data.update();
    chat.reply(`I set ${userid}'s customers to ${data.value.customers}`)
  },
  hidden: true,
  permission: rank=>rank == "Owner" || rank == "Mod",
  description: "Sets your money."
};

const SetCredit = {
  names: ["setcredits"],
  func: async ({ chat, args: [userid, amount] }) => {
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    data.value.credits = parseFloat(amount) || 0;
    data.update();
    chat.reply(`I set ${userid}'s credits to ${data.value.credits}`)
  },
  hidden: true,
  permission: rank=>rank == "Owner" || rank == "Mod",
  description: "Sets your money."
};

const SetStuff = {
  names: ["stuff"],
  func: async ({chat, body})=>{
     
  },
  description: "Change stuff",
  permission: "Owner"
};

export {SetMoney, TempBan, SetCustoms, SetWorker, ResetData, SetStuff, SetPrestige, SetCredit}