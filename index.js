import { Client } from "photop-client";
import { onChat } from "./commands_entry.js";
import { START, PREFIX } from "./constants.js";
import {db, defaultData, getUserDataManager} from "./database.js"
import {Version, VersionID, SeasonNum, f, event, getRandomInt, SeasonName} from "./utils.js"

const client = new Client({ username: "BurgerBot", password: process.env["Pass"] }, { logSocketMessages: false });

const noop = () => { };

const VersionSay = `1. Bug fixes`

client.onPost = async (post) => {
  var Connected = false
  const pp = post.text.toLowerCase().split(' ')
  const resetTimeout = await post.connect(120000, () => {
    post.onChat = noop; //replace post.onChat to free up memory
    if (pp.includes(START)) {
      post.chat("Bot has disconnected... Reason: inactivity")
      Connected = false
    }
  })
  if (pp.includes(START)) {
    Connected = true
    setTimeout(async function( ) {
      resetTimeout()
      const data = await db.get(`v1/${post.author.id}`) 
      const d1 = await getUserDataManager(post.author.id)
      const d12 = JSON.stringify(defaultData)
      const ddd = JSON.parse(await db.get('PostSay'))
      if (data != undefined) {
        if (ddd[post.author.id] != undefined) {
          post.chat(ddd[post.author.id])
        } else {
          if (d1.value.rank != 'Banned') {
            post.chat(`Im now connected to your post ${post.author.username}! (use b!help for help!)`)
          } else {
            post.chat('Sorry... Youre banned from BurgerBot...')
            post.disconnect()
          }
        }
        if (d1.value.version != Version) {
          const v = d1.value.version
          switch (v) {
            case 2://new season (version before the current version)
              d1.value.exp = 0
              d1.value.lvl = 1
              d1.value.lastlvl = 0
              d1.value.credits += 25
              d1.value.version = 3
              d1.value.net = 0
              chat.reply(`Welcome to Season ${SeasonNum} (${SeasonName})! You got yourself 25 credits! (you are back to level 1!)`)
              setTimeout(function( ) {
                d1.update()
              }, 2500)
              break;
            case 3://version 4
              d1.value.version = 4
              d1.value.city.tables = 0
              d1.value.beach.tables = 0
              d1.value.dank.tables = 0
              d1.value.space.tables = 0
              d1.value.birming.tables = 0
              chat.reply(`Your data is now up to date!`)
              setTimeout(function( ) {
                d1.update()
              }, 2500)
              break;

            default: 
              chat.reply(`Hmm, it looks like there was an error (please report this to @Abooby | post has been disconnected)`)
              post.disconnect()
          }
        }
        if (d1.value.spot == 'event') {
          if (event.name != 'Spot Event') {
            d1.value.spot = 'city'
            d1.value.event.money = 0
            d1.value.event.customers = 1
            d1.value.event.workers = 0
            d1.value.event.wage = 0
            chat.reply(`Your spot was switched to the city due to the spot event ending...`)
            setTimeout(async function( ) {
              d1.update()
            }, 2500)
          }
        }
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
    if (pp.includes(START)) {
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
        post.disconnect()
        setTimeout(async function( ) {
          const post = await client.groups['61c74569ae0b4b2a3897fce1'].post(`V${VersionID}: \n${VersionSay}`)
          setTimeout(function( ) {
            post.chat('Have fun with the update!')
            post.disconnect()
          }, 2500)
        }, 2500)
      }, 1000)
    }
  }, 100)
}

import express from "express"
const app = express();

app.get('/', (req, res) => res.send("Running!"))
app.listen(3000);