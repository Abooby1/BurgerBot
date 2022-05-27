import {getCrate, getRandomInt, SeasonName} from "../../utils.js"

const Open = {
  names: ["open"],
  func: ({chat, args: [crate, amount], userData})=>{
    switch (crate.toLowerCase()) {
      case 'common':
        var quantity = parseFloat(amount) || 1
        if (userData.value.credits >= getCrate('commoncrate').cost * quantity) {
          const get = getCrate('commoncrate').earn
          const c = get[getRandomInt(0, get.length)].split(' ')
          userData.value.credits -= getCrate('commoncrate').cost * quantity
          switch (c[0]) {
            case 'exp':
              userData.value.exp += parseInt(c[1])
              chat.reply(`You got ${c[1] * quantity} exp from ${quantity} Common Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'citymoney':
              switch (userData.value.spot) {
                case 'city':
                  userData.value.city.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (city) from ${quantity} Common Crate(s)`)
                  break;
                case 'beach':
                  userData.value.beach.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (beach) from ${quantity} Common Crate(s)`)
                  break;
                case 'dank':
                  userData.value.dank.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (dank) from ${quantity} Common Crate(s)`)
                  break;
                case 'space':
                  userData.value.space.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (space) from ${quantity} Common Crate(s)`)
                  break;

                default:
                  chat.reply(`Hmm, looks like this spot doesnt support common crates...`)
              }
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'customcity':
              switch (userData.value.spot) {
                case 'city':
                  userData.value.city.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (city) from ${quantity} Common Crate(s)`)
                  break;
                case 'beach':
                  userData.value.beach.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (beach) from ${quantity} Common Crate(s)`)
                  break;
                case 'dank':
                  userData.value.dank.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (dank) from ${quantity} Common Crate(s)`)
                  break;
                case 'space':
                  userData.value.space.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (space) from ${quantity} Common Crate(s)`)
                  break;

                default:
                  chat.reply(`Hmm, looks like this spot doesnt support common crates...`)
              }
              break;
          }
        } else {
          chat.reply(`You dont have the credits to open these crates... ('${getCrate('commoncrate').cost}' credits per crate)`)
        }
        break;
      case 'rare':
        var quantity = parseFloat(amount) || 1
        if (userData.value.credits >= getCrate('rarecrate').cost * quantity) {
          const get = getCrate('rarecrate').earn
          const c = get[getRandomInt(0, get.length)].split(' ')
          userData.value.credits -= getCrate('rarecrate').cost * quantity
          switch (c[0]) {
            case 'exp':
              userData.value.exp += parseInt(c[1]) * quantity
              chat.reply(`You got ${c[1] * quantity} exp from ${quantity} Rare Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'citymoney':
              switch (userData.value.spot) {
                case 'city':
                  userData.value.city.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (city) from ${quantity} Rare Crate(s)`)
                  break;
                case 'beach':
                  userData.value.beach.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (beach) from ${quantity} Rare Crate(s)`)
                  break;
                case 'dank':
                  userData.value.dank.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (dank) from ${quantity} Rare Crate(s)`)
                  break;
                case 'space':
                  userData.value.space.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (space) from ${quantity} Rare Crate(s)`)
                  break;

                default:
                  chat.reply(`Hmm, looks like this spot doesnt support rare crates...`)
              }
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'customcity':
              switch (userData.value.spot) {
                case 'city':
                  userData.value.city.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (city) from ${quantity} Rare Crate(s)`)
                  break;
                case 'beach':
                  userData.value.beach.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (beach) from ${quantity} Rare Crate(s)`)
                  break;
                case 'dank':
                  userData.value.dank.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (dank) from ${quantity} Rare Crate(s)`)
                  break;
                case 'space':
                  userData.value.space.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (space) from ${quantity} Rare Crate(s)`)
                  break;

                default:
                  chat.reply(`Hmm, looks like this spot doesnt support rare crates...`)
              }
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
          }
        } else {
          chat.reply(`You dont have the credits to open these crates... ('${getCrate('rarecrate').cost}' credits per crate)`)
        }
        break;
      case 'epic':
        var quantity = parseFloat(amount) || 1
        if (userData.value.credits >= getCrate('epiccrate').cost * quantity) {
          const get = getCrate('epiccrate').earn
          const c = get[getRandomInt(0, get.length)].split(' ')
          userData.value.credits -= getCrate('epiccrate').cost * quantity
          switch (c[0]) {
            case 'exp':
              userData.value.exp += parseInt(c[1]) * quantity
              chat.reply(`You got ${c[1] * quantity} exp from ${quantity} Epic Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'citymoney':
              switch (userData.value.spot) {
                case 'city':
                  userData.value.city.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (city) from ${quantity} Epic Crate(s)`)
                  break;
                case 'beach':
                  userData.value.beach.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (beach) from ${quantity} Epic Crate(s)`)
                  break;
                case 'dank':
                  userData.value.dank.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (dank) from ${quantity} Epic Crate(s)`)
                  break;
                case 'space':
                  userData.value.space.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (space) from ${quantity} Epic Crate(s)`)
                  break;

                default:
                  chat.reply(`Hmm, looks like this spot doesnt support epic crates...`)
              }
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'customcity':
              switch (userData.value.spot) {
                case 'city':
                  userData.value.city.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (city) from ${quantity} Epic Crate(s)`)
                  break;
                case 'beach':
                  userData.value.beach.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (beach) from ${quantity} Epic Crate(s)`)
                  break;
                case 'dank':
                  userData.value.dank.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (dank) from ${quantity} Epic Crate(s)`)
                  break;
                case 'space':
                  userData.value.space.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (space) from ${quantity} Epic Crate(s)`)
                  break;

                default:
                  chat.reply(`Hmm, looks like this spot doesnt support epic crates...`)
              }
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
          }
        } else {
          chat.reply(`You dont have the credits to open these crates... ('${getCrate('epiccrate').cost}' credits per crate)`)
        }
        break;
      case 'legendary':
      case 'legend':
        var quantity = parseFloat(amount) || 1
        if (userData.value.credits >= getCrate('legendcrate').cost * quantity) {
          const get = getCrate('legendcrate').earn
          const c = get[getRandomInt(0, get.length)].split(' ')
          userData.value.credits -= getCrate('legendcrate').cost * quantity
          switch (c[0]) {
            case 'exp':
              userData.value.exp += parseInt(c[1]) * quantity
              chat.reply(`You got ${c[1] * quantity} exp from ${quantity} Legendary Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'citymoney':
              switch (userData.value.spot) {
                case 'city':
                  userData.value.city.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (city) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'beach':
                  userData.value.beach.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (beach) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'dank':
                  userData.value.dank.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (dank) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'space':
                  userData.value.space.money += parseInt(c[1]) * quantity
                  chat.reply(`You got $${c[1] * quantity} (space) from ${quantity} Legendary Crate(s)`)
                  break;

                default:
                  chat.reply(`Hmm, looks like this spot doesnt support legendary crates...`)
              }
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'customcity':
              switch (userData.value.spot) {
                case 'city':
                  userData.value.city.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (city) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'beach':
                  userData.value.beach.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (beach) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'dank':
                  userData.value.dank.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (dank) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'space':
                  userData.value.space.customers += parseInt(c[1]) * quantity
                  chat.reply(`You got ${c[1] * quantity} customer(s) (space) from ${quantity} Legendary Crate(s)`)
                  break;

                default:
                  chat.reply(`Hmm, looks like this spot doesnt support legendary crates...`)
              }
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
          }
        } else {
          chat.reply(`You dont have the credits to open these crates... ('${getCrate('legendcrate').cost}' credits per crate)`)
        }
        break;
      case SeasonName.toLowerCase():
      case 'season':
        var quantity = parseFloat(amount) || 1
        if (userData.value.credits >= getCrate('seasoncrate').cost * quantity) {
          const get = getCrate('seasoncrate').earn
          const c = get[getRandomInt(0, get.length)].split(' ')
          userData.value.credits -= getCrate('seasoncrate').cost * quantity
          switch (c[0]) {
            case 'exp':
              userData.value.exp += parseInt(c[1]) * quantity
              chat.reply(`You got ${c[1] * quantity} exp from ${quantity} ${SeasonName} Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'money':
              userData.value.city.money += parseInt(c[1]) * quantity//*******
              chat.reply(`You got $${c[1] * quantity} (${SeasonName}) from ${quantity} ${SeasonName} Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'custom':
              userData.value.city.customers += parseInt(c[1]) * quantity//*****
              chat.reply(`You got ${c[1] * quantity} customer(s) (${SeasonName}) from ${quantity} ${SeasonName} Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
          }
        } else {
          chat.reply(`You dont have the credits to open these crates... ('${getCrate('seasoncrate').cost}' credits per crate)`)
        }
        break;
        
      default:
        chat.reply(`Thats not a crate... ("common" | "rare" | "epic" | "legend" | "season" or season name)`)
    }
  },
  description: "open crates",
  permission: rank => rank != "Banned"
};

export {Open};