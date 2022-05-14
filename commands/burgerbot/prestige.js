const Prestige = {
  names: ["prestige"],
  func: ({chat, client, userData})=>{
    if (userData.value.credits >= 15000) {
      if (userData.value.workers >= 500) {
        if (userData.value.customers >= 5000) {
          if (userData.value.customsbeach >= 1000) {
            if (userData.value.workersbeach >= 500) {
              userData.value.prestige += 1
              userData.value.money = 5 * userData.value.prestige
              userData.value.workers = 0
              userData.value.customers = 1
              userData.value.normad = "flier"
              userData.value.normstove = "stove1"
              userData.value.wage = 0
              userData.value.moneybeach = 2 * userData.value.prestige
              userData.value.workersbeach = 0
              userData.value.customsbeach = 1
              userData.value.normadbeach = "facebook"
              userData.value.normstovebeach = "stove1"
              userData.value.wagebeach = 0
              chat.reply(`You have prestiged! You will now earn more money!`)
              setTimeout(async function( ) {
                userData.update()
                if (userData.value.prestige == 10) {
                  const post = await client.groups["62535105a95b113f103c2d57"].post("cappy")
                  setTimeout(async function( ) {
                    const something = await post.chat(`c!bot ${chat.author.id} burgerbotprestige`)
                    chat.reply(`Congrats! You got to prestige 10! (You got the BurgerBot prestige trophy collectable in CapBot!)`)
                  }, 3000)
                }
              }, 2500)
            } else {
              chat.reply(`You need 500 beach workers to prestige...`)
            }
          } else {
            chat.reply(`You need 1000 beach customers to prestige...`)
          }
        } else {
          chat.reply(`You need 5000 city customers to prestige...`)
        }
      } else {
        chat.reply(`You need 500 city workers to prestige...`)
      }
    } else {
      chat.reply(`You need 15000 credits to prestige...`)
    }
  },
  description: "Prestige",
  permission: rank => rank != "Banned"
};

export {Prestige};