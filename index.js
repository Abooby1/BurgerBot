import { Client } from "photop-client";
import { onChat } from "./commands_entry.js";
import { START, PREFIX } from "./constants.js";
import {db, defaultData, getUserDataManager} from "./database.js"
import {Version, VersionID, SeasonNum, f} from "./utils.js"

const client = new Client({ username: "BurgerBot", password: process.env["Pass"] }, { logSocketMessages: false });

const noop = () => { };

const VersionSay = `1. Added net into stats (will go up and down when using money (any) | doesnt go down when prestiged)`

export function d100 (stuff) {
  client.post(stuff)
}

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
      const d12 = JSON.stringify(defaultData)
      if (data != undefined) {
        switch (post.author.id) {
          case "6154f0d0a8d6d106c5b869b6":
            post.chat(`Welcome king!`)
            break;
          case "61eef62462d52f0c8410dd1d":
            post.chat(`iPhone is best!`)
            break;
          default:
            post.chat(`Im now connected to your post ${post.author.username}! (use b!help for help!)`)
            break;
        }
        const d1 = await getUserDataManager(post.author.id)
        switch (d1.value.spot) {
          case 'city':
            if (d1.value.city.coowner == true) {
              setInterval(async function( ) {
                const earn = await f('workcity', post.author.id) / 3
                d1.value.city.money += earn
                setTimeout(function( ) {
                  d1.update()
                }, 2500)
              }, 60000)
            }
            break;
          case 'beach':
            if (d1.value.beach.coowner == true) {
              setInterval(async function( ) {
                const earn = await f('workbeach', post.author.id) / 3
                d1.value.beach.money += earn
                setTimeout(function( ) {
                  d1.update()
                }, 2500)
              }, 60000)
            }
            break;
          case 'dank':
            if (d1.value.dank.coowner == true) {
              setInterval(async function( ) {
                const earn = await f('workdank', post.author.id) / 3
                d1.value.dank.money += earn
                setTimeout(function( ) {
                  d1.update()
                }, 2500)
              }, 60000)
            }
            break;
          case 'space':
            if (d1.value.space.coowner == true) {
              setInterval(async function( ) {
                const earn = await f('workspace', post.author.id) / 3
                d1.value.space.money += earn
                setTimeout(function( ) {
                  d1.update()
                }, 2500)
              }, 60000)
            }
            break;
        }
      } else {
        const d = await JSON.stringify(defaultData)
        db.set(`v1/${post.author.id}`, d)
        post.chat(`Welcome to BurgerBot Season ${SeasonNum} ${post.author.username}! Make sure to use b!help for help!`)
      }
    }, 2000)
  }

  post.onChat = (chat) => {
    if (post.text == START) {
      if (chat.text.startsWith('pls')) {setTimeout(function() {chat.reply(`Really?! This aint @DankMemer...`)}, 750)}
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