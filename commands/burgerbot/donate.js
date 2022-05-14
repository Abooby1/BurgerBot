import {getUserDataManager} from "../../database.js"

const Donate = {
  names: ["donateto"],
  func: async ({chat, client, args: [type, id, amount]})=>{
    if (id && type && amount && parseFloat(amount) >= 0) {
      //name
      if (type.toLowerCase() == "name" || type.toLowerCase() == "username") {
        const user = await client.getUserFromUsername(id)
        if (user != undefined) {
          const d = await getUserDataManager(user.id)
          const u = await getUserDataManager(chat.author.id)

          if (u.value.credits >= amount) {
            u.value.credits -= parseInt(amount)
            d.value.inbox += parseInt(amount)
            chat.reply(`You donated $${amount} to ${id}!`)
          } else {
            chat.reply(`You dont have the money to donate that much...`)
          }

          setTimeout(function( ) {
            d.update()
            u.update()
          }, 2500)
        } else {
          chat.reply(`Thats not a name...`)
        }
      }

      //userid
      if (type.toLowerCase() == "id" || type.toLowerCase() == "userid") {
        const d = await getUserDataManager(id)
        const u = await getUserDataManager(chat.author.id)

        if (u.value.money >= amount) {
          u.value.credits -= parseInt(amount)
          d.value.inbox += parseInt(amount)
          chat.reply(`You donated ${amount} credits to ${id}!`)
        } else {
          chat.reply(`You dont have the credits to donate that much...`)
        }

        setTimeout(function( ) {
          d.update()
          u.update()
        }, 2500)
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
    chat.reply(`You have ${userData.value.inbox} credits in your inbox!`)
  },
  description: "Check your inbox",
  permission: rank => rank != "Banned"
};

const Collect = {
  names: ["collect"],
  func: ({chat, userData})=>{
    userData.value.credits += userData.value.inbox
    userData.value.inbox = 0
    chat.reply(`You collected everything from your inbox!`)
    setTimeout(function( ) {
      userData.update()
    }, 2500)
  },
  description: "Collect your inbox money",
  permission: rank => rank != "Banned"
};

export {Donate, Inbox, Collect};