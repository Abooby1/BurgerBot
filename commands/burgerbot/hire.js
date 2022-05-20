import {getStuff, getLet} from "../../utils.js"

const Hire = {
  names: ["hire"],
  func: ({chat, args: [value], userData})=>{
    if (value == undefined || parseInt(value) == 0) {
      chat.reply(`Please complete the command... (b!hire <amount> | at least 1 worker)`); 
      return;
    }
    switch (userData.value.spot.toLowerCase()) {
      case "city":
        if (userData.value.money >= 100 * parseInt(value)) {
          userData.value.workers += parseInt(value)
          userData.value.money -= 100 * parseInt(value)
          userData.value.wage += 10.23 * parseInt(value)
          userData.value.exp += parseInt(value) * 1
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people...  ($100 per person)`)
        }
        break;
      case "beach":
        if (userData.value.moneybeach >= 200 * parseInt(value)) {
          userData.value.workersbeach += parseInt(value)
          userData.value.moneybeach -= 200 * parseInt(value)
          userData.value.wagebeach += 20.46 * parseInt(value)
          userData.value.exp += parseInt(value) * 2
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people... ($200 per person)`)
        }
        break;
      case "dank":
        if (userData.value.moneydank >= 500 * parseInt(value)) {
          userData.value.workersdank += parseInt(value)
          userData.value.moneydank -= 500 * parseInt(value)
          userData.value.wagedank += 30.69 * parseInt(value)
          userData.value.exp += parseInt(value) * 4
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people... ($500 per person)`)
        }
        break;
      case "space":
        if (userData.value.moneyspace >= 1000 * parseInt(value)) {
          userData.value.workersspace += parseInt(value)
          userData.value.moneyspace -= 1000 * parseInt(value)
          userData.value.wagespace += 40.92 * parseInt(value)
          userData.value.exp += parseInt(value) * 5
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people... ($1k per person)`)
        }
        break;
      case "event":
        if (userData.value.moneyevent >= 50 * parseInt(value)) {
          userData.value.workersevent += parseInt(value)
          userData.value.moneyevent -= 50 * parseInt(value)
          userData.value.wageevent += 5.12 * parseInt(value)
          userData.value.exp += parseInt(value) * 3
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people... ($1k per person)`)
        }
        break;
    }
  },
  description: "Hire more workers to automate your business",
  permission: rank => rank != "Banned"
};

export {Hire}