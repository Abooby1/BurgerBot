import {getRandomInt, getStuff, event, getLet, f} from "../../utils.js"

const Advertise = {
  names: ["advert"],
  func: async ({chat, args: [item], userData})=>{
    if (item && getStuff(item) != "false") {
      const d = getStuff(item)
      var y = d.cost
      var t = false
      
      if (event.name == "Advert Event") {
        y = y / 2
      }
      switch (userData.value.spot.toLowerCase()) {
        case "city":
          if (userData.value.money >= y) {
            t = true
          }
          break;
        case "beach":
          if (userData.value.moneybeach >= y * 2) {
            t = true
            y = y * 2
          } else {
            y = y * 2
          }
          break;
        case "dank":
          if (userData.value.moneyspace >= y * 3) {
            t = true
            y = y * 3
          } else {
            y = y * 3
          }
          break;
        case "space":
          if (userData.value.moneyspace >= y * 4) {
            t = true
            y = y * 4
          } else {
            y = y * 4
          }
          break;
        case "event":
          if (userData.value.moneyevent >= y / 2) {
            t = true
            y = y / 2
          } else {
            y = y / 2
          }
          break;
      }
      
      if (t == true) {
        if (getRandomInt(1, d.chance) == 1){
          var EarnedW = getRandomInt(0, 2)
        } else {
          var EarnedW = 0
        }
        var Earned = getRandomInt(1, d.earn)
        switch(userData.value.spot.toLowerCase()) {
          case "city":
            userData.value.money -= y
            userData.value.customers += Earned
            userData.value.workers += EarnedW
            userData.value.wage += EarnedW * 10.23
            break;
          case "beach":
            userData.value.moneybeach -= y
            userData.value.customsbeach += Earned
            userData.value.workersbeach += EarnedW
            userData.value.wagebeach += EarnedW * 20.46
            break;
          case "dank":
            userData.value.moneydank -= y
            userData.value.customsdank += Earned
            userData.value.workersdank += EarnedW
            userData.value.wagedank += EarnedW * 30.69
            break;
          case "space":
            userData.value.moneyspace -= y
            userData.value.customsspace += Earned
            userData.value.workersspace += EarnedW
            userData.value.wagespace += EarnedW * 40.92
            break;
          case "event":
            userData.value.moneyevent -= y
            userData.value.customsevent += Earned
            userData.value.workersevent += EarnedW
            userData.value.wageevent += EarnedW * 5.12
            break;
        }
        chat.reply(`You earned ${Earned} customer(s) and ${EarnedW} worker(s) by using ${d.name}! (cost: $${getLet(y, 2)} | spot: ${userData.value.spot})`)
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