import {getRandomInt, getStuff, event, getLet} from "../../utils.js"

const Advertise = {
  names: ["advert"],
  func: async ({chat, args: [item], userData})=>{  
    if (item && getStuff(item) != "false") {
      const d = getStuff(item)
      var y = d.cost
      if (event.name == "Advert Event") {
        y = y / 2
      }
      var t = false
      if (userData.value.spot == "City"){
        if (userData.value.money >= y) {
          t = true
        }
      } else {
        if (userData.value.moneybeach >= y * 2) {
          t = true
          y = y * 2
        }
      }
      if (t == true) {
        if (getRandomInt(1, d.chance) == 1){
          var EarnedW = getRandomInt(0, 2)
        } else {
          var EarnedW = 0
        }
        var Earned = getRandomInt(1, d.earn)
        if (userData.value.spot == "City") {
          userData.value.money -= y
          userData.value.customers += Earned
          userData.value.workers += EarnedW
          userData.value.wage += EarnedW * 10.23
        } else {
          userData.value.moneybeach -= y
          userData.value.customsbeach += Earned
          userData.value.workersbeach += EarnedW
          userData.value.wagebeach += EarnedW * 20.46
        }
        chat.reply(`You earned ${Earned} customer(s) and ${EarnedW} worker(s) by using ${d.name}! (cost: $${getLet(y, 2)} | location: ${userData.value.spot})`)
        setTimeout(function() {
          userData.update()
        }, 2500)
      } else {
        chat.reply(`You dont have enough to advertise with ${d.name}... (cost: $${getLet(y, 2)})`)
      }
    } else {
      chat.reply(`Please finish the command... (b!advert <item>)`)
    }
  },
  description: "Advertise",
  permission: rank => rank != "Banned"
};

export {Advertise};