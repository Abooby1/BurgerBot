import {containsObject, Day, event} from "../../utils.js"

var y1 = {}

const Claim = {
  names: ["claim"],
  func: async ({chat, body, userData})=>{
    if (userData.value.daily < Day) {
      switch (body.toLowerCase()) {
        case "normal":
          if (userData.value.prestige >= 2) {
            if (userData.value.rank == "Normal") {
              if (event.name != "Claim Event") {
                userData.value.credits += 10
                chat.reply("You earned your rank reward (10 credits)")
              } else {
                userData.value.credits += 25
                chat.reply("You earned your rank reward! (25 credits)")
              }
              userData.value.daily = Day
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply("You dont have the normal rank...")
            }
          } else {
            chat.reply("You dont have the requirements to use this command...")
          }
          break;
        case "special":
          if (userData.value.rank == "Special") {
            if (event.name != "Claim Event") {
              userData.value.credits += 250
              chat.reply("You earned your rank reward! (250 credits)")
            } else {
              userData.value.credits += 300
              chat.reply("You earned your rank reward! (300 credits)")
            }
            userData.value.daily = Day
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          } else {
            chat.reply("You dont have the special rank...")
          }
          break;
        case "owner":
        case "mod":
          if (userData.value.rank == "Mod" || userData.value.rank == "Owner") {
            if (event.name != "Claim Event") {
              userData.value.credits += 100
              chat.reply("You earned your rank reward! (100 credits)")
            } else {
              userData.value.credits += 150
              chat.reply("You earned your rank reward! (150 credits)")
            }
            userData.value.daily = Day
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          } else {
            chat.reply("You dont have the mod/owner rank...")
          }
          break;
        case "event":
          if (y1[chat.author.id] == undefined) {
            y1[chat.author.id] == null
          }
          if (event.name == "Command Event") {
            if (y1[chat.author.id] == null) {
              userData.value.credits += 1
              userData.value.money += 10
              userData.value.moneybeach += 0.03
              chat.reply(`You claimed your event rewards! (you can claim them again in 2 minutes! | $0.03 (beach), $10 (city), 1 credit)`)
              
              setTimeout(function( ) {
                userData.update()
              }, 2500)

              y1[chat.author.id] = 120
              var o = setInterval(function( ) {
                if (y1[chat.author.id] > 0) {
                  y1[chat.author.id] -= 1
                } else {
                  chat.reply(`You are ready to use <b!claim event> again!`)
                  y1[chat.author.id] = null
                  clearInterval(o)
                }
              }, 1000)
            } else {
              chat.reply(`You cant use the event command yet (time left: ${y1[chat.author.id]})`)
            }
          } else {
            chat.reply(`The command event isnt active right now...`)
          }
          break;
        default:
          chat.reply(`Thats not an available claim...`)
      }
    } else {
      chat.reply(`You cant use this command yet... (last claimed (day of month): ${userData.value.daily})`)
    }
  },
  description: "Claim rank rewards",
  permission: rank => rank != "Banned"
};

export {Claim};