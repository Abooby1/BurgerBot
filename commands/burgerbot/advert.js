import {getRandomInt, getStuff} from "../../utils.js"

const Advertise = {
  names: ["advert"],
  func: ({chat, args: [item], userData})=>{  
    if (item && getStuff(item) != "false") {
      const d = getStuff(item)
      if (userData.value.money >= d.cost) {
        var Earned = getRandomInt(d.earn)
        userData.value.money -= d.cost
        userData.value.customers += Earned
        chat.reply(`You earned ${Earned} customers with ${d.name}! (cost: $${d.costshow})`)
        setTimeout(function() {
          userData.update()
        }, 2500)
      } else {
        chat.reply(`You dont have enough to advertise with ${d.name}... (cost: $${d.costshow})`)
      }
    } else {
      chat.reply(`Please finish the command... (b!advert <item>)`)
    }
  },
  description: "Advertise",
  permission: rank => rank != "Banned"
};

export {Advertise};