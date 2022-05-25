const Prestige = {
  names: ["prestige"],
  func: ({chat, client, userData})=>{
    switch (userData.value.spot.toLowerCase()) {
      case "city":
        if (userData.value.city.workers >= 500) {
          if (userData.value.city.customers >= 5000) {
            if (userData.value.city.money >= 10000) {
              userData.value.city.prestige += 1
              userData.value.exp += 25
              userData.value.city.money = 5 * userData.value.city.prestige
              userData.value.city.workers = 0
              userData.value.city.customers = 1
              userData.value.city.normad = "flier"
              userData.value.city.wage = 0
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
        if (userData.value.beach.workers >= 1000) {
          if (userData.value.beach.customers >= 10000) {
            if (userData.value.beach.money >= 20000) {
              userData.value.beach.prestige += 1
              userData.value.exp += 50
              userData.value.beach.money = 2 * userData.value.beach.prestige
              userData.value.beach.workers = 0
              userData.value.beach.customers = 1
              userData.value.beach.normad = "facebook"
              userData.value.beach.normwater = 'water1'
              userData.value.beach.wage = 0
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
        if (userData.value.dank.customers >= 2000) {
          if (userData.value.dank.customers >= 20000) {
            if (userData.value.dank.money >= 40000) {
              userData.value.dank.prestige += 1
              userData.value.exp += 25
              userData.value.dank.money = 2 * userData.value.dank.prestige
              userData.value.dank.workers = 0
              userData.value.dank.customers = 1
              userData.value.dank.normad = "facebook"
              userData.value.dank.normwater = 'water1'
              userData.value.dank.wage = 0
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
        if (userData.value.space.workers >= 5000) {
          if (userData.value.space.customers >= 50000) {
            if (userData.value.space.money >= 100000) {
              userData.value.space.prestige += 1
              userData.value.exp += 25
              userData.value.space.money = 2 * userData.value.space.prestige
              userData.value.space.workers = 0
              userData.value.space.customers = 1
              userData.value.space.normad = "facebook"
              userData.value.space.normwater = 'water1'
              userData.value.space.wage = 0
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
        if (userData.value.event.workers >= 50) {
          if (userData.value.event.customers >= 500) {
            if (userData.value.event.money >= 1000) {
              userData.value.credits += 10
              userData.value.exp += 10
              userData.value.event.money = 0
              userData.value.event.workers = 0
              userData.value.event.customers = 1
              userData.value.event.wage = 0
              chat.reply(`You have prestiged in the event spot! (you earned 10 exp and 10 credits!)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply(`You need $1k to prestige...`)
            }
          } else {
            chat.reply(`You need 500 customers to prestige...`)
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