import {getLet, getStuff, SeasonMulti} from "../../utils.js"

export var working = []

const Work = {
  names: ["work"],
  func: ({chat, body, userData})=>{
    if (working.includes(chat.author.id)){
      chat.reply(`Your already working....`)
      return;
    }
    switch (userData.value.spot.toLowerCase()) {
      case "city":
        if (body && body * 1 <= 24 && body > 0) {
          body = parseFloat(body) || 0;
          working.push(chat.author.id)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
          chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
          
          setTimeout(function( ) {
            var Earned = body * userData.value.city.prestige * 0.01 * userData.value.city.customers * SeasonMulti
            userData.value.city.money += Earned
            userData.value.net += Earned
            userData.value.exp += 1
            chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
            working.splice(working.indexOf(chat.author.id), 1)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          }, body * 1000)
        } else {
          chat.reply("Please add the hours you want to work (b!work <hours> | max: 24)")
        }
        break;
      case "beach":
        if (body && body * 1 <= 12 && body > 0) {
          body = parseFloat(body) || 0;
          working.push(chat.author.id)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
          chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
          
          setTimeout(function( ) {
            var Earned = body * userData.value.beach.prestige * 0.01 * userData.value.beach.customers * SeasonMulti
            userData.value.beach.money += Earned
            userData.value.net += Earned
            userData.value.exp += 2
            chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
            working.splice(working.indexOf(chat.author.id), 1)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          }, body * 1000)
        } else {
          chat.reply("Please add the hours you want to work (b!work <hours> | max: 12)")
        }
        break;
      case "dank":
        if (body && body * 1 <= 12 && body > 0) {
          body = parseFloat(body) || 0;
          working.push(chat.author.id)
          
          chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
          
          setTimeout(function( ) {
            var Earned = body * userData.value.dank.prestige * 0.01 * userData.value.dank.customers *SeasonMulti
            userData.value.dank.money += Earned
            userData.value.net += Earned
            userData.value.exp += 5
            chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
            working.splice(working.indexOf(chat.author.id), 1)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          }, body * 1000)
        } else {
          chat.reply("Please add the hours you want to work (b!work <hours> | max: 12)")
        }
        break;
      case "space":
        if (body && body * 1 <= 12 && body > 0) {
          body = parseFloat(body) || 0;
          working.push(chat.author.id)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
          chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
          
          setTimeout(function( ) {
            var Earned = body * userData.value.space.prestige * 0.01 * userData.value.space.customers * SeasonMulti
            userData.value.space.money += Earned
            userData.value.net += Earned
            userData.value.exp += 5
            chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
            working.splice(working.indexOf(chat.author.id), 1)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          }, body * 1000)
        } else {
          chat.reply("Please add the hours you want to work (b!work <hours> | max: 12)")
        }
        break;
      case "event":
        if (body && body * 1 <= 12 && body > 0) {
          body = parseFloat(body) || 0;
          working.push(chat.author.id)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
          chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
          
          setTimeout(function( ) {
            var Earned = body * 0.1 * userData.value.event.customers
            userData.value.event.money += Earned
            userData.value.net += Earned
            userData.value.exp += 10
            chat.reply(`You worked for ${body} hours and earned $${getLet(Earned, 2)}!`)
            working.splice(working.indexOf(chat.author.id), 1)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          }, body * 1000)
        } else {
          chat.reply("Please add the hours you want to work (b!work <hours> | max: 12)")
        }
        break;
    }
  },
  description: "Work for money",
  permission: rank => rank != "Banned"
};

export {Work};