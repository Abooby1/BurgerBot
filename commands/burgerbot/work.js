import {getLet} from "../../utils.js"

const Work = {
  names: ["work"],
  func: ({chat, body, userData})=>{
    if (userData.value.working == false) {
      if (body && body * 1 <= 24 && body > 0) {
        if (body == "-Infinity") return;
        userData.value.working = true
        setTimeout(function( ) {
          userData.update()
        }, 2500)
        chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
        
        setTimeout(function( ) {
          var Earned = body * userData.value.prestige * 0.01 * userData.value.customers
          userData.value.money += Earned
          chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
          userData.value.working = false
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        }, body * 1000)
      } else {
        chat.reply("Please add the hours you want to work (b!work <hours>)")
      }
    } else {
      chat.reply(`Your already working...`)
    }
  },
  description: "Work for money",
  permission: rank => rank != "Banned"
};

export {Work};