const Work = {
  names: ["work"],
  func: ({chat, body, userData})=>{
    if (body && body * 1 <= 24 && body > 0) {
      if (body == "-Infinity") return;
      chat.reply(`You started working for ${body} hours (time: ${body} seconds)`)
      
      setTimeout(function( ) {
        var Earned = body * userData.value.prestige * 0.01 * userData.value.customers
        userData.value.money += Earned
        chat.reply(`You worked for ${body} hours and earned $${Earned.toFixed(2)}!`)
        setTimeout(function( ) {
          userData.update()
        }, 2500)
      }, body * 1000)
    } else {
      chat.reply("Please add the hours you want to work (b!work <hours>)")
    }
  },
  description: "Work for money",
  permission: rank => rank != "Banned"
};

export {Work};