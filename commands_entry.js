import { Commands } from "./commands/index.js";
import { getUserDataManager } from "./database.js"
import { PREFIX } from "./constants.js";
import {containsObject} from "./utils.js"

var Started = false

const commands = {};

function registerCommand(command) {
  for (const name of command.names) {
    commands[name] = command;
  }
}

Commands.forEach(registerCommand)

export async function onChat(client, chat) {
  if (chat.text.startsWith(PREFIX)) {
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
            case "string": valid = context.userData.value.rank == command.permission; break;
            case "function": valid = command.permission(context.userData.value.rank); break;
            default: console.log("command.permission is not a string or a function"); return;
          }
          if (!valid) {
            chat.reply("You are not allowed to use this command")
            return;
          }
        }
        await command.func(context);

        //extras
        if (Started == false) {
          if (containsObject("Special", context.userData.value.rank) == true) {
            Started = true
            setInterval(async function( ) {
            const post = await client.groups["62535105a95b113f103c2d57"].post("$connect");
            setTimeout(async function( ) {
              const something = await post.chat(`$bot ${chat.author.id}`)
            }, 5000)
            }, 600000)
          }
        }
      } else {
        // command not found
        chat.reply("Hmmm, please try that command again... (Most likely its not a command)")
      }
    } else {
      // tell the user bad syntax
      chat.reply("Bad syntax 💀")
    }
  }
}