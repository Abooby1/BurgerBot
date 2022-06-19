import { defaultData, getUserDataManager, db } from "../../database.js";
import {getDay, BetaID, VersionID, getMonth} from '../../utils.js'
import {audit} from "../../index.js"

const isNaN = function(value) {
    const n = Number(value);
    return n !== n;
};

const BetaTest = {
  names: ['beta'],
  func: async ({chat, args: [type], userData})=>{
    switch (type) {
      case 'update':
        const ver1 = userData.value.version.toString().split(' ')
        if (ver1[0] != 'Beta') {
          if (BetaID[VersionID] != undefined) {
            if (await getDay(userData.value.timezone) >= BetaID[VersionID].day && await getMonth(userData.value.timezone) >= BetaID[VersionID].month) {
              chat.reply(`Your account is now in beta testing! (use b!resetdata to reset your data if you encounter bugs that break your data (you will have to re-enter the beta) | report these bugs in the Tester Group)`)
              userData.value.version = `Beta ${BetaID[VersionID].id}`
              audit(`${chat.author.username} has joined ${BetaID[VersionID].name}!`)
              //add code for data
              userData.value.plant = {rank: 'Common', nextweed: 0}
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply(`It is currently not the date for ${BetaID[VersionID].name} (You can try again after ${BetaID[VersionID].month}/${BetaID[VersionID].day})`)
            }
          } else {
            chat.reply(`This version doesnt have a beta right now...`)
          }
        } else {
          chat.reply(`You are already in a beta... (use b!beta revoke, then redo b!beta update to have the latest beta!)`)
        }
        break;
      case 'revoke':
      case 'end':
        const ver = userData.value.version.toString().split(' ')
        if (ver[0] == 'Beta') {
          const data = await getUserDataManager(chat.author.id);

          data.value = JSON.parse(JSON.stringify(defaultData));
          data.applyRanks();
      
          setTimeout(function() {
            data.update();
          }, 1500)
          chat.reply(`Your account has been refreshed!`)
          audit(`${chat.author.username} has left the beta stage!`)
        } else {
          chat.reply(`You arent in a BurgerBot Beta currently...`)
        }
        break;
      default:
        chat.reply(`Thats not a type... (b!beta <type>)`)
    }
  },
  hidden: true,
  permission: rank => rank == 'Owner' || rank == 'Tester'
}

const TempBan = {
  names: ["ban"],
  func: async ({chat, client, args: [name]})=>{
    
    const user = await client.getUserFromUsername(name)
    if (name != "" && name != "Abooby" && user != undefined) {
      const ID = user.id
      var data = await getUserDataManager(ID)
      var dbdata = JSON.parse(await db.get('Banned'))
      if (!dbdata.includes(ID)) {
        dbdata.push(ID)
        audit(`${chat.author.username} banned ${name}`)
        db.set('Banned', JSON.stringify(dbdata))
        chat.reply(`You banned ${name}`)
        data.value.rank = 'Banned'
        setTimeout(function( ) {
          data.update()
        }, 2500)
      } else {
        chat.reply(`That person is already banned...`)
      }
    } else {
      chat.reply("There has been an error, please check the chat...")
      audit(`${chat.author.username} had an error banning someone`)
    }
  },
  description: "Temp bans someone",
  hidden: true,
  permission: rank => rank == "Owner" || rank == "Mod"
};

const TempBan2 = {
  names: ["unban"],
  func: async ({chat, client, args: [name]})=>{
    
    const user = await client.getUserFromUsername(name)
    if (name != "" && name != "Abooby" && user != undefined) {
      const ID = user.id
      var data = await getUserDataManager(ID)
      var dbdata = JSON.parse(await db.get('Banned'))
      if (dbdata.includes(ID)) {
        dbdata.splice(dbdata.indexOf(ID), 1)
        audit(`${chat.author.username} unbanned ${name}`)
        db.set('Banned', JSON.stringify(dbdata))
        chat.reply(`You unbanned ${name}`)
        data.applyRanks();
        setTimeout(function( ) {
          data.update()
        }, 2500)
      } else {
        chat.reply(`That person is not banned...`)
      }
    } else {
      chat.reply("There has been an error, please check the chat...")
      audit(`${chat.author.username} had an error unbanning someone`)
    }
  },
  description: "Temp bans someone",
  hidden: true,
  permission: rank => rank == "Owner" || rank == "Mod"
};

const AddSay = {
  names: ["addsay"],
  func: async ({client, chat, body})=>{
    const b = body.split('@s')
    const user = await client.getUserFromUsername(b[0])
    if (user != undefined) {
      const id = user.id
      const data = JSON.parse(await db.get('PostSay'))
      data[id] = b[1]
      db.set('PostSay', JSON.stringify(data))
      chat.reply(`I have added a post say for ${b[0]}!`)
    } else {
      chat.reply(`That account doesnt exist...`)
    }
  },
  description: "Add a post entry",
  permission: 'Owner'
};

const ResetData = {
  names: ["resetdata"],
  func: async ({ chat, args: [userid], userData }) => {
    if (userid == "6154f0d0a8d6d106c5b869b6") return;
    if (userid === "@me" || userData.value.rank == 'Tester' || userid == undefined) {
      userid = chat.author.id;
    }
    const data = await getUserDataManager(userid);

    // deep clone defaultData
    data.value = JSON.parse(JSON.stringify(defaultData));
    data.applyRanks();

    setTimeout(function() {
      data.update();
      if (userid != chat.author.id) {
        chat.reply("I reset their data!")
      } else {
        chat.reply(`I reset your data!`)
      }
    }, 1500)
  },
  hidden: true,
  description: "Resets a specific substat of a user to its default value. Note: Ranks are hard coded and cannot be reset.",
  permission: rank => rank == "Owner" || rank == "Mod" || rank == 'Tester',
}

const SetMoney = {
  names: ["setmoney"],
  func: async ({ chat, args: [userid, type, money] }) => {
    if (userid === "@me") {
      userid = chat.user.id;
    }
    const data = await getUserDataManager(userid);
    data.update();
    chat.reply(`I set ${userid}'s money to ${money}`)
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
        data.value.city.workers = parseFloat(amount) || 0;
        data.value.city.wage = parseFloat(amount * 10.23) || 0;
        break;
      case "beach":
        data.value.beach.workers = parseFloat(amount) || 0;
        data.value.beach.wage = parseFloat(amount * 20.46) || 0;
        break;
      case 'dank':
        data.value.dank.workers = parseFloat(amount) || 0
        data.value.dank.wage = parseFloat(amount * 30.69) || 0;
        break;
      case 'space':
        data.value.space.workers = parseFloat(amount) || 0
        data.value.space.wage = parseFloat(amount * 40.92) || 0;
        break;

      default:
        chat.reply(`That spot isnt available to do this action...`)
        return;
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
        data.value.city.customers = parseFloat(amount) || 0;
        break;
      case "beach":
        data.value.beach.customers = parseFloat(amount) || 0;
        break;
      case 'dank':
        data.value.dank.customers = parseFloat(amount) || 0
        break;
      case 'space':
        data.value.space.customers = parseFloat(amount) || 0
        break;

      default:
        chat.reply(`That spot isnt available to do this action...`)
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

const AddSpot = {
  names: ["test"],
  func: async ({chat, body})=>{
     try {
       eval(body)
     } catch (err) {
       chat.reply(err)
     }
  },
  description: "Change stuff",
  permission: "Owner"
};

export {SetMoney, TempBan, SetCustoms, SetWorker, ResetData, AddSpot, SetPrestige, SetCredit, AddSay, TempBan2, BetaTest}