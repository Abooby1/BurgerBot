import {getLet, getStuff, getRandomInt, event, f} from "../../utils.js"

var AutoA = []
var AutoW = []

const Auto = {
  names: ["auto"],
  func: async ({chat, args: [item, body], userData})=>{
    if (item.toLowerCase() == "work") {
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
        switch (userData.value.spot.toLowerCase()) {
          case "city":
            if (userData.value.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoW.push(chat.author.id)
                
                var earn = await f("workcity", chat.author.id)
                var t = 0
                var t1 = 0
      
                chat.reply(`Your workers started working in the city! (please wait ${24 * parseInt(body)} seconds to see your total earning!)`)
      
                var i = setInterval(function( ) {
                  if (t1 != parseInt(body)) {
                    t1 += 1
                    t += earn
                    chat.reply(`One day has passed...`)
                    userData.value.money += earn
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`Your workers are done working! (total: $${getLet(t, 2)})`)
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
            if (userData.value.workersbeach >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoW.push(chat.author.id)
                
                var earn = await f("workbeach", chat.author.id)
                var tt = 0
                var t2 = 0
      
                chat.reply(`Your workers started working on the beach! (please wait ${12 * parseInt(body)} seconds to see your total earning!)`)
      
                var o = setInterval(function( ) {
                  if (t2 != parseInt(body)) {
                    tt += earn
                    t2 += 1
                    chat.reply(`One day has passed...`)
                    userData.value.moneybeach += earn
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`Your workers are done working! (total: $${getLet(tt, 2)})`)
                    AutoW.splice(AutoW.indexOf(chat.author.id), 1)
                    clearInterval(o)
                  }
                }, 12000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto work <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least 1 worker to do this...`)
            }
        }
        break;
      case "advert":
        switch (userData.value.spot.toLowerCase()) {
          case "city":
            if (userData.value.workers >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoA.push(chat.author.id)
                
                var earn = await f("advertcity", chat.author.id)
                var ttt = 0
                var t3 = 0
                var EarnedW = 0
      
                chat.reply(`Your workers started advertising in the city! (please wait ${24 * parseInt(body)} seconds to see your total earning!)`)
      
                var oo = setInterval(function( ) {
                  if (t3 != parseInt(body)) {
                    ttt += earn
                    t3 += 1
                    const Earned = getRandomInt(0, getStuff(userData.value.normad).earn)
                    if (getRandomInt(1, getStuff(userData.value.normad).chance) == 1) {
                      EarnedW = getRandomInt(1, 2)
                    }
                    chat.reply(`One day has passed...`)
                    userData.value.customers += Earned
                    userData.value.workers += EarnedW
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`Your workers are done advertising! (total cost: $${getLet(ttt, 2)})`)
                    AutoA.splice(AutoA.indexOf(chat.author.id), 1)
                    clearInterval(oo)
                  }
                }, 24000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto advert <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least 1 worker to do this...`)
            }
            break;
          case "beach":
            if (userData.value.workersbeach >= 1) {
              if (parseInt(body) >= 1 && parseInt(body) <= 5) {
                AutoA.push(chat.author.id)
                
                var earn = await f("advertbeach", chat.author.id)
                var tttt = 0
                var t4 = 0
                var EarnedW = 0
      
                chat.reply(`Your workers started advertising on the beach! (please wait ${12 * parseInt(body)} seconds to see your total earning!)`)
      
                var ooo = setInterval(function( ) {
                  if (t4 != parseInt(body)) {
                    tttt += earn
                    t4 += 1
                    const Earned = getRandomInt(0, getStuff(userData.value.normadbeach).earn)
                    if (getRandomInt(1, getStuff(userData.value.normadbeach).chance) == 1) {
                      EarnedW = getRandomInt(1, 2)
                    }
                    chat.reply(`One day has passed...`)
                    userData.value.customsbeach += Earned
                    userData.value.workersbeach += EarnedW
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`Your workers are done advertising! (total cost: $${getLet(tttt, 2)})`)
                    AutoA.splice(AutoA.indexOf(chat.author.id), 1)
                    clearInterval(ooo)
                  }
                }, 12000)
              } else {
                chat.reply(`You didnt specify how many days you want your workers to work... (b!auto advert <days> | max: 5)`)
              }
            } else {
              chat.reply(`You need at least 1 worker to do this...`)
            }
            break;
        }
    }
  },
  description: "Automate and earn",
  permission: rank => rank != "Banned"
};

export {Auto};