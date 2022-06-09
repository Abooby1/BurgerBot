import {getDay, event, SeasonMulti, getRandomInt, SeasonNum, SeasonSpot, PremiumSpotID, getMonth} from "../../utils.js"

var y1 = {}

const Claim = {
  names: ["claim"],
  func: async ({chat, body, userData})=>{
    if (userData.value.timezone != undefined) {
      /*
      if (getRandomInt(1, 1000) == 1) {
        if (!userData.value.spots.includes(SeasonSpot)) {
          userData.value.spots.push(SeasonSpot)
          chat.reply(`You got the seasons spot!`)
        } else {
          chat.reply(`You got 50 credits!`)
          userData.value.credits += 50
        }
        setTimeout(function( ) {
          userData.update()
        }, 2500)
      }
*/
      switch (body.toLowerCase()) {
/*
        case 'daily':
          if (userData.value.daily != await getDay(userData.value.timezone)) {
            userData.value.daily = await getDay(userData.value.timezone)
            switch (userData.value.rank.toLowerCase()) {
              case 'normal':
                const rewards = ['exp', 'credit', 'money']
                const reward = rewards[getRandomInt(1, rewards.length)]
                var gain;
                switch (reward) {
                  case 'exp':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 5)
                    } else {
                      gain =  getRandomInt(1, 10)
                    }
                    userData.value.exp += gain
                    chat.reply(`You got ${gain} exp from your daily claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'credit':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 15)
                    } else {
                      gain =  getRandomInt(1, 30)
                    }
                    userData.value.credits += gain
                    chat.reply(`You got ${gain} credit(s) from your daily claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'money':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 100)
                    } else {
                      gain =  getRandomInt(1, 200)
                    }
                    userData.value.city.money += gain
                    chat.reply(`You got $${gain} from your daily claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                }
                break;
              case 'owner':
              case 'mod':
                const rewards = ['exp', 'credit', 'money']
                const reward = rewards[getRandomInt(1, rewards.length)]
                var gain;
                switch (reward) {
                  case 'exp':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 20)
                    } else {
                      gain =  getRandomInt(1, 40)
                    }
                    userData.value.exp += gain
                    chat.reply(`You got ${gain} exp from your daily claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'credit':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 100)
                    } else {
                      gain =  getRandomInt(1, 150)
                    }
                    userData.value.credits += gain
                    chat.reply(`You got ${gain} credit(s) from your daily claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'money':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 500)
                    } else {
                      gain =  getRandomInt(1, 1000)
                    }
                    userData.value.city.money += gain
                    chat.reply(`You got $${gain} from your daily claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                }
                break;
              case 'premium':
              case 'special':
                const rewards = ['exp', 'credit', 'money']
                const reward = rewards[getRandomInt(1, rewards.length)]
                var gain;
                switch (reward) {
                  case 'exp':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 50)
                    } else {
                      gain =  getRandomInt(1, 75)
                    }
                    userData.value.exp += gain
                    chat.reply(`You got ${gain} exp from your daily claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'credit':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 200)
                    } else {
                      gain =  getRandomInt(1, 350)
                    }
                    userData.value.credits += gain
                    chat.reply(`You got ${gain} credit(s) from your daily claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'money':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 2500)
                    } else {
                      gain =  getRandomInt(1, 5000)
                    }
                    userData.value.city.money += gain
                    chat.reply(`You got $${gain} from your daily claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                }
                break;

              default:
                chat.reply(`Your rank cant use b!claim daily...`)
            }
          } else {
            userData.value.daily -= 1
            chat.reply(`You cant use this command yet... (last claimed (day of month): ${userData.value.daily})`)
          }
          break;
        case 'monthly':
          if (userData.value.month.number != await getMonth(userData.value.timezone) && await getDay(userData.value.timezone) >= userData.value.month.day) {
            userData.value.month.number = await getMonth(userData.value.timezone)
            userData.value.month.day = await getDay(userData.value.timezone)
            userData.value.month.next = `${await getMonth(userData.value.timezone)}/${await getDay(userData.value.timezone)}`
            switch (userData.value.rank.toLowerCase()) {
              case 'normal':
                const rewards = ['exp', 'credit', 'money']
                const reward = rewards[getRandomInt(1, rewards.length)]
                var gain;
                switch (reward) {
                  case 'exp':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 10)
                    } else {
                      gain =  getRandomInt(1, 25)
                    }
                    userData.value.exp += gain
                    chat.reply(`You got ${gain} exp from your monthly claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'credit':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 30)
                    } else {
                      gain =  getRandomInt(1, 60)
                    }
                    userData.value.credits += gain
                    chat.reply(`You got ${gain} credit(s) from your monthly claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'money':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 200)
                    } else {
                      gain =  getRandomInt(1, 300)
                    }
                    userData.value.city.money += gain
                    chat.reply(`You got $${gain} from your monthly claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                }
                break;
              case 'owner':
              case 'mod':
                const rewards = ['exp', 'credit', 'money']
                const reward = rewards[getRandomInt(1, rewards.length)]
                var gain;
                switch (reward) {
                  case 'exp':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 40)
                    } else {
                      gain =  getRandomInt(1, 60)
                    }
                    userData.value.exp += gain
                    chat.reply(`You got ${gain} exp from your monthly claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'credit':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 150)
                    } else {
                      gain =  getRandomInt(1, 200)
                    }
                    userData.value.credits += gain
                    chat.reply(`You got ${gain} credit(s) from your monthly claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'money':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 1000)
                    } else {
                      gain =  getRandomInt(1, 1500)
                    }
                    userData.value.city.money += gain
                    chat.reply(`You got $${gain} from your monthly claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                }
                break;
              case 'premium':
              case 'special':
                const rewards = ['exp', 'credit', 'money']
                const reward = rewards[getRandomInt(1, rewards.length)]
                var gain;
                switch (reward) {
                  case 'exp':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 75)
                    } else {
                      gain =  getRandomInt(1, 100)
                    }
                    userData.value.exp += gain
                    chat.reply(`You got ${gain} exp from your monthly claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'credit':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 350)
                    } else {
                      gain =  getRandomInt(1, 500)
                    }
                    userData.value.credits += gain
                    chat.reply(`You got ${gain} credit(s) from your monthly claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                  case 'money':
                    if (event.name != 'Claim Event') {
                      gain =  getRandomInt(1, 5000)
                    } else {
                      gain =  getRandomInt(1, 10000)
                    }
                    userData.value.city.money += gain
                    chat.reply(`You got $${gain} from your monthly claim!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                    break;
                }
                break;

              default:
                chat.reply(`Your rank cant use b!claim monthly...`)
            }
          } else {
            userData.value.month.number -= 1
            chat.reply(`You cant use this command yet... (last claimed (last month): ${userData.value.month.number} | you can claim it again on ${userData.value.month.next})`)
          }
          break;
          */
        case 'premium':
          if (userData.value.rank == 'Premium') {
            if (userData.value.buy.month != await getMonth(userData.value.timezone) && await getDay(userData.value.timezone) >= userData.value.buy.day) {
              userData.value.city.money += 100000
              userData.value.credits += 1000
              userData.value.lvl += 5
              if (!userData.value.spots.includes(PremiumSpotID[await getMonth(userData.value.timezone)])) {
                userData.value.spots.push(PremiumSpotID[await getMonth(userData.value.timezone)])
                chat.reply(`You got: $100K (city), 1K credits, 5 levels, and the '${PremiumSpotID[await getMonth(userData.value.timezone)]}' spot!`)
              } else {
                chat.reply(`You got: $100K (city), 1K credits and 5 levels! (you already have '${PremiumSpotID[await getMonth(userData.value.timezone)]}'...)`)
              }
              userData.value.buy.month = await getMonth(userData.value.timezone)
              userData.value.buy.day = await getDay(userData.value.timezone)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply(`You cant claim the rewards yet...`)
            }
          } else {
            chat.reply(`You need to have BurgerBot Premium to use this command... (https://www.patreon.com/abicambot?fan_landing=true)`)
          }
          break;
        case "normal":
          if (userData.value.daily != await getDay(userData.value.timezone)) {
            if (userData.value.rank == "Normal") {
              if (event.name != "Claim Event") {
                userData.value.credits += 15
                chat.reply("You earned your rank reward (15 credits)")
              } else {
                userData.value.credits += 30
                chat.reply("You earned your rank reward! (30 credits)")
              }
              userData.value.daily = await getDay(userData.value.timezone)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply("You dont have the normal rank...")
            }
          } else {
            chat.reply(`You cant use this command yet... (last claimed (day of month): ${userData.value.daily})`)
          }
          break;
        case "special":
          if (userData.value.daily != await getDay(userData.value.timezone)) {
            if (userData.value.rank == "Special") {
              if (event.name != "Claim Event") {
                userData.value.credits += 250
                chat.reply("You earned your rank reward! (250 credits)")
              } else {
                userData.value.credits += 300
                chat.reply("You earned your rank reward! (300 credits)")
              }
              userData.value.daily = await getDay(userData.value.timezone)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply("You dont have the special rank...")
            }
          } else {
            chat.reply(`You cant use this command yet... (last claimed (day of month): ${userData.value.daily})`)
          }
          break;
        case "owner":
        case "mod":
          if (userData.value.daily != await getDay(userData.value.timezone)) {
            if (userData.value.rank == "Mod" || userData.value.rank == "Owner") {
              if (event.name != "Claim Event") {
                userData.value.credits += 100
                chat.reply("You earned your rank reward! (100 credits)")
              } else {
                userData.value.credits += 150
                chat.reply("You earned your rank reward! (150 credits)")
              }
              userData.value.daily = await getDay(userData.value.timezone)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply("You dont have the mod/owner rank...")
            }
          } else {
            chat.reply(`You cant use this command yet... (last claimed (day of month): ${userData.value.daily})`)
          }
          break;
        case "season":
          if (userData.value.lastlvl != userData.value.lvl) {
            const e = userData.value.lvl - userData.value.lastlvl
            userData.value.lastlvl = userData.value.lvl
            const earn = e * SeasonMulti * 2
            chat.reply(`You collected your season level reward (${earn} credits!)`)
            userData.value.credits += earn
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You already claimed your level reward...`)
          }
          break;
          
        case "event":
          if (y1[chat.author.id] == undefined) {
            y1[chat.author.id] == null
          }
          if (event.name == "Command Event") {
            if (y1[chat.author.id] == null) {
              switch (userData.value.spot.toLowerCase()) {
                case "beach":
                  userData.value.credits += 1
                  userData.value.beach.money += 10
                  chat.reply(`You claimed your event rewards! (you can claim them again in 2 minutes! | $10 (beach) and 1 credit)`)
                  break;
                case "space":
                  userData.value.credits += 1
                  userData.value.space.money += 10
                  chat.reply(`You claimed your event rewards! (you can claim them again in 2 minutes! | $10 (space) and 1 credit)`)
                  break;
                case 'birming':
                  userData.value.credits += 1
                  userData.value.birming.money += 10
                  chat.reply('You claimed your event rewards! (you can claim them again in 2 minutes! | $10 (birmingham) and 1 credit)')
                  break;
  
                default:
                  userData.value.credits += 1
                  userData.value.city.money += 5
                  chat.reply(`You claimed your event rewards! (you can claim them again in 2 minutes! | $5 (city) and 1 credit)`)
                  break;
              }
              
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
              chat.reply(`You cant use the event command yet (time left: ${y1[chat.author.id]} secs)`)
            }
          } else {
            chat.reply(`The command event isnt active right now...`)
          }
          break;
          
        default:
          chat.reply(`Thats not an available claim...`)
      }
    } else {
      chat.reply(`You need to set your server by using b!change server <server name ("asia", "global", "africa", "antarctica", "australia", or "europe")>`)
    }
  },
  description: "Claim rank rewards",
  permission: rank => rank != "Banned"
};

export {Claim};