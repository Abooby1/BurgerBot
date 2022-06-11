import { getUserDataManager } from "../../database.js";

const Buy = {
  names: ["buy"],
  func: async ({chat, args: [userid, item, spot, amount]})=>{
    var data = await getUserDataManager(userid)
    const gain = parseFloat(amount) || 0
    switch (spot) {
      case 'city':
        if (item == 'workers') {
          data.value.city.workers += gain
          data.value.city.wage += gain * 10.23
          setTimeout(function( ) {
            data.update()
          }, 2500)
        }
        if (item == 'money') {
          data.value.city.money += gain
          setTimeout(function( ) {
            data.update()
          }, 2500)
        }
        if (item == 'customs') {
          data.value.city.customers += gain
          setTimeout(function( ) {
            data.update()
          }, 2500)
        }
        break;
      case 'beach':
        if (data.value.spot.includes('beach')) {
          if (item == 'workers') {
            data.value.beach.workers += gain
            data.value.beach.wage += gain * 20.46
            setTimeout(function( ) {
              data.update()
            }, 2500)
          }
          if (item == 'money') {
            data.value.beach.money += gain
            setTimeout(function( ) {
              data.update()
            }, 2500)
          }
          if (item == 'customs') {
            data.value.beach.customers += gain
            setTimeout(function( ) {
              data.update()
            }, 2500)
          }
        } else {
          chat.reply(`That person doesnt have a spot at the Beach...`)
        }
        break;
      case 'dank':
        if (data.value.spot.includes('dank')) {
          if (item == 'workers') {
            data.value.dank.workers += gain
            data.value.dank.wage += gain * 30.68
            setTimeout(function( ) {
              data.update()
            }, 2500)
          }
          if (item == 'money') {
            data.value.dank.money += gain
            setTimeout(function( ) {
              data.update()
            }, 2500)
          }
          if (item == 'customs') {
            data.value.dank.customers += gain
            setTimeout(function( ) {
              data.update()
            }, 2500)
          }
        } else {
          chat.reply(`That person doesnt have a spot at Danker Land...`)
        }
        break;
    }
  },
  description: "Buy command for other bots",
  permission: "Bot"
};

export {Buy};