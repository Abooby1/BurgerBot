import {getLet, getStuff, SeasonMulti, event, d12d} from "../../utils.js"

export var working = []

const Work = {
  names: ["work"],
  func: ({chat, args: [body, type], userData})=>{
    if (working.includes(chat.author.id)){
      chat.reply(`Youre already working....`)
      return;
    }
    switch (userData.value.spot.toLowerCase()) {
      case "city":
        body = parseFloat(body) || 24;
        if (body * 1 > 24 || body < 0) {
          chat.reply(`You cant work that many hours... (max: '24')`)
          break;
        }
        working.push(chat.author.id)
        setTimeout(function( ) {
          userData.update()
        }, 2500)
        chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
        
        setTimeout(function( ) {
          var Earned = body * userData.value.city.prestige * 0.01 * userData.value.city.customers * SeasonMulti
          userData.value.city.money += Earned
          userData.value.net += Earned
          if (event.name == 'End of Season Event') {
            userData.value.exp += 10
          } else {
            if (d12d == false) {
              userData.value.exp += 1
            } else {
              userData.value.exp += 6
            }
          }
          chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
          working.splice(working.indexOf(chat.author.id), 1)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        }, body * 1000)
        break;
      case "beach":
        body = parseFloat(body) || 12;
        if (body * 1 > 12 || body < 0) {
          chat.reply(`You cant work that many hours... (max: '12')`)
          break;
        }
        working.push(chat.author.id)
        setTimeout(function( ) {
          userData.update()
        }, 2500)
        chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
        
        setTimeout(function( ) {
          var Earned = body * userData.value.beach.prestige * 0.01 * userData.value.beach.customers * SeasonMulti
          userData.value.beach.money += Earned
          userData.value.net += Earned
          if (event.name == 'End of Season Event') {
            userData.value.exp += 15
          } else {
            if (d12d == false) {
              userData.value.exp += 2
            } else {
              userData.value.exp += 7
            }
          }
          chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
          working.splice(working.indexOf(chat.author.id), 1)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        }, body * 1000)
        break;
      case "dank":
        body = parseFloat(body) || 30;
        working.push(chat.author.id)
        if (body * 1 > 30 || body < 0) {
          chat.reply(`You cant work that many hours... (max: '30')`)
          break;
        }
        chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
        
        setTimeout(function( ) {
          var Earned = body * userData.value.dank.prestige * 0.01 * userData.value.dank.customers *SeasonMulti
          userData.value.dank.money += Earned
          userData.value.net += Earned
          if (event.name == 'End of Season Event') {
            userData.value.exp += 20
          } else {
            if (d12d == false) {
              userData.value.exp += 5
            } else {
              userData.value.exp += 10
            }
          }
          chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
          working.splice(working.indexOf(chat.author.id), 1)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        }, body * 1000)
        break;
      case "space":
        body = parseFloat(body) || 12;
        if (body * 1 > 12 || body < 0) {
          chat.reply(`You cant work that many hours... (max: '12')`)
          break;
        }
        working.push(chat.author.id)
        setTimeout(function( ) {
          userData.update()
        }, 2500)
        chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
        
        setTimeout(function( ) {
          var Earned = body * userData.value.space.prestige * 0.01 * userData.value.space.customers * SeasonMulti
          userData.value.space.money += Earned
          userData.value.net += Earned
          if (event.name == 'End of Season Event') {
            userData.value.exp += 25
          } else {
            if (d12d == false) {
              userData.value.exp += 8
            } else {
              userData.value.exp += 13
            }
          }
          chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
          working.splice(working.indexOf(chat.author.id), 1)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        }, body * 1000)
        break;
      case "london":
        body = parseFloat(body) || 30;
        if (body * 1 > 30 || body < 0) {
          chat.reply(`You cant work that many hours... (max: '30')`)
          break;
        }
        working.push(chat.author.id)
        setTimeout(function( ) {
          userData.update()
        }, 2500)
        chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
        
        setTimeout(function( ) {
          var Earned = body * userData.value.london.prestige * 0.01 * userData.value.london.customers * SeasonMulti
          userData.value.london.money += Earned
          userData.value.net += Earned
          if (event.name == 'End of Season Event') {
            userData.value.exp += 30
          } else {
            if (d12d == false) {
              userData.value.exp += 10
            } else {
              userData.value.exp += 15
            }
          }
          chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
          working.splice(working.indexOf(chat.author.id), 1)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        }, body * 1000)
        break;
      case "birming":
        body = parseFloat(body) || 24;
        if (body * 1 > 24 || body < 0) {
          chat.reply(`You cant work that many hours... (max: '24')`)
          break;
        }
        working.push(chat.author.id)
        setTimeout(function( ) {
          userData.update()
        }, 2500)
        chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
        
        setTimeout(function( ) {
          var Earned = body * userData.value.birming.prestige * 0.01 * userData.value.birming.customers * SeasonMulti
          userData.value.birming.money += Earned
          userData.value.net += Earned
          if (event.name == 'End of Season Event') {
            userData.value.exp += 30
          } else {
            if (d12d == false) {
              userData.value.exp += 10
            } else {
              userData.value.exp += 15
            }
          }
          chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
          working.splice(working.indexOf(chat.author.id), 1)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        }, body * 1000)
        break;
      case "summer":
        body = parseFloat(body) || 35;
        if (body * 1 > 35 || body < 0) {
          chat.reply(`You cant work that many hours... (max: '35')`)
          break;
        }
        working.push(chat.author.id)
        setTimeout(function( ) {
          userData.update()
        }, 2500)
        chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
        
        setTimeout(function( ) {
          var Earned = body * userData.value.summer.prestige * 0.01 * userData.value.summer.customers * SeasonMulti
          userData.value.summer.money += Earned
          userData.value.net += Earned
          if (event.name == 'End of Season Event') {
            userData.value.exp += 25
          } else {
            if (d12d == false) {
              userData.value.exp += 8
            } else {
              userData.value.exp += 13
            }
          }
          chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
          working.splice(working.indexOf(chat.author.id), 1)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        }, body * 1000)
        break;
        //event
      case "event":
        body = parseFloat(body) || 12;
        if (body * 1 > 12 || body < 0) {
          chat.reply(`You cant work that many hours... (max: '12')`)
          break;
        }
        working.push(chat.author.id)
        setTimeout(function( ) {
          userData.update()
        }, 2500)
        chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
        
        setTimeout(function( ) {
          var Earned = body * 0.1 * userData.value.event.customers
          userData.value.event.money += Earned
          userData.value.exp += 10
          chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
          working.splice(working.indexOf(chat.author.id), 1)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        }, body * 1000)
        break;
    }
  },
  description: "Work for money",
  permission: rank => rank != "Banned"
};

export {Work};