import {getLet, getStuff, getRandomInt} from "../../utils.js"

const Auto = {
  names: ["auto"],
  func: ({chat, args: [item, body], userData})=>{
    if (body && body <= 7 && item && body > 0) {
      if (item.toLowerCase() == "work") {
        if (userData.value.autow == false) {
          var Times = 0
          var Total = 0
          
          if (userData.value.workers >= 1) {
            const s = userData.value.wage + 2.16 * userData.value.workers
            if (userData.value.money >= s * body) {
              chat.reply(`Your workers are now working! (every 24 hours (24 seconds) you will earn money!)`)
              userData.value.autow = true
              setTimeout(function( ) {
                userData.update()
              }, 1500)
              setInterval(function( ) {
                if (Times != body) {
                  Times += 1
                  userData.value.money -= userData.value.wage
                  const c = 2.16 * userData.value.workers
                  var Earned = userData.value.workers * userData.value.prestige * 0.01 * userData.value.customers - c
                  userData.value.money += Earned
                  Total += Earned - userData.value.wage
                  if (Times == body) {
                    chat.reply(`Your workers are done working! (total earning: $${getLet(Total, 2)})`)
                    userData.value.autow = false
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`One day has passed...`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  }
                }
              }, 24000)
            } else {
              chat.reply(`You dont have enough money to pay your workers... (cost: $${getLet(c * body, 2)})`)
            }
          } else {
            chat.reply(`You need to have at least one worker... (b!hire <stays empty if single person/say bulk if 5 people>)`)
          }
        } else {
          chat.reply(`Your workers are already working...`)
        }
      }

      if (item.toLowerCase() == "advert") {
        if (userData.value.autoa == false) {
          var Times = 0
          var Total = 0
          
          if (userData.value.workers >= 1) {
            const s = userData.value.wage + 1.50 * userData.value.workers + getStuff(userData.value.normad).cost * 2
            if (userData.value.money >= s * body) {
              chat.reply(`Your workers are now advertising! (every 24 hours (24 seconds) you will earn customers!)`)
              userData.value.autoa = true
              setTimeout(function( ) {
                userData.update()
              }, 1500)
              setInterval(function( ) {
                if (Times != body) {
                  Times += 1
                  
                  const c = 1.50 * userData.value.workers
                  var Earned = userData.value.workers * getStuff(userData.value.normad).cost * 2 - c
  
                  userData.value.money -= userData.value.wage + Earned
                  
                  userData.value.customers += getRandomInt(getStuff(userData.value.normad).earn) * userData.value.workers
                  
                  Total += Earned
                  if (Times == body) {
                    chat.reply(`Your workers are done advertising! (total cost: $${getLet(Total, 2)})`)
                    userData.value.autoa = false
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`One day has passed...`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  }
                }
              }, 24000)
            } else {
              chat.reply(`You dont have enough money to pay your workers... (cost: $${getLet(s * body, 2)})`)
            }
          } else {
            chat.reply(`You need to have at least one worker... (b!hire <stays empty if single person/say bulk if 5 people>)`)
          }
        } else {
          chat.reply(`Your workers are already advertising...`)
        }
      }
    } else {
      chat.reply(`Please complete the command... (b!auto <item> <days>)`)
    }
  },
  description: "Automate and earn",
  permission: rank => rank != "Banned"
};

export {Auto};