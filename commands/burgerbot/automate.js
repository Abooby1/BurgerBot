const Auto = {
  names: ["auto"],
  func: ({chat, body, userData})=>{
    if (body && body <= 50) {
      var Times = 0
      
      if (userData.value.workers >= 1) {
        if (userData.value.money >= userData.value.wage * body) {
          chat.reply(`Your workers are now working! (every 24 hours (24 seconds) you will earn money!)`)
          setInterval(function( ) {
            if (Times != body) {
              Times += 1
              userData.value.money -= userData.value.wage
              var Earned = userData.value.workers * userData.value.prestige * userData.value.customers * 0.001
              userData.value.money += Earned
              chat.reply(`One day has passed (Earned $${Earned.toFixed(3)})`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
            }
          }, 24000)
        } else {
          chat.reply(`You dont have enough money to pay wage...`)
        }
      } else {
        chat.reply(`You need to have at least one worker... (b!hire <stays empty if single person/say bulk if 5 people>)`)
      }
    } else {
      chat.reply(`Please say how many days you want your workers to work (b!auto <days> | has to be less than 50)`)
    }
  },
  description: "Automate and earn",
  permission: rank => rank != "Banned"
};

export {Auto};