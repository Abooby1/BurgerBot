function getRandomInt (max) {
  return Math.floor(Math.random() * max)
}

const Advertise = {
  names: ["advert"],
  func: ({chat, userData})=>{    
    if (userData.value.money >= 2) {
      var Earned = getRandomInt(50)
      chat.reply(`You advertised and got ${Earned} customers!`)
      userData.value.customers += Earned
      userData.value.money -= 2
      setTimeout(function( ) {
        userData.update()
      }, 2500)
    }
  },
  description: "Advertise",
  permission: rank => rank != "Banned"
};

export {Advertise};