import {getStuff, getLet} from "../../utils.js"

const Hire = {
  names: ["hire"],
  func: ({chat, args: [value], userData})=>{
    value = parseFloat(value) || 1
    switch (userData.value.spot.toLowerCase()) {
      case "city":
        if (userData.value.city.money >= 100 * parseInt(value)) {
          userData.value.city.workers += parseInt(value)
          userData.value.city.money -= 100 * parseInt(value)
          userData.value.city.wage += 10.23 * parseInt(value)
          userData.value.exp += parseInt(value) * 1
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people...  ($100 per person)`)
        }
        break;
      case "beach":
        if (userData.value.beach.money >= 200 * parseInt(value)) {
          userData.value.beach.workers += parseInt(value)
          userData.value.beach.money -= 200 * parseInt(value)
          userData.value.beach.wage += 20.46 * parseInt(value)
          userData.value.exp += parseInt(value) * 2
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people... ($200 per person)`)
        }
        break;
      case "dank":
        if (userData.value.dank.money >= 500 * parseInt(value)) {
          userData.value.dank.workers += parseInt(value)
          userData.value.dank.money -= 500 * parseInt(value)
          userData.value.dank.wage += 30.69 * parseInt(value)
          userData.value.exp += parseInt(value) * 4
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people... ($500 per person)`)
        }
        break;
      case "london":
        if (userData.value.london.money >= 150 * parseInt(value)) {
          userData.value.london.workers += parseInt(value)
          userData.value.london.money -= 150 * parseInt(value)
          userData.value.london.wage += 30.69 * parseInt(value)
          userData.value.exp += parseInt(value) * 2
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people... ($150 per person)`)
        }
        break;
      case "space":
        if (userData.value.space.money >= 1000 * parseInt(value)) {
          userData.value.space.workers += parseInt(value)
          userData.value.space.money -= 1000 * parseInt(value)
          userData.value.space.wage += 40.92 * parseInt(value)
          userData.value.exp += parseInt(value) * 5
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people... ($1k per person)`)
        }
        break;
      case "birming":
        if (userData.value.space.money >= 1500 * parseInt(value)) {
          userData.value.space.workers += parseInt(value)
          userData.value.space.money -= 1500 * parseInt(value)
          userData.value.space.wage += 51.15 * parseInt(value)
          userData.value.exp += parseInt(value) * 6
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people... ($1.5k per person)`)
        }
        break;
      case 'summer':
        if (userData.value.summer.money >= 50 * parseInt(value)) {
          userData.value.summer.workers += parseInt(value)
          userData.value.summer.money -= 50 * parseInt(value)
          userData.value.summer.wage += 5.12 * parseInt(value)
          userData.value.exp += parseInt(value) * 3
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people... ($50 per person)`)
        }
        break;
        //event
      case "event":
        if (userData.value.event.money >= 50 * parseInt(value)) {
          userData.value.event.workers += parseInt(value)
          userData.value.event.money -= 50 * parseInt(value)
          userData.value.event.wage += 5.12 * parseInt(value)
          userData.value.exp += parseInt(value) * 3
          if (parseInt(value) >= 2) {
            chat.reply(`You hired ${getLet(parseInt(value))} people!`)
          } else {
            chat.reply(`You hired ${getLet(parseInt(value))} person!`)
          }
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to hire ${getLet(parseInt(value))} people... ($50 per person)`)
        }
        break;
    }
  },
  description: "Hire more workers to automate your business",
  permission: rank => rank != "Banned"
};

export {Hire}