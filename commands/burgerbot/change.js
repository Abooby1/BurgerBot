import {getStuff, getLet} from "../../utils.js"

const Change = {
  names: ["change"],
  func: async ({chat, args: [item, value], userData})=>{
    if (value == undefined) {
      chat.reply(`Please complete the command... (b!change <item> <value>)`); 
      return;
    }
    switch (item.toLowerCase()) {
      case "rankshow":
        switch(value.toLowerCase()) {
          case "true":
            userData.value.rankshow = true
            chat.reply(`Your ranks will now show when b!stats is called!`)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
            break;
          case "false":
            userData.value.rankshow = false
            chat.reply(`Your ranks will not show when b!stats is called!`)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
            break;

          default:
            chat.reply(`Please complete the command... (b!change rankshow <true/false>)`)
            break;
        }
        break;
        
      case "postuse":
        switch(value.toLowerCase()) {
          case "true":
            userData.value.postuse = true
            chat.reply(`Other people can now use commands on your connected post!`)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
            break;
          case "false":
            userData.value.postuse = false
            chat.reply(`Other people can now not use commands on your connected post!`)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
            break;

          default:
            chat.reply(`Please complete the command... (b!change postuse <true/false>`)
            break;
        }
        break;

      case "normad":
        switch (userData.value.spot.toLowerCase()) {
          case "city":
            if (getStuff(value.toLowerCase()).rank == "ad") {
              if (userData.value.credits >= getStuff(value.toLowerCase()).cost) {
                userData.value.normad = getStuff(value.toLowerCase()).id
                chat.reply(`Your city workers will now use ${getStuff(value.toLowerCase()).name} to advertise!`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant use this advertisement... (cost ${getStuff(value.toLowerCase()).costshow} credits)`)
              }
            } else {
              chat.reply(`Thats not an ad...`)
            }
            break;

          case "beach":
            if (getStuff(value.toLowerCase()).rank == "ad") {
              if (userData.value.credits >= getStuff(value.toLowerCase()).cost * 2) {
                userData.value.normadbeach = getStuff(value.toLowerCase()).id
                chat.reply(`Your beach workers will now use ${getStuff(value.toLowerCase()).name} to advertise!`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You cant use this advertisement... (cost ${getLet(value.toLowerCase().cost *2, 2)} credits)`)
              }
            } else {
              chat.reply(`Thats not an ad...`)
            }
            break;
        }
        break;

      case "normstove":
          switch (userData.value.spot.toLowerCase()) {
            case "city":
              if (userData.value.credits >= getStuff(value.toLowerCase()).cost) {
                if (userData.value.workers >= getStuff(value.toLowerCase()).needed) {
                  if (getStuff(value.toLowerCase()).rank == "stove") {
                    userData.value.normstove = getStuff(value.toLowerCase()).id
                    if (userData.value.workers > getStuff(value.toLowerCase()).max) {
                      var Lost = userData.value.workers - await getStuff(value.toLowerCase()).max
                      userData.value.workers -= Lost
                      userData.value.wage = getStuff(value.toLowerCase()).max * 10.23
                      userData.value.credits -= getStuff(value.toLowerCase().cost)
                    } else {
                      var Lost = 0
                    }
                    chat.reply(`Your workers will now use ${getStuff(value.toLowerCase()).name} to cook burgers in the city! (You can now get up to ${getStuff(value.toLowerCase()).max} workers! | Lost: ${Lost} workers...)`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`Thats not a stove...`)
                  }
                }
              } else {
                chat.reply(`You need ${getLet(getStuff(value.toLowerCase()).cost), 2} credits...`)
              }
              break;
            case "beach":
              if (userData.value.credits >= getStuff(value.toLowerCase()).cost * 2) {
                if (userData.value.workersbeach >= getStuff(value.toLowerCase()).needed) {
                  if (getStuff(value.toLowerCase()).rank == "stove") {
                    userData.value.normstovebeach = getStuff(value.toLowerCase()).id
                    if (userData.value.workersbeach > getStuff(value.toLowerCase()).max) {
                      var Lost = userData.value.workersbeach - await getStuff(value.toLowerCase()).max
                      userData.value.workersbeach -= Lost
                      userData.value.wagebeach = getStuff(value.toLowerCase()).max * 10.23
                      userData.value.credits -= getStuff(value.toLowerCase().cost * 2)
                    } else {
                      var Lost = 0
                    }
                    chat.reply(`Your workers will now use ${getStuff(value.toLowerCase()).name} to cook burgers in the beach! (You can now get up to ${getStuff(value.toLowerCase()).max} workers! | Lost: ${Lost} workers...)`)
                    setTimeout(function( ) {
                      userData.update()
                    }, 2500)
                  } else {
                    chat.reply(`Thats not a stove...`)
                  }
                }
              } else {
                chat.reply(`You need ${getLet(getStuff(value.toLowerCase()).cost * 2), 2} credits...`)
              }
              break;
          }
        break;

      case "normwater":
        switch(userData.value.spot.toLowerCase()) {
          case "city":
            if (getStuff(value.toLowerCase()).needed <= userData.value.customers) {
              userData.value.normwater = getStuff(value.toLowerCase()).id
              chat.reply(`Your workers will now use ${getStuff(value.toLowerCase()).name} to hydrate while advertising in the city! (multiplier: ×${getStuff(value.toLowerCase()).multi})`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
                chat.reply(`You dont have enough customers to have ${getStuff(value.toLowerCase()).name} as your hydrating drink... (needed: ${getStuff(value.toLowerCase()).costshow})`)
            }
            break;
          case "beach":
            if (getStuff(value.toLowerCase()).needed <= userData.value.customsbeach) {
              userData.value.normwaterbeach = getStuff(value.toLowerCase()).id
              chat.reply(`Your workers will now use ${getStuff(value.toLowerCase()).name} to hydrate while advertising in the beach! (multiplier: ×${getStuff(value.toLowerCase()).multi})`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
                chat.reply(`You dont have enough customers to have ${getStuff(value.toLowerCase()).name} as your hydrating drink... (needed: ${getLet(getStuff(value.toLowerCase()).cost * 2, 2)})`)
            }
            break;
        }
      case "spot":
        if (value.toLowerCase() == "city" || value.toLowerCase() == "beach") {
          if (userData.value.spots.includes(value.toLowerCase())) {
            if (userData.value.spot != value) {
              userData.value.spot = value
              chat.reply(`Your spot has been changed to ${value.toLowerCase()}!`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            } else {
              chat.reply(`Your already at this spot...`)
            }
          } else {
            switch (value.toLowerCase()) {
              case "beach":
                if (userData.value.credits >= 10000) {
                  chat.reply(`You bought a spot at the beach! Have fun!`)
                  userData.value.credits -= 10000
                  userData.value.spot = "beach"
                  userData.value.spots.push("beach")
                  setTimeout(function( ) {
                    userData.update()
                  }, 2500)
                } else {
                  chat.reply(`You dont have enough credits to buy a spot at a beach... (cost: 10k)`)
                }
                break;

              default:
                chat.reply(`Hmm, there was an error...`)
                break;
            }
          }
        } else {
          chat.reply(`Thats not a spot you can go to... (spots: 'city' and 'beach')`)
        }
        break;
    }
  },
  description: "Change something about your stats"
};

export {Change};