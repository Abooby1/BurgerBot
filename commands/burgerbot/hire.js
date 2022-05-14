import {getStuff} from "../../utils.js"

const Hire = {
  names: ["hire"],
  func: ({chat, body, userData})=>{
    if (value == undefined) {
      chat.reply(`Please complete the command... (b!hire <amount>)`); 
      return;
    }
    switch (userData.value.spot.toLowerCase()) {
      case "city":
        if (userData.value.workers + parseInt(body) <= getStuff(userData.value.normstove).max) {
          if (userData.value.money >= 100 * parseInt(body)) {
            userData.value.workers += parseInt(body)
            userData.value.money -= 100 * parseInt(body)
            userData.value.wage += 10.23 * parseInt(body)
            chat.reply(`You hired ${body} people!`)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You dont have enough to hire ${body} people...`)
          }
        } else {
          chat.reply(`You cant hire right now... (upgrade your stove to hire more people!)`)
        }
        break;
      case "beach":
        if (userData.value.workersbeach + parseInt(body) <= getStuff(userData.value.normstovebeach).max) {
          if (userData.value.moneybeach >= 200 * parseInt(body)) {
            userData.value.workersbeach += parseInt(body)
            userData.value.moneybeach -= 200 * parseInt(body)
            userData.value.wagebeach += 20.46 * parseInt(body)
            chat.reply(`You hired ${body} people!`)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You dont have enough to hire ${body} people...`)
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