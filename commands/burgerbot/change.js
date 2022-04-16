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
    } else {
      chat.reply("You need to have something to change... | b!change <what you want to change> <value>")
    }
  },
  description: "Change something about your stats"
};

export {Change};