import { defaultData, getUserDataManager } from "../../database.js";

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
  permission: rank=>rank == "Owner" || rank == "Mod",
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
    data.value.wage = parseFloat(amount * 10.23) || 0;
    data.update();
    chat.reply(`I set ${userid}'s workers to ${data.value.workers}`)
  },
  hidden: true,
  permission: rank=>rank == "Owner" || rank == "Mod",
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
    chat.reply(`I set ${userid}'s customers to ${data.value.customers}`)
  },
  hidden: true,
  permission: rank=>rank == "Owner" || rank == "Mod",
  description: "Sets your money."
};

const SetStuff = {
  names: ["stuff"],
  func: async ({chat, body})=>{
    const data = await getUserDataManager(body)

    if (data != undefined) {
      data.value.autoa = false
      data.value.autow = false
      data.value.working = false
      chat.reply(`All done!`)
      setTimeout(function( ) {
        data.update()
      }, 2500)
    }
  },
  description: "Change stuff",
  permission: "Owner"
};

const Test = {
  names: ["test"],
  func: async ({chat, client, userData, body}) => {
    userData.value.autoa = false
    userData.value.autow = false
    userData.value.working = false
    setTimeout(function( ) {
      userData.update()
    }, 2500)
  },
  hidden: true,
  permission: rank => rank == "Owner" || rank == "Mod",
  description: "Test"
}

export {SetMoney, TempBan, SetCustoms, SetWorker, ResetData, Test, SetStuff}