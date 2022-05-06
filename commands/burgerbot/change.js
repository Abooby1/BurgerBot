import {getStuff} from "../../utils.js"

const Change = {
  names: ["change"],
  func: ({chat, args: [item, value], userData})=>{
    if (item) {
      if (item == "rankshow") {
        if (value == "true") {
          userData.value.rankshow = true
          chat.reply(`Your ranks will now show when b!stats is called!`)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          if (value == "false") {
            userData.value.rankshow = false
            chat.reply(`Your ranks will not show when b!stats is called!`)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          } else {
            chat.reply("Your value has to be true or false")
          }
        }
      }

      if (item == "postuse") {
        if (value == "true") {
          userData.value.postuse = true
          chat.reply(`Other people can now use commands on your connected post!`)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          if (value == "false") {
            userData.value.postuse = false
            chat.reply(`Other people can now not use commands on your connected post!`)
            setTimeout(function( ) {
              userData.update()
            }, 2500)
          }
        }
      }

      if (item == "normad" && getStuff(value.toLowerCase()) != false) {
        if (userData.value.money >= getStuff(value.toLowerCase()).cost) {
          userData.value.normad = getStuff(value.toLowerCase()).id
          chat.reply(`Your workers will now use ${getStuff(value.toLowerCase()).name} to advertise!`)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You cant use this advertisement... (cost $${getStuff(value.toLowerCase()).cost})`)
        }
      }
    } else {
      chat.reply("Please complete the command | b!change <item> <value>")
    }
  },
  description: "Change something about your stats"
};

export {Change};