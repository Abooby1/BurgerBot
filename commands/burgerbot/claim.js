import {containsObject, Day} from "../../utils.js"

const Claim = {
  names: ["claim"],
  func: async ({chat, body, userData})=>{
    if (body) {
      if (userData.value.daily < Day) {
        userData.value.daily = Day
        if (body.toLowerCase() == "normal") {
          if (userData.value.prestige >= 2 || userData.value.customers >= 100) {
            if (await containsObject("Normal", userData.value.rank) == true) {
              userData.value.money += 0.001
              chat.reply("You earned your rank reward ($0.001)")
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply("You dont have normal rank...")
            }
          } else {
            chat.reply("You dont have the requirements to use this command...")
          }
        }
        if (body.toLowerCase() == "special") {
          if (await containsObject("Special", userData.value.rank) == true) {
            userData.value.money += 0.5
            userData.value.prestige += 0.01
            chat.reply("You earned your rank reward ($0.5 and 0.01 prestige)")
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          } else {
            chat.reply("You dont have special rank...")
          }
        }
        if (body.toLowerCase() == "mod") {
          if (await containsObject("Mod", userData.value.rank) == true) {
            userData.value.money += 0.3
            userData.value.prestige += 0.01
            chat.reply("You earned your rank reward ($0.3 and 0.01 prestige)")
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          } else {
            chat.reply("You dont have mod rank...")
          }
        }
      } else {
        chat.reply("You already claimed the rewards of this command today...")
      }
    } else {
      chat.reply(`Please send the command with the claim rank (b!claim <rank>)`)
    }
  },
  description: "Claim rank rewards",
  permission: rank => rank != "Banned"
};

export {Claim};