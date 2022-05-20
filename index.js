import { Client } from "photop-client";
import { onChat } from "./commands_entry.js";
import { START, PREFIX } from "./constants.js";
import {db} from "./database.js"
import {Version, VersionID} from "./utils.js"

const client = new Client({ username: "BurgerBot", password: process.env["Pass"] }, { logSocketMessages: false });

const noop = () => { };

const VersionSay = `1. When bot refreshed, it would make the event 'undefined' - fixed`

client.onPost = async (post) => {
  const resetTimeout = await post.connect(120000, () => {
    post.onChat = noop; //replace post.onChat to free up memory
    if (post.text == START) {
      post.chat("Bot has disconnected... Reason: inactivity")
    }
  })
  if (post.text == START) {
    setTimeout(async function( ) {
      resetTimeout()
      const data = await db.get(`v1/${post.author.id}`) 
      if (data != undefined) {
        switch (post.author.id) {
          case "6154f0d0a8d6d106c5b869b6":
            post.chat(`Welcome king!`)
            break;
          default:
            post.chat(`Im now connected to your post ${post.author.username}! (use b!help for help!)`)
            break;
        }
      } else {
        post.chat(`Welcome to BurgerBot Season ${Version} ${post.author.username}! Make sure to use b!help for help!`)
      }
    }, 2000)
  }

  post.onChat = (chat) => {
    if (post.text == START) {
      if (chat.text.startsWith('pls')) {setTimeout(function() {chat.reply(`Really?! This aint @DankMemer...`)}, 1500)}
      resetTimeout();
      onChat(client, chat);
    }
  }
}

client.onReady = () => {
  console.log("Bot is ready!")
  setTimeout(async function( ) {
    const v = await db.get('Version')
    if (v != VersionID) {
      const post = await client.post(`V${VersionID} added: \n${VersionSay}`)
      db.set('Version', VersionID)
      setTimeout(function( ) {
        post.chat('Have fun with the update!')
      }, 1000)
    }
  }, 100)
}

import express from "express"
const app = express();

app.get('/', (req, res) => res.send("Running!"))
app.listen(3000);