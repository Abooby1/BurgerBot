import {getUserDataManager} from "../../database.js"
import {getLet} from "../../utils.js"

const Donate = {
  names: ["donateto"],
  func: async ({chat, client, args: [type, id, amount]})=>{
    if (id && type && amount && parseFloat(amount) >= 0) {
      //name
      if (type.toLowerCase() == "credits" || type.toLowerCase() == "credit") {
        const user = await client.getUserFromUsername(id)
        if (user != undefined) {
          const d = await getUserDataManager(user.id)
          const u = await getUserDataManager(chat.author.id)

          if (u.value.credits >= amount) {
            u.value.credits -= parseInt(amount)
            d.value.inbox += parseInt(amount)
            chat.reply(`You donated ${getLet(parseInt(amount))} credits to ${id}!`)
          } else {
            chat.reply(`You dont have the credits to donate that much...`)
          }

          setTimeout(function( ) {
            d.update()
            u.update()
          }, 2500)
        } else {
          chat.reply(`Thats not a name...`)
        }
      }

      //money
      if (type.toLowerCase() == "money" || type.toLowerCase() == "$") {
        const user = await client.getUserFromUsername(id)
        if (user != undefined) {
          const d = await getUserDataManager(user.id)
          const u = await getUserDataManager(chat.author.id)

          if (u.value.recentprest == false) {
            if (u.value.city.money >= amount) {
              u.value.city.money -= parseInt(amount)
              d.value.inbox2 += parseInt(amount)
              chat.reply(`You donated $${getLet(parseInt(amount), 2)} to ${id}!`)
            } else {
              chat.reply(`You dont have the money to donate that much...`)
            }
  
            setTimeout(function( ) {
              d.update()
              u.update()
            }, 2500)
          } else {
            chat.reply(`That person has recently prestiged...`)
          }
        } else {
          chat.reply(`Thats not a name...`)
        }
      }
    } else {
      chat.reply(`Please complete the command... (b!donateto <type> <person> <amount>)`)
    }
  },
  description: "Donate to people",
  permission: rank => rank != "Banned"
};

const Inbox = {
  names: ["inbox"],
  func: ({chat, userData})=>{
    chat.reply(`You have ${userData.value.inbox} credits and $${getLet(userData.value.inbox2, 2)} (city) in your inbox!`)
  },
  description: "Check your inbox",
  permission: rank => rank != "Banned"
};

const Collect = {
  names: ["collect"],
  func: ({chat, userData})=>{
    userData.value.credits += userData.value.inbox
    userData.value.city.money += userData.value.inbox2
    userData.value.inbox = 0
    userData.value.inbox2 = 0
    chat.reply(`You collected everything from your inbox!`)
    setTimeout(function( ) {
      userData.update()
    }, 2500)
  },
  description: "Collect your inbox credits",
  permission: rank => rank != "Banned"
};

export {Donate, Inbox, Collect};