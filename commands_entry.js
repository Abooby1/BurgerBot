import { Commands } from "./commands/index.js";
import { getUserDataManager } from "./database.js"
import { PREFIX } from "./constants.js";
import { event, getRandomInt, Version} from "./utils.js"
import {audit} from "./index.js"

import {Client} from "photop-client"

var Started = false
const commands = {};

function registerCommand(command) {
  for (const name of command.names) {
    commands[name] = command;
  }
}

Commands.forEach(registerCommand)

export async function onChat(client, chat) {
  if (chat.text.match("b!constructor")) return;
  if (chat.author.id == "6244e8a4a95b113f10314747") return;
  if (chat.text.toLowerCase().startsWith(PREFIX)) {
    const match = chat.text.substring(PREFIX.length).match(/([a-z0-9\.]+)(.*)/i);
    if (match) {
      const [_, commandName, _body] = match;
      const body = _body.trim();
      const command = commands[commandName.toLowerCase()]
      if (command) {
        const args = body.split(/\s+/);
        const context = { client, chat, args, body, commands }
        context.userData = await getUserDataManager(chat.author.id)
        if (command.permission) {
          let valid;
          switch (typeof command.permission) {
            case "string": valid = command.permission == context.userData.value.rank; break;
            case "function": valid = command.permission(context.userData.value.rank); break;
            default: console.log("command.permission is not a string or a function"); return;
          }
          if (!valid) {
            chat.reply("You are not allowed to use this command")
            return;
          }
        }
        
        const data = await getUserDataManager(chat.post.author.id)
        if (data.value.postuse == false) {
          if (chat.author.id != chat.post.author.id) {
            if (chat.author.id != '6154f0d0a8d6d106c5b869b6') {
              chat.reply(`This person has their postuse turned to 'false' (you cant use commands on their connected post) try connecting your own post! ("startburger")`)
              return;
            }
          }
        }

        //extras
        if (Started == false) {
          if (context.userData.value.rank == "Special") {
            Started = true
            setInterval(async function( ) {
              const post = await client.groups["62535105a95b113f103c2d57"].post("$connect");
              setTimeout(async function( ) {
                const something = await post.chat(`$bot ${chat.author.id}`)
              }, 5000)
            }, 600000)
          }
        }

        if (context.userData.value.troph == false) {
          if (context.userData.value.city.money >= 100000000000000) {
            context.userData.value.troph = true
            if (!context.userData.value.spots.includes('dank')) {
              context.userData.value.spots.push('dank')
            }
            chat.reply(`Congrats on $100T! You got yourself a spot at Danker Land! (use <b!change spot dank> to change your spot to dank)`)
          }
        }

        if (event.name == "Reward Event") {
          if (getRandomInt(1, 50) <= 5) {
            switch (event.earn[getRandomInt(0, event.earn.length)]) {
              case "credits":
                const m1 = getRandomInt(10, 50)
                context.userData.value.credits += m1
                setTimeout(function( ) {
                  context.userData.update()
                }, 2500)
                chat.reply(`You earned ${m1} credits from the Reward Event!`)
                break;
              case "customs":
                const m2 = getRandomInt(2, 10)
                context.userData.value.city.customers += m2
                setTimeout(function( ) {
                  context.userData.update()
                }, 2500)
                chat.reply(`You earned ${m2} customers from the Reward Event!`)
                break;
              case "worker":
                const m3 = getRandomInt(1,2)
                context.userData.value.city.workers += m3
                context.userData.value.city.wage += m3 * 5.12
                setTimeout(function( ) {
                  context.userData.update()
                }, 2500)
                chat.reply(`You earned ${m3} worker(s) from the Reward Event! (wage added: $${m3 * 5.12})`)
                break;
              case "exp":
                const m4 = getRandomInt(10, 25)
                context.userData.value.exp += m4
                setTimeout(function( ) {
                  context.userData.update()
                }, 2500)
                chat.reply(`You earned ${m4} exp from the Reward Event!`)
            }
          }
        }

        if (context.userData.value.exp >= 100) {
          context.userData.value.exp = 0
          context.userData.value.lvl += 1
          setTimeout(function( ) {
            context.userData.update()
          }, 2500)
        }

        if (event.name == "End of Season Event") {
          context.userData.value.exp += 10
          setTimeout(function( ) {
            context.userData.update()
          }, 2500)
        }

        await command.func(context);
        
        setTimeout(function( ) {
          audit(`${chat.author.username} used b!${commandName}`)
        }, 2500)
        // command not found
      } else {
        chat.reply("Hmmm, please try that command again... (Most likely its not a command)")
      }
    } else {
      // tell the user bad syntax
      chat.reply("Bad syntax 💀")
    }
  }
}