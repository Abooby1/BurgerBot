import { Client } from "photop-client";
import { onChat } from "./commands_entry.js";
import { START, PREFIX } from "./constants.js";
import {db, defaultData, getUserDataManager} from "./database.js"
import {Version, VersionID, SeasonNum, f, event, getRandomInt} from "./utils.js"

const client = new Client({ username: "BurgerBot", password: process.env["Pass"] }, { logSocketMessages: false });

const noop = () => { };

const VersionSay = `1. Your co-owner will only make your workers auto w when your profits (auto w) are more than $500`

export function d100 (stuff) {
  client.post(stuff)
}

client.onPost = async (post) => {
  var Connected = false
  const resetTimeout = await post.connect(120000, () => {
    post.onChat = noop; //replace post.onChat to free up memory
    if (post.text == START) {
      post.chat("Bot has disconnected... Reason: inactivity")
      Connected = false
    }
  })
  if (post.text == START) {
    Connected = true
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
          case '60bd0243edf9d8003785ad79':
            post.chat(`Hullo WUTAdam!`)
            break;
          default:
            post.chat(`Im now connected to your post ${post.author.username}! (use b!help for help!)`)
            break;
        }
        const d1 = await getUserDataManager(post.author.id)
        if (event.name == 'Start of Season Event') {
          setInterval(function( ) {
            switch (event.earn[getRandomInt(0, event.earn.length)]) {
              case 'credits':
                d1.value.credits += 1
                setTimeout(function( ) {
                  d1.update()
                }, 2500)
                break;
              case 'exp':
                d1.value.exp += 1
                setTimeout(function( ) {
                  d1.update()
                }, 2500)
                break;
            }
          }, 60000)
        }
        switch (d1.value.spot) {
          case 'city':
            if (d1.value.city.coowner == true) {
              var i = setInterval(async function( ) {
                var earn = 0
                if (event.name == 'Co-Owner Event') {
                  earn = await f('workcity', post.author.id) / 3 * 2
                } else {
                  earn = await f('workcity', post.author.id) / 3
                }
                if (earn >= 500) {
                  d1.value.city.money += earn
                  d1.value.net += earn
                  setTimeout(function( ) {
                    d1.update()
                  }, 2500)
                } else {
                  clearInterval(i)
                }
              }, 60000)
            }
            break;
          case 'beach':
            if (d1.value.beach.coowner == true) {
              var i = setInterval(async function( ) {
                var earn = 0
                if (event.name == 'Co-Owner Event') {
                  earn = await f('workbeach', post.author.id) / 3 * 2
                } else {
                  earn = await f('workbeach', post.author.id) / 3
                }
                if (earn >= 500) {
                  d1.value.beach.money += earn
                  d1.value.net += earn
                  setTimeout(function( ) {
                    d1.update()
                  }, 2500)
                } else {
                  clearInterval(i)
                }
              }, 60000)
            }
            break;
          case 'dank':
            if (d1.value.dank.coowner == true) {
              var i = setInterval(async function( ) {
                var earn = 0
                if (event.name == 'Co-Owner Event') {
                  earn = await f('workdank', post.author.id) / 3 * 2
                } else {
                  earn = await f('workdank', post.author.id) / 3
                }
                if (earn >= 500) {
                  d1.value.dank.money += earn
                  d1.value.net += earn
                  setTimeout(function( ) {
                    d1.update()
                  }, 2500)
                } else {
                  clearInterval(i)
                }
              }, 60000)
            }
            break;
          case 'space':
            if (d1.value.space.coowner == true) {
              var i = setInterval(async function( ) {
                var earn = 0
                if (event.name == 'Co-Owner Event') {
                  earn = await f('workspace', post.author.id) / 3 * 2
                } else {
                  earn = await f('workspace', post.author.id) / 3
                }
                if (earn >= 500) {
                  d1.value.space.money += earn
                  d1.value.net += earn
                  setTimeout(function( ) {
                    d1.update()
                  }, 2500)
                } else {
                  clearInterval(i)
                }
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
      const post = await client.post(`V${VersionID}: \n${VersionSay}`)
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