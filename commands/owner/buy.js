import { getUserDataManager } from "../../database.js";
import {audit} from '../../index.js'

const Buy = {
  names: ["buy"],
  func: async ({client, chat, args: [name, item, spot, amount]})=>{
    //b!buy <name> <spot> <amount>
    const user = client.getUserFromUsername(name)
    if (user != undefined) {
      const userid = user.id
      var data = await getUserDataManager(userid)
      const gain = parseFloat(amount) || 0
      switch (spot) {
        case 'city':
          if (item == 'workers') {
            data.value.city.workers += gain
            data.value.city.wage += gain * 10.23
            audit(`${chat.author.username} added ${gain} workers (city) into ${name}'s account`)
            setTimeout(function( ) {
              data.update()
            }, 2500)
          }
          if (item == 'money') {
            data.value.city.money += gain
            audit(`${chat.author.username} added $${gain} (city) into ${name}'s account`)
            setTimeout(function( ) {
              data.update()
            }, 2500)
          }
          if (item == 'customs') {
            data.value.city.customers += gain
            audit(`${chat.author.username} added ${gain} customers (city) into ${name}'s account`)
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
              audit(`${chat.author.username} added ${gain} workers (beach) into ${name}'s account`)
              setTimeout(function( ) {
                data.update()
              }, 2500)
            }
            if (item == 'money') {
              data.value.beach.money += gain
              audit(`${chat.author.username} added $${gain} (beach) into ${name}'s account`)
              setTimeout(function( ) {
                data.update()
              }, 2500)
            }
            if (item == 'customs') {
              data.value.beach.customers += gain
              audit(`${chat.author.username} added ${gain} customers (beach) into ${name}'s account`)
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
              data.value.dank.wage += gain * 30.69
              audit(`${chat.author.username} added ${gain} workers (dank) into ${name}'s account`)
              setTimeout(function( ) {
                data.update()
              }, 2500)
            }
            if (item == 'money') {
              data.value.dank.money += gain
              audit(`${chat.author.username} added $${gain} (dank) into ${name}'s account`)
              setTimeout(function( ) {
                data.update()
              }, 2500)
            }
            if (item == 'customs') {
              data.value.dank.customers += gain
              audit(`${chat.author.username} added ${gain} customers (dank) into ${name}'s account`)
              setTimeout(function( ) {
                data.update()
              }, 2500)
            }
          } else {
            chat.reply(`That person doesnt have a spot at Danker Land...`)
          }
          break;
      }
    } else {
      chat.reply(`That name is not valid...`)
    }
  },
  description: "Buy command for other bots",
  permission: "Bot"
};

export {Buy};