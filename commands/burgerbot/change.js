import {getStuff, getLet, event} from "../../utils.js"
import {AutoA, AutoW} from "./automate.js"
import {working} from "./work.js"

const Change = {
  names: ["change"],
  func: async ({chat, args: [item, value, value2], userData})=>{
    if (value == undefined) {
      switch (userData.value.spot.toLowerCase()) {
        case "city":
          chat.reply(`City | postuse: '${userData.value.postuse}' | normad: '${userData.value.city.normad}' | normwater: '${userData.value.city.normwater}'`);
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
        case 'summer':
          chat.reply(`Summer Spot | postuse: '${userData.value.postuse}' | normad: 'not supported...' | normwater: 'not supported...'`);
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

          case "birming":
            if (getStuff(value.toLowerCase()).rank == "ad") {
              if (userData.value.birming.money >= getStuff(value.toLowerCase()).cost * 6) {
                userData.value.birming.normad = getStuff(value.toLowerCase()).id
                chat.reply(`Your Birmingham workers will now use ${getStuff(value.toLowerCase()).name} to advertise! (spot: Birmingham)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant use this advertisement... (cost $${getLet(value.toLowerCase().cost * 6, 2)})`)
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
          case "birming":
            if (getStuff(value.toLowerCase()).needed <= userData.value.birming.customers * 6) {
              userData.value.birming.normwater = getStuff(value.toLowerCase()).id
              chat.reply(`Your workers will now use ${getStuff(value.toLowerCase()).name} to hydrate while advertising on the Space Center! (multiplier: ×${getStuff(value.toLowerCase()).multi})`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
                chat.reply(`You dont have enough customers to have ${getStuff(value.toLowerCase()).name} as your hydrating drink... (needed: ${getLet(getStuff(value.toLowerCase()).needed * 6, 2)})`)
            }
            break;

          default:
            chat.reply(`Hmm, looks like this spot doesnt support water changes...`)
        }
        break;
      case "spot":
        const c = ["city", "beach", "dank", "space", "event", 'birming', 'summer']
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
                    chat.reply(`You bought a spot at a beach! Have fun!`)
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
                case "birming":
                  if (userData.value.credits >= 10000) {
                    chat.reply(`You bought a spot in Birmingham! Have fun!`)
                    userData.value.credits -= 10000
                    userData.value.spot = "birming"
                    userData.value.spots.push("birming")
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You dont have enough credits to buy a spot at Birmingham... (cost: 10k credits)`)
                  }
                  break;
                case "summer":
                  userData.value.spot = "summer"
                  userData.value.spots.push('summer')
                  chat.reply(`You now have the Summer Spot! Have fun!`)
                  setTimeout(function( ) {
                    userData.update()
                  }, 2500)
                  break;
                  //event
                case "event":
                  if (event.name == "Spot Event") {
                    userData.value.spot = "event"
                    chat.reply(`You have switched to the Event Spot!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`The spot event already ended...`)
                  }
                  break;
  
                default:
                  chat.reply(`That spot isnt available...`)
                  break;
              }
            }
          } else {
            chat.reply(`You cant do this action right now... (you are currently autoing/working)`)
          }
        } else {
          chat.reply(`Thats not a spot you can go to... (check b!help spots for help!)`)
        }
        break;

      case 'promote':
        switch (value.toLowerCase()) {
          case 'supervisor':
            switch (userData.value.spot) {
              case 'city':
                if (userData.value.city.supervisor == false) {
                  if (userData.value.city.workers >= 10) {
                    userData.value.city.workers -= 1
                    userData.value.city.wage -= 10.23
                    userData.value.city.supervisor = true
                    userData.value.city.wage += 20.46
                    chat.reply(`You have promoted one of your workers into a supervisor!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 10 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have a supervisor...`)
                }
                break;
              case 'beach':
                if (userData.value.beach.supervisor == false) {
                  if (userData.value.beach.workers >= 10) {
                    userData.value.beach.workers -= 1
                    userData.value.beach.wage -= 20.46
                    userData.value.beach.supervisor = true
                    userData.value.beach.wage += 30.69
                    chat.reply(`You have promoted one of your workers into a supervisor!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 10 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have a supervisor...`)
                }
                break;
              case 'dank':
                if (userData.value.dank.supervisor == false) {
                  if (userData.value.dank.workers >= 10) {
                    userData.value.dank.workers -= 1
                    userData.value.dank.wage -= 30.69
                    userData.value.dank.supervisor = true
                    userData.value.dank.wage += 40.92
                    chat.reply(`You have promoted one of your workers into a supervisor!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 10 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have a supervisor...`)
                }
                break;
              case 'space':
                if (userData.value.space.supervisor == false) {
                  if (userData.value.space.workers >= 10) {
                    userData.value.space.workers -= 1
                    userData.value.space.wage -= 40.92
                    userData.value.space.supervisor = true
                    userData.value.space.wage += 51.15
                    chat.reply(`You have promoted one of your workers into a supervisor!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 10 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have a supervisor...`)
                }
                break;
              case 'birming':
                if (userData.value.birming.supervisor == false) {
                  if (userData.value.birming.workers >= 10) {
                    userData.value.birming.workers -= 1
                    userData.value.birming.wage -= 51.15
                    userData.value.birming.supervisor = true
                    userData.value.birming.wage += 61.38
                    chat.reply(`You have promoted one of your workers into a supervisor!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 10 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have a supervisor...`)
                }
                break;

              default:
                chat.reply(`Hmm, looks like this spot doesnt support supervisors...`)
                break;
            }
            break;
          case 'accountant':
            switch (userData.value.spot) {
              case 'city':
                if (userData.value.city.accountant == false) {
                  if (userData.value.city.workers >= 20) {
                    userData.value.city.workers -= 1
                    userData.value.city.wage -= 10.23
                    userData.value.city.accountant = true
                    userData.value.city.wage += 30.69
                    chat.reply(`You have promoted one of your workers into an accountant!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 20 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have an accountant...`)
                }
                break;
              case 'beach':
                if (userData.value.beach.accountant == false) {
                  if (userData.value.beach.workers >= 20) {
                    userData.value.beach.workers -= 1
                    userData.value.beach.wage -= 20.46
                    userData.value.beach.accountant = true
                    userData.value.beach.wage += 40.92
                    chat.reply(`You have promoted one of your workers into an accountant!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 20 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have an accountant...`)
                }
                break;
              case 'dank':
                if (userData.value.dank.accountant == false) {
                  if (userData.value.dank.workers >= 20) {
                    userData.value.dank.workers -= 1
                    userData.value.dank.wage -= 30.69
                    userData.value.dank.accountant = true
                    userData.value.dank.wage += 51.15
                    chat.reply(`You have promoted one of your workers into an accountant!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 20 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have an accountant...`)
                }
                break;
              case 'space':
                if (userData.value.space.accountant == false) {
                  if (userData.value.space.workers >= 20) {
                    userData.value.space.workers -= 1
                    userData.value.space.wage -= 40.92
                    userData.value.space.accountant = true
                    userData.value.space.wage += 61.38
                    chat.reply(`You have promoted one of your workers into an accountant!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 20 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have an accountant...`)
                }
                break;
              case 'birming':
                if (userData.value.birming.accountant == false) {
                  if (userData.value.birming.workers >= 20) {
                    userData.value.birming.workers -= 1
                    userData.value.birming.wage -= 51.15
                    userData.value.birming.accountant = true
                    userData.value.birming.wage += 71.61
                    chat.reply(`You have promoted one of your workers into an accountant!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 20 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have an accountant...`)
                }
                break;

              default:
                chat.reply(`Hmm, looks like this spot doesnt support accountants...`)
                break;
            }
            break;
          case 'coowner':
            switch (userData.value.spot) {
              case 'city':
                if (userData.value.city.coowner == false) {
                  if (userData.value.city.workers >= 50) {
                    userData.value.city.workers -= 1
                    userData.value.city.wage -= 10.23
                    userData.value.city.coowner = true
                    userData.value.city.wage += 40.92
                    chat.reply(`You have promoted one of your workers into a co-owner!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 50 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have a co-owner...`)
                }
                break;
              case 'beach':
                if (userData.value.beach.coowner == false) {
                  if (userData.value.beach.workers >= 50) {
                    userData.value.beach.workers -= 1
                    userData.value.beach.wage -= 20.46
                    userData.value.beach.coowner = true
                    userData.value.beach.wage += 51.15
                    chat.reply(`You have promoted one of your workers into a co-owner!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 50 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have a co-owner...`)
                }
                break;
              case 'dank':
                if (userData.value.dank.coowner == false) {
                  if (userData.value.dank.workers >= 50) {
                    userData.value.dank.workers -= 1
                    userData.value.dank.wage -= 30.69
                    userData.value.dank.coowner = true
                    userData.value.dank.wage += 61.39
                    chat.reply(`You have promoted one of your workers into a co-owner!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 50 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have a co-owner...`)
                }
                break;
              case 'space':
                if (userData.value.space.coowner == false) {
                  if (userData.value.space.workers >= 50) {
                    userData.value.space.workers -= 1
                    userData.value.space.wage -= 40.92
                    userData.value.space.coowner = true
                    userData.value.space.wage += 71.61
                    chat.reply(`You have promoted one of your workers into an co-owner!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 50 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have a co-owner...`)
                }
                break;
              case 'birming':
                if (userData.value.birming.coowner == false) {
                  if (userData.value.birming.workers >= 50) {
                    userData.value.birming.workers -= 1
                    userData.value.birming.wage -= 51.15
                    userData.value.birming.coowner = true
                    userData.value.birming.wage += 81.84
                    chat.reply(`You have promoted one of your workers into an co-owner!`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`You need at least 50 workers to do this...`)
                  }
                } else {
                  chat.reply(`You already have a co-owner...`)
                }
                break;

              default:
                chat.reply(`Hmm, looks like this spot doesnt support supervisors...`)
                break;
            }
            break;
          default:
            chat.reply(`You cant change one of your workers into that...`)
            break;
        }
        break;

      case 'server':
        if (userData.value.timezone == undefined) {
          switch(value) {
            case 'asia':
              userData.value.timezone = 'asia'
              chat.reply(`You are now in the Asia server!`)
              break;
            case 'global':
              userData.value.timezone = 'global'
              chat.reply(`You are now in the Global server!`)
              break;
            case 'africa':
              userData.value.timezone = 'africa'
              chat.reply(`You are now in the Africa server!`)
              break;
            case 'antarctica':
              userData.value.timezone = 'antarctica'
              chat.reply(`You are now in the Antarctica server!`)
              break;
            case 'australia':
              userData.value.timezone = 'australia'
              chat.reply(`You are now in the Australia server!`)
              break;
            case 'europe':
              userData.value.timezone = 'europe'
              chat.reply(`You are now in the Europe server!`)
              break;
            default: 
              chat.reply(`Thats not a timezone you can change to... ("asia", "global", "africa", "antarctica", "australia", or "europe")`)
          }
        } else {
          chat.reply(`You already have a timezone set...`)
        }
        break;

      default:
        chat.reply(`Hmm, there was an error, check <b!help b!change> for more help on this command...`)
    }
  },
  description: "Change something about your stats"
};

export {Change};