const Hire = {
  names: ["hire"],
  func: ({chat, body, userData})=>{
    if (!body) {
      if (userData.value.money >= 100) {
        userData.value.workers += 1
        userData.value.money -= 100
        userData.value.wage += 10.23
        chat.reply(`You hired 1 person!`)
        setTimeout(function( ) {
          userData.update()
        }, 2500)
      } else {
        chat.reply(`You dont have enough to hire 1 person...`)
      }
    } else {
      if (body == "bulk") {
        if (userData.value.money >= 300) {
          userData.value.workers += 5
          userData.value.money -= 300
          userData.value.wage += 51.15 * 5
          chat.reply(`You hired 5 people!`)
          setTimeout(function( ) {
            userData.update()
          }, 2500)
        } else {
          chat.reply(`You dont have enough to 5 people...`)
        }
      }
    }
  },
  description: "Hire more workers to automate your business",
  permission: rank => rank != "Banned"
};

export {Hire}