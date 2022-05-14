import {getStuff} from "../../utils.js"

const Hire = {
  names: ["hire"],
  func: ({chat, args: [value], userData})=>{
    if (value == undefined || parseInt(value) == 0) {
      chat.reply(`Please complete the command... (b!hire <amount> | at least 1 worker)`); 
      return;
    }
    switch (userData.value.spot.toLowerCase()) {
      case "city":
        if (userData.value.workers + parseInt(value) <= getStuff(userData.value.normstove).max) {
          if (userData.value.money >= 100 * parseInt(value)) {
            userData.value.workers += parseInt(value)
            userData.value.money -= 100 * parseInt(value)
            userData.value.wage += 10.23 * parseInt(value)
            if (parseInt(value) >= 2) {
              chat.reply(`You hired ${value} people!`)
            } else {
              chat.reply(`You hired ${value} person!`)
            }
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You dont have enough to hire ${value} people...`)
          }
        } else {
          chat.reply(`You cant hire right now... (upgrade your stove to hire more people!)`)
        }
        break;
      case "beach":
        if (userData.value.workersbeach + parseInt(value) <= getStuff(userData.value.normstovebeach).max) {
          if (userData.value.moneybeach >= 200 * parseInt(value)) {
            userData.value.workersbeach += parseInt(value)
            userData.value.moneybeach -= 200 * parseInt(value)
            userData.value.wagebeach += 20.46 * parseInt(value)
            if (parseInt(value) >= 2) {
              chat.reply(`You hired ${value} people!`)
            } else {
              chat.reply(`You hired ${value} person!`)
            }
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You dont have enough to hire ${value} people...`)
          }
        } else {
          chat.reply(`You cant hire right now... (upgrade your stove to hire more people!)`)
        }
        break;
    }
  },
  description: "Hire more workers to automate your business",
  permission: rank => rank != "Banned"
};

export {Hire}