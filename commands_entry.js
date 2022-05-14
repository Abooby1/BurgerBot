import { Commands } from "./commands/index.js";
import { getUserDataManager } from "./database.js"
import { PREFIX } from "./constants.js";
import {containsObject, event, getRandomInt} from "./utils.js"

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
            chat.reply(`This person has their postuse to false (you cant use commands on their connected post) try connecting your own post!`)
            return;
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
          if (context.userData.value.money >= 100000000000000) {
            context.userData.value.troph = true
            const post = await client.groups["62535105a95b113f103c2d57"].post("cappy")
            setTimeout(async function( ) {
              const something = await post.chat(`c!bot ${chat.author.id} burgerbotmoney`)
              chat.reply(`Congrats! You got $100t! (You got the BurgerBot money trophy collectable in CapBot!)`)
            }, 3000)
          }
        }

        if (event.name == "Reward Event") {
          if (getRandomInt(1, 50) <= 5) {
            switch (event.earn[getRandomInt(event.earn.length)]) {
              case "credits":
                const m1 = getRandomInt(10, 50)
                context.userData.value.credits += m1
                setTimeout(function( ) {
                  context.userData.update()
                }, 2500)
                chat.reply(`You earned $${m1} from the Reward Event!`)
                break;
              case "customs":
                const m2 = getRandomInt(10, 20)
                context.userData.value.customers += m2
                setTimeout(function( ) {
                  context.userData.update()
                }, 2500)
                chat.reply(`You earned ${m2} customers from the Reward Event!`)
                break;
              case "worker":
                const m3 = getRandomInt(1, 5)
                context.userData.value.workers += m3
                context.userData.value.wage += m3 * 5.12
                setTimeout(function( ) {
                  context.userData.update()
                }, 2500)
                chat.reply(`You earned ${m3} workers from the Reward Event! (wage added: $${m3 * 5.12})`)
                break;
            }
          }
        }

        await command.func(context);
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