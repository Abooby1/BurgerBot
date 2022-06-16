import {getLet, getStuff, getRandomInt, event, f} from "../../utils.js"

export var AutoA = []
export var AutoW = []

function getevw (n) {
  switch (n) {
    case 1: 
      return `One of your workers were eating the burgers... (they were fired by your supervisor)`
    case 2:
      return `One of your workers started a fight... (they were fired by your supervisor)`
    case 3:
      return `One of your workers were taking money from the cash register... (they were fired by your supervisor)`
    case 4:
      return  `One of your workers tried to start a riot... (they were fired by your supervisor)`
    case 5:
      return `One of your workers started acting like Amber Heard... (they were fired by your supervisor)`
    case 6:
      return `One of your workers urinated on some of the burgers... (they were fired by your supervisor)`
  }
}

function geteva (n) {
  switch (n) {
    case 1:
      return `One of your workers fought a resident... (they were fired by your supervisor)`
    case 2:
      return `One of your workers broke a window... (they were fired by your supervisor)`
    case 3:
      return `One of your workers were twerking on someone... (they were fired by your supervisor)`
    case 4:
      return `One of your workers were wrestling "demons" in the bathroom... (they were fired by your supervisor)`
  }
}

const Auto = {
  names: ["auto"],
  func: async ({chat, args: [item, body], userData})=>{
    if (item.toLowerCase() == "work" || item.toLowerCase() == 'w') {
      if (AutoW.includes(chat.author.id)) {
        chat.reply(`Your workers are already working...`)
        return;
      }
    } else {
      if (AutoA.includes(chat.author.id)) {
        chat.reply(`Your workers are already advertising...`)
        return;
      }
    }
    switch (item.toLowerCase()) {
      case "work":
      case 'w':
        switch (userData.value.spot.toLowerCase()) {
          case "city":
            if (userData.value.city.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoW.push(chat.author.id)
                
                var earn = await f("workcity", chat.author.id)
                var t = 0
                var t1 = 0
      
                chat.reply(`Your workers started working in the city! (please wait ${24 * parseInt(body)} seconds)`)
      
                var i = setInterval(function( ) {
                  if (t1 < parseInt(body)) {
                    t1 += 1
                    t += earn
                    chat.reply(`One day has passed...`)
                    userData.value.city.money += earn
                    userData.value.net += earn
                    if (userData.value.city.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.city.workers -= 1
                        userData.value.city.wage -= 10.23
                        chat.reply(getevw(getRandomInt(1, 6)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.city.accountant == true) {
                      chat.reply(`Your workers are done working! (total: $${getLet(t, 2)})`)
                    } else {
                      chat.reply(`Your workers are done working!`)
                    }
                    AutoW.splice(AutoW.indexOf(chat.author.id), 1)
                    clearInterval(i)
                  }
                }, 24000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto work <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;
          case "beach":
            if (userData.value.beach.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoW.push(chat.author.id)
                
                var earn = await f("workbeach", chat.author.id)
                var tt = 0
                var t2 = 0
      
                chat.reply(`Your workers started working on the beach! (please wait ${12 * parseInt(body)} seconds)`)
      
                var o = setInterval(function( ) {
                  if (t2 < parseInt(body)) {
                    tt += earn
                    t2 += 1
                    chat.reply(`One day has passed...`)
                    userData.value.beach.money += earn
                    userData.value.net += earn
                    if (userData.value.beach.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.beach.workers -= 1
                        userData.value.beach.wage -= 20.46
                        chat.reply(getevw(getRandomInt(1, 6)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.beach.accountant == true) {
                      chat.reply(`Your workers are done working! (total: $${getLet(tt, 2)})`)
                    } else {
                      chat.reply(`Your workers are done working!`)
                    }
                    AutoW.splice(AutoW.indexOf(chat.author.id), 1)
                    clearInterval(o)
                  }
                }, 12000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto work <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;
          case "dank":
            if (userData.value.dank.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoW.push(chat.author.id)
                
                var earn = await f("workdank", chat.author.id)
                var y = 0
                var y1 = 0
      
                chat.reply(`Your workers started working in the city! (please wait ${24 * parseInt(body)} seconds)`)
      
                var ii = setInterval(function( ) {
                  if (y1 < parseInt(body)) {
                    y1 += 1
                    y += earn
                    chat.reply(`One day has passed...`)
                    userData.value.dank.money += earn
                    userData.value.net += earn
                    if (userData.value.dank.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.dank.workers -= 1
                        userData.value.dank.wage -= 30.69
                        chat.reply(getevw(getRandomInt(1, 6)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.dank.accountant == true) {
                      chat.reply(`Your workers are done working! (total: $${getLet(y, 2)})`)
                    } else {
                      chat.reply(`Your workers are done working!`)
                    }
                    AutoW.splice(AutoW.indexOf(chat.author.id), 1)
                    clearInterval(ii)
                  }
                }, 24000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto work <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;

          case "london":
            if (userData.value.london.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoW.push(chat.author.id)
                
                var earn = await f("worklondon", chat.author.id)
                var y = 0
                var y1 = 0
      
                chat.reply(`Your workers started working in london! (please wait ${24 * parseInt(body)} seconds)`)
      
                var ii = setInterval(function( ) {
                  if (y1 < parseInt(body)) {
                    y1 += 1
                    y += earn
                    chat.reply(`One day has passed...`)
                    userData.value.london.money += earn
                    userData.value.net += earn
                    if (userData.value.london.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.london.workers -= 1
                        userData.value.london.wage -= 30.69
                        chat.reply(getevw(getRandomInt(1, 6)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.london.accountant == true) {
                      chat.reply(`Your workers are done working! (total: $${getLet(y, 2)})`)
                    } else {
                      chat.reply(`Your workers are done working!`)
                    }
                    AutoW.splice(AutoW.indexOf(chat.author.id), 1)
                    clearInterval(ii)
                  }
                }, 24000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto work <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;

          case "space":
            if (userData.value.space.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoW.push(chat.author.id)
                
                var earn = await f("workspace", chat.author.id)
                var w = 0
                var w1 = 0
      
                chat.reply(`Your workers started working in the Space Center! (please wait ${24 * parseInt(body)} seconds)`)
      
                var ww = setInterval(function( ) {
                  if (w1 < parseInt(body)) {
                    w1 += 1
                    w += earn
                    chat.reply(`One day has passed...`)
                    userData.value.space.money += earn
                    userData.value.net += earn
                    if (userData.value.space.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.space.workers -= 1
                        userData.value.space.wage -= 40.92
                        chat.reply(getevw(getRandomInt(1, 6)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.space.accountant == true) {
                      chat.reply(`Your workers are done working! (total: $${getLet(w, 2)})`)
                    } else {
                      chat.reply(`Your workers are done working!`)
                    }
                    AutoW.splice(AutoW.indexOf(chat.author.id), 1)
                    clearInterval(ww)
                  }
                }, 24000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto work <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;
          case "birming":
            if (userData.value.birming.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoW.push(chat.author.id)
                
                var earn = await f("workbirming", chat.author.id)
                var birming = 0
                var birming1 = 0
      
                chat.reply(`Your workers started working in Birmingham! (please wait ${24 * parseInt(body)} seconds)`)
      
                var birming2 = setInterval(function( ) {
                  if (birming1 < parseInt(body)) {
                    birming1 += 1
                    birming += earn
                    chat.reply(`One day has passed...`)
                    userData.value.birming.money += earn
                    userData.value.net += earn
                    if (userData.value.birming.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.birming.workers -= 1
                        userData.value.birming.wage -= 51.15
                        chat.reply(getevw(getRandomInt(1, 6)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.birming.accountant == true) {
                      chat.reply(`Your workers are done working! (total: $${getLet(birming, 2)})`)
                    } else {
                      chat.reply(`Your workers are done working!`)
                    }
                    AutoW.splice(AutoW.indexOf(chat.author.id), 1)
                    clearInterval(birming2)
                  }
                }, 24000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto work <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;

          default:
            chat.reply(`Hmm, looks like this spot doesnt support automation...`)
        }
        break;
      case "advert":
      case 'a':
        switch (userData.value.spot.toLowerCase()) {
          case "city":
            if (userData.value.city.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoA.push(chat.author.id)
                
                var earn = await f("advertcity", chat.author.id)
                var ttt = 0
                var t3 = 0
                var EarnedW = 0
      
                chat.reply(`Your workers started advertising in the city! (please wait ${24 * parseInt(body)} seconds)`)
      
                var oo = setInterval(function( ) {
                  if (t3 < parseInt(body)) {
                    ttt += earn
                    t3 += 1
                    const Earned = getRandomInt(0, getStuff(userData.value.city.normad).earn)
                    if (getRandomInt(1, getStuff(userData.value.city.normad).chance) == 1) {
                      EarnedW = getRandomInt(1, 2)
                    }
                    chat.reply(`One day has passed...`)
                    userData.value.city.customers += Earned
                    userData.value.city.workers += EarnedW
                    userData.value.city.money -= earn
                    if (userData.value.city.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.city.workers -= 1
                        userData.value.city.wage -= 10.23
                        chat.reply(geteva(getRandomInt(1, 4)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.city.accountant == true) {
                      chat.reply(`Your workers are done advertising! (total cost: $${getLet(ttt, 2)})`)
                    } else {
                      chat.reply(`Your workers are done advertising!`)
                    }
                    AutoA.splice(AutoA.indexOf(chat.author.id), 1)
                    clearInterval(oo)
                  }
                }, 24000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto advert <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;
          case "beach":
            if (userData.value.beach.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoA.push(chat.author.id)
                
                var earn = await f("advertbeach", chat.author.id)
                var tttt = 0
                var t4 = 0
                var EarnedW = 0
      
                chat.reply(`Your workers started advertising on the beach! (please wait ${12 * parseInt(body)} seconds)`)
      
                var ooo = setInterval(function( ) {
                  if (t4 < parseInt(body)) {
                    tttt += earn
                    t4 += 1
                    const Earned = getRandomInt(0, getStuff(userData.value.beach.normad).earn)
                    if (getRandomInt(1, getStuff(userData.value.beach.normad).chance) == 1) {
                      EarnedW = getRandomInt(1, 2)
                    }
                    chat.reply(`One day has passed...`)
                    userData.value.beach.customers += Earned
                    userData.value.beach.workers += EarnedW
                    userData.value.beach.money -= earn
                    if (userData.value.beach.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.beach.workers -= 1
                        userData.value.beach.wage -= 20.46
                        chat.reply(geteva(getRandomInt(1, 4)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.beach.accountant == true) {
                      chat.reply(`Your workers are done advertising! (total cost: $${getLet(tttt, 2)})`)
                    } else {
                      chat.reply(`Your workers are done advertising!`)
                    }
                    AutoA.splice(AutoA.indexOf(chat.author.id), 1)
                    clearInterval(ooo)
                  }
                }, 12000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto advert <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;
          case "dank":
            if (userData.value.dank.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoA.push(chat.author.id)
                
                var earn = await f("advertdank", chat.author.id)
                var yy = 0
                var y2 = 0
                var EarnedW = 0
      
                chat.reply(`Your workers started advertising on Danker Land! (please wait ${12 * parseInt(body)} seconds)`)
      
                var iii = setInterval(function( ) {
                  if (y2 < parseInt(body)) {
                    yy += earn
                    y2 += 1
                    const Earned = getRandomInt(0, getStuff(userData.value.dank.normad).earn)
                    if (getRandomInt(1, getStuff(userData.value.dank.normad).chance) == 1) {
                      EarnedW = getRandomInt(1, 2)
                    }
                    chat.reply(`One day has passed...`)
                    userData.value.dank.customers += Earned
                    userData.value.dank.workers += EarnedW
                    userData.value.dank.money -= earn
                    if (userData.value.dank.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.dank.workers -= 1
                        userData.value.dank.wage -= 30.69
                        chat.reply(geteva(getRandomInt(1, 4)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.dank.accountant == true) {
                      chat.reply(`Your workers are done advertising! (total cost: $${getLet(yy, 2)})`)
                    } else {
                      chat.reply(`Your workers are done advertising!`)
                    }
                    AutoA.splice(AutoA.indexOf(chat.author.id), 1)
                    clearInterval(iii)
                  }
                }, 12000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto advert <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;
          case "london":
            if (userData.value.london.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoA.push(chat.author.id)
                
                var earn = await f("advertlondon", chat.author.id)
                var yy = 0
                var y2 = 0
                var EarnedW = 0
      
                chat.reply(`Your workers started advertising in london! (please wait ${12 * parseInt(body)} seconds)`)
      
                var iii = setInterval(function( ) {
                  if (y2 < parseInt(body)) {
                    yy += earn
                    y2 += 1
                    const Earned = getRandomInt(0, getStuff(userData.value.london.normad).earn)
                    if (getRandomInt(1, getStuff(userData.value.london.normad).chance) == 1) {
                      EarnedW = getRandomInt(1, 2)
                    }
                    chat.reply(`One day has passed...`)
                    userData.value.london.customers += Earned
                    userData.value.london.workers += EarnedW
                    userData.value.london.money -= earn
                    if (userData.value.london.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.london.workers -= 1
                        userData.value.london.wage -= 30.69
                        chat.reply(geteva(getRandomInt(1,4)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.london.accountant == true) {
                      chat.reply(`Your workers are done advertising! (total cost: $${getLet(yy, 2)})`)
                    } else {
                      chat.reply(`Your workers are done advertising!`)
                    }
                    AutoA.splice(AutoA.indexOf(chat.author.id), 1)
                    clearInterval(iii)
                  }
                }, 12000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto advert <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;
          case "space":
            if (userData.value.space.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoA.push(chat.author.id)
                
                var earn = await f("advertspace", chat.author.id)
                var space = 0
                var space2 = 0
                var EarnedW = 0
      
                chat.reply(`Your workers started advertising in the Space Center! (please wait ${12 * parseInt(body)} seconds)`)
      
                var iii = setInterval(function( ) {
                  if (space2 < parseInt(body)) {
                    space += earn
                    space2 += 1
                    const Earned = getRandomInt(0, getStuff(userData.value.space.normad).earn)
                    if (getRandomInt(1, getStuff(userData.value.space.normad).chance) == 1) {
                      EarnedW = getRandomInt(1, 2)
                    }
                    chat.reply(`One day has passed...`)
                    userData.value.space.customers += Earned
                    userData.value.space.workers += EarnedW
                    userData.value.space.money -= earn
                    if (userData.value.space.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.space.workers -= 1
                        userData.value.space.wage -= 40.92
                        chat.reply(geteva(getRandomInt(1, 4)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.space.accountant == true) {
                      chat.reply(`Your workers are done advertising! (total cost: $${getLet(space, 2)})`)
                    } else {
                      chat.reply(`Your workers are done advertising!`)
                    }
                    AutoA.splice(AutoA.indexOf(chat.author.id), 1)
                    clearInterval(iii)
                  }
                }, 12000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto advert <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;
          case "birming":
            if (userData.value.birming.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoA.push(chat.author.id)
                
                var earn = await f("advertbirming", chat.author.id)
                var birming3 = 0
                var birming4 = 0
                var EarnedW = 0
      
                chat.reply(`Your workers started advertising in Birmingham! (please wait ${12 * parseInt(body)} seconds)`)
      
                var birming5 = setInterval(function( ) {
                  if (birming4 < parseInt(body)) {
                    birming3 += earn
                    birming4 += 1
                    const Earned = getRandomInt(0, getStuff(userData.value.birming.normad).earn)
                    if (getRandomInt(1, getStuff(userData.value.birming.normad).chance) == 1) {
                      EarnedW = getRandomInt(1, 2)
                    }
                    chat.reply(`One day has passed...`)
                    userData.value.birming.customers += Earned
                    userData.value.birming.workers += EarnedW
                    userData.value.birming.money -= earn
                    if (userData.value.birming.supervisor == true) {
                      if (getRandomInt(1, 50) == 1) {
                        userData.value.birming.workers -= 1
                        userData.value.birming.wage -= 51.15
                        chat.reply(geteva(getRandomInt(1, 4)))
                      }
                    }
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    if (userData.value.birming.accountant == true) {
                      chat.reply(`Your workers are done advertising! (total cost: $${getLet(birming3, 2)})`)
                    } else {
                      chat.reply(`Your workers are done advertising!`)
                    }
                    AutoA.splice(AutoA.indexOf(chat.author.id), 1)
                    clearInterval(birming5)
                  }
                }, 12000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto advert <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least one worker to do this...`)
            }
            break;

          default:
            chat.reply(`Hmm, it looks like this spot doesnt support automation...`)
            break;
        }
    }
  },
  description: "Automate and earn",
  permission: rank => rank != "Banned"
};

export {Auto};