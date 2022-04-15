const Prestige = {
  names: ["prestige"],
  func: ({chat, userData})=>{
    if (userData.value.money >= 5000) {
      if (userData.value.workers >= 250) {
        if (userData.value.customers >= 500) {
          userData.value.prestige += 1
          userData.value.money = 10
          userData.value.workers = 0
          userData.value.customers = 1
          userData.value.wage = 0
          chat.reply(`You have prestiged! You will now earn more money!`)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You need 500 customers to prestige...`)
        }
      } else {
        chat.reply(`You need 250 workers to prestige...`)
      }
    } else {
      chat.reply(`You need $5000 to prestige...`)
    }
  },
  description: "Prestige",
  permission: rank => rank != "Banned"
};

export {Prestige};