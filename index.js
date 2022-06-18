import { Client } from "photop-client";
import { onChat } from "./commands_entry.js";
import { START, PREFIX } from "./constants.js";
import {db, defaultData, getUserDataManager} from "./database.js"
import {Version, VersionID, SeasonNum, f, event, getRandomInt, SeasonName, downtime, DowntimeEnd, changeTimeZone, BetaID} from "./utils.js"

const client = new Client({ username: "BurgerBot", password: process.env["Pass"] }, { logSocketMessages: false });

const noop = () => { };

const VersionSay = `1. Added Arena (use b!change spot arena to change into the spot | use b!help arena for arena help)`

export async function audit (m) {
  const p = await client.getPost('62a37bbc15ad3e0f9dd41a81')
  p.chat(`${m} (${await changeTimeZone(new Date(), 'America/New_York').toLocaleString()})`)
}

client.onInvite = async (invite) => {
  audit(`${invite.From} invited BurgerBot into ${invite.Name}`)
  await client.joinGroup(invite._id)
  client.groups[invite._id].post(`Im now in the ${invite.Name} group! Make sure to connect me by posting "startburger"! (All commands used are recorded | No AFKing/bot automations)`)
}

async function main () {
  const posts = JSON.parse(await db.get('posts'))
  var times = 0
  setInterval(async function( ) {
    if (posts[times] != undefined) {
      const post = client.getPostFromCache(posts[times])
      if (post != undefined) {
        setTimeout(async function( ) {
          const pp = post.text.toLowerCase().split(' ')
          post.chat('Im reconnected!')
          await post.connect(120000, () => {
            posts.splice(posts.indexOf(posts[times]), 1)
            db.set('posts', JSON.stringify(posts))
            post.onChat = noop;
            if (pp.includes(START)) {
              post.chat("Bot has disconnected... Reason: inactivity")
            }
          })
          post.onChat = (chat) => {
            //
            post.connect(120000, () => {
              posts.splice(posts.indexOf(posts[times]), 1)
              db.set('posts', JSON.stringify(posts))
              post.onChat = noop;
              if (pp.includes(START)) {
                post.chat("Bot has disconnected... Reason: inactivity")
              }
            })
            onChat(client, chat);
            //
          }
          times += 1
        }, 2500)
      } else {
        await posts.splice(posts.indexOf(posts[times]), 1)
        db.set('posts', JSON.stringify(posts))
        times += 1
      }
    }
  }, 5000)
}

client.onPost = async (post) => {
  const pp = post.text.toLowerCase().split(' ')
  const resetTimeout = await post.connect(120000, async () => {
    post.onChat = noop; //replace post.onChat to free up memory
    if (pp.includes(START)) {
      post.chat("Bot has disconnected... Reason: inactivity")
      const posts = JSON.parse(await db.get('posts'))
      posts.splice(post.id, 1)
      db.set('posts', JSON.stringify(posts))
    }
  })
  if (pp.includes('refreshburger')) {
    const d111111 = await getUserDataManager(post.author.id)
    if (d111111.value.rank == 'Owner') {
      process.exit()
    } else {
      post.chat(`You cant use this cmd...`)
    }
  }
  if (pp.includes(START)) {
    if (downtime == false) {
      const posts = JSON.parse(await db.get('posts'))
      if (posts.indexOf(post.id) < 0) {
        posts.push(post.id)
        db.set('posts', JSON.stringify(posts))
      }
      setTimeout(async function( ) {
        resetTimeout()
        const data = await db.get(`v1/${post.author.id}`) 
        const d1 = await getUserDataManager(post.author.id)
        const d2 = JSON.parse(await db.get('Banned'))
        const d12 = JSON.stringify(defaultData)
        const ddd = JSON.parse(await db.get('PostSay'))
        if (data != undefined) {
          if (ddd[post.author.id] != undefined) {
            post.chat(ddd[post.author.id])
            audit(`${post.author.username} connected a post`)
          } else {
            if (d1.value.rank != 'Banned' && !d2.includes(post.author.id)) {
              post.chat(`Im now connected to your post ${post.author.username}! (use b!help for help!)`)
              audit(`${post.author.username} connected a post`)
            } else {
              post.chat('Sorry... Youre banned from BurgerBot...')
              post.disconnect()
            }
          }
          if (typeof d1.value.version != 'string') {
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
                  post.chat(`Welcome to Season ${SeasonNum} (${SeasonName})! You got yourself 25 credits! (you are back to level 1!)`)
                  if (d1.value.arena != undefined) {
                    post.chat(`Your arena rewards have been given to you!`)
                    delete d1.value.arena
                    if (d1.value.arena.rank != 'Noobie') {
                      const get = parseFloat(getPoints(d1.value.arena.rank, 'points')) || 1500 / 8
                      d1.value.credits += get.toString().split('.')[0]
                    }
                  }
                  if (d1.value.spot == 'arena') {
                    post.chat('Your spot has been changed to the City Spot! (Arena has refreshed | rewards have been given to you!)')
                    d1.value.spot = 'city'
                  }
                  setTimeout(function( ) {
                    d1.update()
                  }, 3000)
                  break;
    
                default: 
                  post.chat(`Hmm, it looks like there was an error (please report this to @Abooby | post has been disconnected)`)
                  post.disconnect()
              }
            }
          } else {
            const ver = d1.value.version.split(' ')
            if (BetaID[ver[1]] == undefined) {
              post.chat(`Youre currently in an outdated beta test... (data has been refreshed)`)
              audit(`${post.author.username} has been refreshed from an outdated beta version`)
              const data = await getUserDataManager(post.author.id);

              data.value = JSON.parse(JSON.stringify(defaultData));
              data.applyRanks();
          
              setTimeout(function() {
                data.update();
              }, 1500)
            }
          }
          if (d1.value.spot == 'event') {
            if (event.name != 'Spot Event') {
              d1.value.spot = 'city'
              d1.value.event.money = 0
              d1.value.event.customers = 1
              d1.value.event.workers = 0
              d1.value.event.wage = 0
              post.chat(`Your spot was switched to the city due to the spot event ending...`)
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
            case 'birming':
              if (d1.value.birming.coowner == true) {
                var i = setInterval(async function( ) {
                  var earn = 0
                  if (event.name == 'Co-Owner Event') {
                    earn = await f('workbirming', post.author.id) / 3 * 2
                  } else {
                    earn = await f('workbirming', post.author.id) / 3
                  }
                  if (earn >= 500) {
                    d1.value.birming.money += earn
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
            case 'london':
              if (d1.value.london.coowner == true) {
                var i = setInterval(async function( ) {
                  var earn = 0
                  if (event.name == 'Co-Owner Event') {
                    earn = await f('worklondon', post.author.id) / 3 * 2
                  } else {
                    earn = await f('worklondon', post.author.id) / 3
                  }
                  if (earn >= 500) {
                    d1.value.london.money += earn
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
          post.chat(`Welcome to BurgerBot Season ${SeasonNum} ${post.author.username}! Make sure to use b!help for help and to use b!change server <server> to change your server!`)
          audit(`${post.author.username} made an account`)
        }
      }, 2000)
    } else {
      const d11111111 = await getUserDataManager(post.author.id)
      if (d11111111.value.rank != 'Owner') {
        post.chat(`BurgerBot is currently in downtime until ${DowntimeEnd}...`)
        post.disconnect()
      } else {
        post.chat(`You are currently testing BurgerBot...`)
      }
    }
  }

  post.onChat = (chat) => {
    if (pp.includes(START)) {
      if (chat.text.startsWith('pls')) {setTimeout(function() {
        chat.reply(`Really?! This aint @DankMemer...`); 
        audit(`${post.author.username} used "pls" instead of "b!"`);}, 750)
      }
      resetTimeout();
      onChat(client, chat);
    }
  }
}

client.onReady = async () => {
  setTimeout(async function( ) {
    const v = await db.get('Version')
    if (v != VersionID) {
      const post = await client.post(`V${VersionID}: \n${VersionSay}\n\nPost "startburger" to connect me!\n\n#BurgerBot #BurgerBotUpdate`)
      db.set('Version', VersionID)
      setTimeout(function( ) {
        post.chat('Have fun with the update!')
        post.disconnect()
        setTimeout(async function( ) {
          const post = await client.groups['61c74569ae0b4b2a3897fce1'].post(`V${VersionID}: \n${VersionSay}\n\nPost "startburger" to connect me!`)
          setTimeout(function( ) {
            post.chat('Have fun with the update!')
            post.disconnect()
          }, 2500)
        }, 2500)
      }, 1000)
    }
  }, 100)
  if (downtime == true) {
    client.editor().setDescription(`Currently in downtime until ${DowntimeEnd}... \n\nMade by @Abooby`).save()
  } else {
    client.editor().setDescription(`Online with V${VersionID} \nSeason ${SeasonNum} (${SeasonName})\n\nMake sure to connect me by posting "startburger"\nBot made by @Abooby`).save()
  }
  //post saving
  let interval = setInterval(()=>{
    if (client._network.simpleSocket.secureID) {
      console.log("Bot is ready!")
      main();
      clearInterval(interval)
    }
  }, 100)
}

import express from "express"
const app = express();

app.get('/', (req, res) => res.send("Running!"))
app.listen(3000);