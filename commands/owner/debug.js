import { defaultData, getUserDataManager, db } from "../../database.js";

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
      const dbdata = JSON.parse(await db.get('Banned'))
      if (dbdata[ID] != undefined) {
        if (typeof time != 'String') {
          dbdata[ID].time += time
          chat.reply(`I have added ${time} seconds into ${name}'s ban time`)
          if (dbdata[ID].start == false) {
            var i = setInterval(function( ) {
              if (dbdata[ID].time > 0) {
                dbdata[ID].time -= 1
                db.set('Banned', JSON.stringify(dbdata))
              } else {
                data.value.rank = dbdata[ID].rank
                dbdata[ID].start = false
                dbdata[ID].time = 0
                db.set('Banned', JSON.stringify(dbdata))
                clearInterval(i)
                setTimeout(function( ) {
                  data.update()
                }, 2500)
              }
            }, 1000)
          }
        } else {
          chat.reply(`You didnt specify a number...`)
        }
      } else {
        if (typeof time != 'String') {
         dbdata[ID] = {rank: data.value.rank, time: time, start: true}
        } else {
          if (time == 'perm' || time == 'perma') {
            dbdata[ID] = {rank: data.value.rank, time: 'perma', start: false}
          }
        }
        await db.set('Banned', JSON.stringify(dbdata))
        data.value.rank = 'Banned'
        chat.reply(`I have banned ${name} for ${time} seconds!`)
        setTimeout(function( ) {
          data.update()
        }, 2500)
        var i = setInterval(function( ) {
          if (dbdata[ID] != undefined) {
            if (dbdata[ID].time > 0) {
              dbdata[ID].time -= 1
              db.set('Banned', JSON.stringify(dbdata))
            } else {
              data.value.rank = dbdata[ID].rank
              dbdata[ID].start = false
              dbdata[ID].time = 0
              db.set('Banned', JSON.stringify(dbdata))
              clearInterval(i)
              setTimeout(function( ) {
                data.update()
              }, 2500)
            }
          }
        }, 1000)
      }

    } else {
      chat.reply("There has been an error, please check the chat...")
      console.log(`${chat.author.username} had an error banning someone...`)
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
  names: ["stuff"],
  func: async ({chat, body})=>{
     
  },
  description: "Change stuff",
  permission: "Owner"
};

export {SetMoney, TempBan, SetCustoms, SetWorker, ResetData, AddSpot, SetPrestige, SetCredit, AddSay}