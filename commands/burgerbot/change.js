import {getStuff, getLet, event} from "../../utils.js"
import {AutoA, AutoW} from "./automate.js"
import {working} from "./work.js"

const Change = {
  names: ["change"],
  func: async ({chat, args: [item, value], userData})=>{
    if (value == undefined) {
      switch (userData.value.spot.toLowerCase()) {
        case "city":
          chat.reply(`Beach | postuse: '${userData.value.postuse}' | normad: '${userData.value.city.normad}' | normwater: '${userData.value.city.normwater}'`);
          break;
        case "beach":
          chat.reply(`Beach | postuse: '${userData.value.postuse}' | normad: '${userData.value.beach.normad}' | normwater: '${userData.value.beach.normwater}'`);
          break;
        case "dank":
          chat.reply(`Danker Land | postuse: '${userData.value.postuse}' | normad: '${userData.value.dank.normad}' | normwater: '${userData.value.dank.normwater}'`);
          break;
        case "space":
          chat.reply(`Space Center | postuse: '${userData.value.postuse}' | normad: '${userData.value.space.normad}' | normwater: '${userData.value.space.normwater}'`);
          break;
        case "event":
          chat.reply(`Event Spot | postuse: '${userData.value.postuse}' | normad: 'not supported...' | normwater: 'not supported...'`);
          break;
      }
      return;
    }
    switch (item.toLowerCase()) {
      case "postuse":
        switch(value.toLowerCase()) {
          case "true":
            userData.value.postuse = true
            chat.reply(`Other people can now use commands on your connected post!`)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
            break;
          case "false":
            userData.value.postuse = false
            chat.reply(`Other people can now not use commands on your connected post!`)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
            break;

          default:
            chat.reply(`Please complete the command... (b!change postuse <true/false>`)
            break;
        }
        break;

      case "normad":
        switch (userData.value.spot.toLowerCase()) {
          case "city":
            if (getStuff(value.toLowerCase()).rank == "ad") {
              if (userData.value.city.money >= getStuff(value.toLowerCase()).cost) {
                userData.value.city.normad = getStuff(value.toLowerCase()).id
                chat.reply(`Your city workers will now use ${getStuff(value.toLowerCase()).name} to advertise! (spot: City)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant use this advertisement... (cost $${getStuff(value.toLowerCase()).costshow})`)
              }
            } else {
              chat.reply(`Thats not an ad...`)
            }
            break;

          case "beach":
            if (getStuff(value.toLowerCase()).rank == "ad") {
              if (userData.value.beach.money >= getStuff(value.toLowerCase()).cost * 2) {
                userData.value.beach.normad = getStuff(value.toLowerCase()).id
                chat.reply(`Your beach workers will now use ${getStuff(value.toLowerCase()).name} to advertise! (spot: Beach)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant use this advertisement... (cost $${getLet(value.toLowerCase().cost *2, 2)})`)
              }
            } else {
              chat.reply(`Thats not an ad...`)
            }
            break;

          case "dank":
            if (getStuff(value.toLowerCase()).rank == "ad") {
              if (userData.value.dank.money >= getStuff(value.toLowerCase()).cost * 10) {
                userData.value.dank.normad = getStuff(value.toLowerCase()).id
                chat.reply(`Your danker land workers will now use ${getStuff(value.toLowerCase()).name} to advertise! (spot: Danker Land)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant use this advertisement... (cost $${getLet(value.toLowerCase().cost * 10, 2)})`)
              }
            } else {
              chat.reply(`Thats not an ad...`)
            }
            break;

          case "space":
            if (getStuff(value.toLowerCase()).rank == "ad") {
              if (userData.value.space.money >= getStuff(value.toLowerCase()).cost * 5) {
                userData.value.space.normad = getStuff(value.toLowerCase()).id
                chat.reply(`Your space center workers will now use ${getStuff(value.toLowerCase()).name} to advertise! (spot: Space Center)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant use this advertisement... (cost $${getLet(value.toLowerCase().cost * 5, 2)})`)
              }
            } else {
              chat.reply(`Thats not an ad...`)
            }
            break;

          default:
            chat.reply(`Hmm, looks like this spot doesnt support ad changes...`)
        }
        break;

      case "normwater":
        switch(userData.value.spot.toLowerCase()) {
          case "city":
            if (getStuff(value.toLowerCase()).needed <= userData.value.city.customers) {
              userData.value.city.normwater = getStuff(value.toLowerCase()).id
              chat.reply(`Your workers will now use ${getStuff(value.toLowerCase()).name} to hydrate while advertising in the city! (multiplier: ×${getStuff(value.toLowerCase()).multi})`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
                chat.reply(`You dont have enough customers to have ${getStuff(value.toLowerCase()).name} as your hydrating drink... (needed: ${getStuff(value.toLowerCase()).needed})`)
            }
            break;
          case "beach":
            if (getStuff(value.toLowerCase()).needed <= userData.value.beach.customers * 2) {
              userData.value.beach.normwater = getStuff(value.toLowerCase()).id
              chat.reply(`Your workers will now use ${getStuff(value.toLowerCase()).name} to hydrate while advertising in the beach! (multiplier: ×${getStuff(value.toLowerCase()).multi})`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
                chat.reply(`You dont have enough customers to have ${getStuff(value.toLowerCase()).name} as your hydrating drink... (needed: ${getLet(getStuff(value.toLowerCase()).needed * 2, 2)})`)
            }
            break;
          case "dank":
            if (getStuff(value.toLowerCase()).needed <= userData.value.dank.customers * 10) {
              userData.value.dank.normwater = getStuff(value.toLowerCase()).id
              chat.reply(`Your workers will now use ${getStuff(value.toLowerCase()).name} to hydrate while advertising on Danker Land! (multiplier: ×${getStuff(value.toLowerCase()).multi})`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
                chat.reply(`You dont have enough customers to have ${getStuff(value.toLowerCase()).name} as your hydrating drink... (needed: ${getLet(getStuff(value.toLowerCase()).needed * 10, 2)})`)
            }
            break;
          case "space":
            if (getStuff(value.toLowerCase()).needed <= userData.value.space.customers * 5) {
              userData.value.space.normwater = getStuff(value.toLowerCase()).id
              chat.reply(`Your workers will now use ${getStuff(value.toLowerCase()).name} to hydrate while advertising on the Space Center! (multiplier: ×${getStuff(value.toLowerCase()).multi})`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
                chat.reply(`You dont have enough customers to have ${getStuff(value.toLowerCase()).name} as your hydrating drink... (needed: ${getLet(getStuff(value.toLowerCase()).needed * 5, 2)})`)
            }
            break;

          default:
            chat.reply(`Hmm, looks like this spot doesnt support water changes...`)
        }
        break;
      case "spot":
        const c = ["city", "beach", "dank", "space", "event"]
        if (c.includes(value.toLowerCase())) {
          if (!AutoW.includes(chat.author.id) && !AutoA.includes(chat.author.id) && !working.includes(chat.author.id)) {
            if (userData.value.spots.includes(value.toLowerCase())) {
              if (userData.value.spot != value.toLowerCase()) {
                userData.value.spot = value.toLowerCase()
                chat.reply(`Your spot has been changed to '${value.toLowerCase()}'!`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`Your already at this spot...`)
              }
            } else {
              switch (value.toLowerCase()) {
                case "beach":
                  if (userData.value.credits >= 5000) {
                    chat.reply(`You bought a spot at the beach! Have fun!`)
                    userData.value.credits -= 5000
                    userData.value.spot = "beach"
                    userData.value.spots.push("beach")
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You dont have enough credits to buy a spot at a beach... (cost: 5k credits)`)
                  }
                  break;
                case "dank":
                  if (userData.value.credits >= 25000) {
                    chat.reply(`You bought a spot at the Danker Land! Have fun!`)
                    userData.value.credits -= 25000
                    userData.value.spot = "dank"
                    userData.value.spots.push("dank")
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You dont have enough credits to buy a spot at Danker Land... (cost: 25k credits)`)
                  }
                  break;
                case "space":
                  if (userData.value.credits >= 50000) {
                    chat.reply(`You bought a spot on the Space Center! Have fun!`)
                    userData.value.credits -= 50000
                    userData.value.spot = "space"
                    userData.value.spots.push("space")
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You dont have enough credits to buy a spot at the Space Center... (cost: 50k credits)`)
                  }
                  break;
                case "event":
                  if (event.name == "Spot Event") {
                    userData.value.spot = "event"
                    chat.reply(`You have your spot to the Event Spot!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`The spot event already ended...`)
                  }
                  break;
  
                default:
                  chat.reply(`Hmm, there was an error...`)
                  break;
              }
            }
          } else {
            chat.reply(`You cant do this action right now... (you are currently autoing/working)`)
          }
        } else {
          chat.reply(`Thats not a spot you can go to... (spots: 'city', 'beach' and 'dank')`)
        }
        break;

      default:
        chat.reply(`Hmm, there was an error, check <b!help b!change> for more help on this command...`)
    }
  },
  description: "Change something about your stats"
};

export {Change};