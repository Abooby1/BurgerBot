const Prestige = {
  names: ["prestige"],
  func: ({chat, client, userData})=>{
    switch (userData.value.spot.toLowerCase()) {
      case "city":
        if (userData.value.workers >= 500) {
          if (userData.value.customers >= 5000) {
            if (userData.value.money >= 10000) {
              userData.value.prestige += 1
              userData.value.exp += 25
              userData.value.money = 5 * userData.value.prestige
              userData.value.workers = 0
              userData.value.customers = 1
              userData.value.normad = "flier"
              userData.value.wage = 0
              chat.reply(`You have prestiged! You will now earn more money!`)
              setTimeout(async function( ) {
                userData.update()
                if (userData.value.prestige == 10) {
                  const post = await client.groups["62535105a95b113f103c2d57"].post("cappy")
                  setTimeout(async function( ) {
                    const something = await post.chat(`c!bot ${chat.author.id} burgerbotprestige`)
                    chat.reply(`Congrats! You got to prestige 10! (You got the BurgerBot prestige trophy collectable in CapBot!)`)
                  }, 3000)
                }
              }, 2500)
            } else {
              chat.reply(`You need $10k to prestige...`)
            }
          } else {
            chat.reply(`You need 5k customers to prestige...`)
          }
        } else {
          chat.reply(`You need 500 workers to prestige...`)
        }
        break;
      case "beach":
        if (userData.value.workersbeach >= 1000) {
          if (userData.value.customsbeach >= 10000) {
            if (userData.value.moneybeach >= 20000) {
              userData.value.prestigebeach += 1
              userData.value.exp += 50
              userData.value.moneybeach = 2 * userData.value.prestigebeach
              userData.value.workersbeach = 0
              userData.value.customsbeach = 1
              userData.value.normadbeach = "facebook"
              userData.value.wagebeach = 0
              chat.reply(`You have prestiged! You will now earn more money!`)
              setTimeout(async function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply(`You need $20k to prestige...`)
            }
          } else {
            chat.reply(`You need 10k customers to prestige...`)
          }
        } else {
          chat.reply(`You need 1k workers to prestige...`)
        }
        break;
      case "dank":
        if (userData.value.workersdank >= 2000) {
          if (userData.value.customsdank >= 20000) {
            if (userData.value.moneydank >= 40000) {
              userData.value.prestigedank += 1
              userData.value.exp += 25
              userData.value.moneydank = 2 * userData.value.prestigebeach
              userData.value.workersdank = 0
              userData.value.customsdank = 1
              userData.value.normaddank = "facebook"
              userData.value.wagedank = 0
              chat.reply(`You have prestiged! You will now earn more money!`)
              setTimeout(async function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply(`You need $40k to prestige...`)
            }
          } else {
            chat.reply(`You need 20k customers to prestige...`)
          }
        } else {
          chat.reply(`You need 2k workers to prestige...`)
        }
        break;
      case "space":
        if (userData.value.workersspace >= 5000) {
          if (userData.value.customsspace >= 50000) {
            if (userData.value.moneyspace >= 100000) {
              userData.value.prestigespace += 1
              userData.value.exp += 25
              userData.value.moneyspace = 2 * userData.value.prestigebeach
              userData.value.workersspace = 0
              userData.value.customsspace = 1
              userData.value.normadspace = "facebook"
              userData.value.wagespace = 0
              chat.reply(`You have prestiged! You will now earn more money!`)
              setTimeout(async function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply(`You need $100k to prestige...`)
            }
          } else {
            chat.reply(`You need 50k customers to prestige...`)
          }
        } else {
          chat.reply(`You need 5k workers to prestige...`)
        }
        break;
      case "event":
        if (userData.value.workersevent >= 50) {
          if (userData.value.customsevent >= 5000) {
            if (userData.value.moneyevent >= 10000) {
              userData.value.credits += 10
              userData.value.exp += 10
              userData.value.moneyevent = 0
              userData.value.workersevent = 0
              userData.value.customsevent = 1
              userData.value.wageevent = 0
              chat.reply(`You have prestiged in the event spot! (you earned 10 exp and 10 credits!)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply(`You need $10k to prestige...`)
            }
          } else {
            chat.reply(`You need 5k customers to prestige...`)
          }
        } else {
          chat.reply(`You need 50 workers to prestige...`)
        }
        break;
    }
  },
  description: "Prestige",
  permission: rank => rank != "Banned"
};

export {Prestige};