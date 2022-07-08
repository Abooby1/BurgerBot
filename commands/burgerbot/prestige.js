import {getRandomInt, getPoints} from "../../utils.js"

const Prestige = {
  names: ["prestige"],
  func: async ({chat, client, userData})=>{
    switch (userData.value.spot.toLowerCase()) {
      case "city":
        if (userData.value.city.workers >= 500) {
          if (userData.value.city.customers >= 5000) {
            if (userData.value.city.money >= 10000) {
              if (userData.value.city.loan == undefined) {
                userData.value.city.prestige += 1
                userData.value.exp += 25
                userData.value.city.money = 5 * userData.value.city.prestige
                userData.value.city.workers = 0
                userData.value.city.customers = 1
                userData.value.city.normad = "flier"
                userData.value.city.normwater = "water1"
                userData.value.city.wage = 0
                userData.value.city.supervisor = false
                userData.value.city.accountant = false
                userData.value.city.coowner = false
                userData.value.recentprest = true
                setTimeout(function( ) {
                  userData.value.recentprest = false
                  setTimeout(function( ) {
                    userData.update()
                  }, 2500)
                }, 60000)
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
                chat.reply(`You cant prestige while having a loan... (use b!payoff to pay off your whole loan)`)
              }
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
              if (userData.value.beach.loan == undefined) {
                userData.value.beach.prestige += 1
                userData.value.exp += 50
                userData.value.beach.money = 2 * userData.value.beach.prestige
                userData.value.beach.workers = 0
                userData.value.beach.customers = 1
                userData.value.beach.normad = "facebook"
                userData.value.beach.normwater = 'water1'
                userData.value.beach.wage = 0
                userData.value.beach.supervisor = false
                userData.value.beach.accountant = false
                userData.value.beach.coowner = false
                chat.reply(`You have prestiged! You will now earn more money!`)
                setTimeout(async function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant prestige while having a loan... (use b!payoff to pay off your whole loan)`)
              }
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
              if (userData.value.dank.loan == undefined) {
                userData.value.dank.prestige += 1
                userData.value.exp += 50
                userData.value.dank.money = 2 * userData.value.dank.prestige
                userData.value.dank.workers = 0
                userData.value.dank.customers = 1
                userData.value.dank.normad = "facebook"
                userData.value.dank.normwater = 'water1'
                userData.value.dank.wage = 0
                userData.value.dank.supervisor = false
                userData.value.dank.accountant = false
                userData.value.dank.coowner = false
                chat.reply(`You have prestiged! You will now earn more money!`)
                setTimeout(async function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant prestige while having a loan... (use b!payoff to pay off your whole loan)`)
              }
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
       case "london":
        if (userData.value.london.customers >= 10000) {
          if (userData.value.london.customers >= 1000) {
            if (userData.value.london.money >= 100000) {
              if (userData.value.london.loan == undefined) {
                userData.value.london.prestige += 1
                userData.value.exp += 60
                userData.value.london.money = 2 * userData.value.london.prestige
                userData.value.london.workers = 0
                userData.value.london.customers = 1
                userData.value.london.normad = "facebook"
                userData.value.london.normwater = 'water1'
                userData.value.london.wage = 0
                userData.value.london.supervisor = false
                userData.value.london.accountant = false
                userData.value.london.coowner = false
                chat.reply(`You have prestiged! You will now earn more money!`)
                setTimeout(async function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant prestige while having a loan... (use b!payoff to pay off your whole loan)`)
              }
            } else {
              chat.reply(`You need $100K to prestige...`)
            }
          } else {
            chat.reply(`You need 1K customers to prestige...`)
          }
        } else {
          chat.reply(`You need 10K workers to prestige...`)
        }
        break;
      case "space":
        if (userData.value.space.workers >= 5000) {
          if (userData.value.space.customers >= 50000) {
            if (userData.value.space.money >= 100000) {
              if (userData.value.space.loan == undefined) {
                userData.value.space.prestige += 1
                userData.value.exp += 50
                userData.value.space.money = 2 * userData.value.space.prestige
                userData.value.space.workers = 0
                userData.value.space.customers = 1
                userData.value.space.normad = "facebook"
                userData.value.space.normwater = 'water1'
                userData.value.space.wage = 0
                userData.value.space.supervisor = false
                userData.value.space.accountant = false
                userData.value.space.coowner = false
                chat.reply(`You have prestiged! You will now earn more money!`)
                setTimeout(async function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant prestige while having a loan... (use b!payoff to pay off your whole loan)`)
              }
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
      case "birming":
        if (userData.value.birming.workers >= 10000) {
          if (userData.value.birming.customers >= 100000) {
            if (userData.value.birming.money >= 200000) {
              if (userData.value.birming.loan == undefined) {
                userData.value.birming.prestige += 1
                userData.value.exp += 50
                userData.value.birming.money = 2 * userData.value.birming.prestige
                userData.value.birming.workers = 0
                userData.value.birming.customers = 1
                userData.value.birming.normad = "facebook"
                userData.value.birming.normwater = 'water1'
                userData.value.birming.wage = 0
                userData.value.birming.supervisor = false
                userData.value.birming.accountant = false
                userData.value.birming.coowner = false
                chat.reply(`You have prestiged! You will now earn more money!`)
                setTimeout(async function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant prestige while having a loan... (use b!payoff to pay off your whole loan)`)
              }
            } else {
              chat.reply(`You need $200k to prestige...`)
            }
          } else {
            chat.reply(`You need 100k customers to prestige...`)
          }
        } else {
          chat.reply(`You need 10k workers to prestige...`)
        }
        break;
      case "kyiv":
        if (userData.value.kyiv.workers >= 15000) {
          if (userData.value.kyiv.customers >= 150000) {
            if (userData.value.kyiv.money >= 300000) {
              if (userData.value.kyiv.loan == undefined) {
                userData.value.kyiv.prestige += 1
                userData.value.exp += 55
                userData.value.kyiv.money = 2 * userData.value.kyiv.prestige
                userData.value.kyiv.workers = 0
                userData.value.kyiv.customers = 1
                userData.value.kyiv.normad = "facebook"
                userData.value.kyiv.normwater = 'water1'
                userData.value.kyiv.wage = 0
                userData.value.kyiv.supervisor = false
                userData.value.kyiv.accountant = false
                userData.value.kyiv.coowner = false
                chat.reply(`You have prestiged! You will now earn more money!`)
                setTimeout(async function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant prestige while having a loan... (use b!payoff to pay off your whole loan)`)
              }
            } else {
              chat.reply(`You need $300k to prestige...`)
            }
          } else {
            chat.reply(`You need 150k customers to prestige...`)
          }
        } else {
          chat.reply(`You need 15k workers to prestige...`)
        }
        break;
      case 'summer':
        if (userData.value.summer.workers >= 1000) {
          if (userData.value.summer.customers >= 5000) {
            if (userData.value.summer.money >= 10000) {
              userData.value.exp += 15
              userData.value.summer.money = 0
              userData.value.summer.workers = 0
              userData.value.summer.customers = 1
              userData.value.summer.prestige += 1
              userData.value.summer.wage = 0
              chat.reply(`You have prestiged! You will now earn more money!`)
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
          chat.reply(`You need 1k workers to prestige...`)
        }
        break;
      case 'arena':
        if (userData.value.arena.workers >= 500) {
          if (userData.value.arena.customers >= 2500) {
            if (userData.value.arena.money >= 5000) {
              const gain = getRandomInt(10, 50)
              userData.value.exp += 25
              userData.value.arena.money = 0
              userData.value.arena.workers = 0
              userData.value.arena.customers = 1
              userData.value.arena.points += gain
              if (userData.value.arena.points >= getPoints(userData.value.arena.rank, 'points')) {
                chat.reply(`You have prestiged in the Arena Spot! (You ranked up to ${await getPoints(userData.value.arena.rank, 'rank')}!)`)
                userData.value.arena.points = 0
                userData.value.arena.rank = await getPoints(userData.value.arena.rank, 'rank')
              } else {
                chat.reply(`You have prestiged in the Arena Spot! (You got ${gain} points!)`)
              }
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply(`You need $5k to prestige...`)
            }
          } else {
            chat.reply(`You need 2.5k customers to prestige...`)
          }
        } else {
          chat.reply(`You need 500 workers to prestige...`)
        }
        break;
        //event
      case "event":
        if (userData.value.event.workers >= 100) {
          if (userData.value.event.customers >= 1000) {
            if (userData.value.event.money >= 1000) {
              userData.value.credits += 10
              userData.value.exp += 15
              userData.value.event.money = 0
              userData.value.event.workers = 0
              userData.value.event.customers = 1
              userData.value.event.wage = 0
              chat.reply(`You have prestiged in the event spot! (you earned 15 exp and 10 credits!)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply(`You need $1k to prestige...`)
            }
          } else {
            chat.reply(`You need 1k customers to prestige...`)
          }
        } else {
          chat.reply(`You need 100 workers to prestige...`)
        }
        break;
    }
  },
  description: "Prestige",
  permission: rank => rank != "Banned"
};

export {Prestige};