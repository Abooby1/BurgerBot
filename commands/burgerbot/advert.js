import {getRandomInt, getStuff, event, getLet, f} from "../../utils.js"

const Advertise = {
  names: ["advert"],
  func: async ({chat, args: [item], userData})=>{
    if (item && getStuff(item) != "false") {
      const d = getStuff(item)
      var y = d.cost
      var t = false
      
      if (event.name == "Advert Event") {
        y = y / 2
      }
      switch (userData.value.spot.toLowerCase()) {
        case "city":
          if (userData.value.city.money >= y) {
            t = true
          }
          break;
        case "beach":
          if (userData.value.beach.money >= y * 2) {
            t = true
            y = y * 2
          } else {
            y = y * 2
          }
          break;
        case "dank":
          if (userData.value.dank.money >= y * 3) {
            t = true
            y = y * 3
          } else {
            y = y * 3
          }
          break;
        case "space":
          if (userData.value.space.money >= y * 4) {
            t = true
            y = y * 4
          } else {
            y = y * 4
          }
          break;
        case 'birming':
          if (userData.value.birming.money >= y * 5) {
            t = true
            y = y * 5
          } else {
            y = y * 5
          }
          break;
        case 'london':
          if (userData.value.london.money >= y * 6) {
            t = true
            y = y * 6
          } else {
            y = y * 6
          }
          break;
        case 'summer':
          if (userData.value.summer.money >= y / 2) {
            t = true
            y = y / 2
          } else {
            y = y / 2
          }
          break;
        case 'arena':
          if (userData.value.arena.money >= y / 3) {
            t = true
            y = y / 3
          } else {
            y = y / 3
          }
          break;
          //event
        case "event":
          if (userData.value.event.money >= y / 2) {
            t = true
            y = y / 2
          } else {
            y = y / 2
          }
          break;
      }
      
      if (t == true) {
        if (getRandomInt(1, d.chance) == 1){
          var EarnedW = getRandomInt(0, 2)
        } else {
          var EarnedW = 0
        }
        var Earned = getRandomInt(1, d.earn)
        switch(userData.value.spot.toLowerCase()) {
          case "city":
            userData.value.city.money -= y
            userData.value.city.customers += Earned
            userData.value.city.workers += EarnedW
            userData.value.city.wage += EarnedW * 10.23
            break;
          case "beach":
            userData.value.beach.money -= y
            userData.value.beach.customers += Earned
            userData.value.beach.workers += EarnedW
            userData.value.beach.wage += EarnedW * 20.46
            break;
          case "dank":
            userData.value.dank.money -= y
            userData.value.dank.customers += Earned
            userData.value.dank.workers += EarnedW
            userData.value.dank.wage += EarnedW * 30.69
            break;
          case "space":
            userData.value.space.money -= y
            userData.value.space.customers += Earned
            userData.value.space.workers += EarnedW
            userData.value.space.wage += EarnedW * 40.92
            break;
          case "birming":
            userData.value.birming.money -= y
            userData.value.birming.customers += Earned
            userData.value.birming.workers += EarnedW
            userData.value.birming.wage += EarnedW * 51.15
            break;
          case "london":
            userData.value.london.money -= y
            userData.value.london.customers += Earned
            userData.value.london.workers += EarnedW
            userData.value.london.wage += EarnedW * 30.69
            break;
          case 'summer':
            userData.value.summer.money -= y
            userData.value.summer.customers += Earned
            userData.value.summer.workers += EarnedW
            break;
          case 'arena':
            userData.value.arena.money -= y
            userData.value.arena.customers += Earned
            userData.value.arena.workers += EarnedW
            break;
            //event
          case "event":
            userData.value.event.money -= y
            userData.value.event.customers += Earned
            userData.value.event.workers += EarnedW
            break;
        }
        chat.reply(`You earned ${Earned} customer(s) and ${EarnedW} worker(s) by using ${d.name}! (cost: $${getLet(y, 2)} | spot: ${userData.value.spot})`)
        setTimeout(function() {
          userData.update()
        }, 2500)
      } else {
        chat.reply(`You dont have enough to advertise with ${d.name}... (cost: $${getLet(y, 2)})`)
      }
    } else {
      chat.reply(`Please finish the command... (b!advert <item>)`)
    }
  },
  description: "Advertise",
  permission: rank => rank != "Banned"
};

export {Advertise};