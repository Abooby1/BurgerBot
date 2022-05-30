import {getCrate, getRandomInt, SeasonName} from "../../utils.js"

const Open = {
  names: ["open"],
  func: ({chat, args: [crate, amount], userData})=>{
    var s = 0
    switch (crate.toLowerCase()) {
      case 'common':
        var quantity = parseFloat(amount) || 1
        if (userData.value.credits >= getCrate('commoncrate').cost * quantity) {
          const get = getCrate('commoncrate').earn
          const c = get[getRandomInt(0, get.length)].split(' ')
          userData.value.credits -= getCrate('commoncrate').cost * quantity
          switch (c[0]) {
            case 'exp':
              s = getRandomInt(1, parseInt(c[1])) * quantity
              userData.value.exp += s
              chat.reply(`You got ${s} exp from ${quantity} Common Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'citymoney':
              switch (userData.value.spot) {
                case 'city':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.city.money += s
                  chat.reply(`You got $${s} (city) from ${quantity} Common Crate(s)`)
                  break;
                case 'beach':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.beach.money += s
                  chat.reply(`You got $${s} (beach) from ${quantity} Common Crate(s)`)
                  break;
                case 'dank':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.dank.money += s
                  chat.reply(`You got $${s} (dank) from ${quantity} Common Crate(s)`)
                  break;
                case 'space':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.space.money += s
                  chat.reply(`You got $${s} (space) from ${quantity} Common Crate(s)`)
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
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.city.customers += s
                  chat.reply(`You got ${s} customer(s) (city) from ${quantity} Common Crate(s)`)
                  break;
                case 'beach':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.beach.customers += s
                  chat.reply(`You got ${s} customer(s) (beach) from ${quantity} Common Crate(s)`)
                  break;
                case 'dank':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.dank.customers += s
                  chat.reply(`You got ${s} customer(s) (dank) from ${quantity} Common Crate(s)`)
                  break;
                case 'space':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.space.customers += s
                  chat.reply(`You got ${s} customer(s) (space) from ${quantity} Common Crate(s)`)
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
              s = getRandomInt(parseInt(c[1])) * quantity
              userData.value.exp += s
              chat.reply(`You got ${s} exp from ${quantity} Rare Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'citymoney':
              switch (userData.value.spot) {
                case 'city':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.city.money += s
                  chat.reply(`You got $${s} (city) from ${quantity} Rare Crate(s)`)
                  break;
                case 'beach':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.beach.money += s
                  chat.reply(`You got $${s} (beach) from ${quantity} Rare Crate(s)`)
                  break;
                case 'dank':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.dank.money += s
                  chat.reply(`You got $${s} (dank) from ${quantity} Rare Crate(s)`)
                  break;
                case 'space':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.space.money += s
                  chat.reply(`You got $${s} (space) from ${quantity} Rare Crate(s)`)
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
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.city.customers += s
                  chat.reply(`You got ${s} customer(s) (city) from ${quantity} Rare Crate(s)`)
                  break;
                case 'beach':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.beach.customers += s
                  chat.reply(`You got ${s} customer(s) (beach) from ${quantity} Rare Crate(s)`)
                  break;
                case 'dank':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.dank.customers += s
                  chat.reply(`You got ${s} customer(s) (dank) from ${quantity} Rare Crate(s)`)
                  break;
                case 'space':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.space.customers += s
                  chat.reply(`You got ${s} customer(s) (space) from ${quantity} Rare Crate(s)`)
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
              s = getRandomInt(1, parseInt(c[1])) * quantity
              userData.value.exp += s
              chat.reply(`You got ${s} exp from ${quantity} Epic Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'citymoney':
              switch (userData.value.spot) {
                case 'city':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.city.money += s
                  chat.reply(`You got $${s} (city) from ${quantity} Epic Crate(s)`)
                  break;
                case 'beach':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.beach.money += s
                  chat.reply(`You got $${s} (beach) from ${quantity} Epic Crate(s)`)
                  break;
                case 'dank':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.dank.money += s
                  chat.reply(`You got $${s} (dank) from ${quantity} Epic Crate(s)`)
                  break;
                case 'space':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.space.money += s
                  chat.reply(`You got $${s} (space) from ${quantity} Epic Crate(s)`)
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
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.city.customers += s
                  chat.reply(`You got ${s} customer(s) (city) from ${quantity} Epic Crate(s)`)
                  break;
                case 'beach':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.beach.customers += s
                  chat.reply(`You got ${s} customer(s) (beach) from ${quantity} Epic Crate(s)`)
                  break;
                case 'dank':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.dank.customers += s
                  chat.reply(`You got ${s} customer(s) (dank) from ${quantity} Epic Crate(s)`)
                  break;
                case 'space':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.space.customers += s
                  chat.reply(`You got ${s} customer(s) (space) from ${quantity} Epic Crate(s)`)
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
              s = getRandomInt(1, parseInt(c[1])) * quantity
              userData.value.exp += s
              chat.reply(`You got ${s} exp from ${quantity} Legendary Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'citymoney':
              switch (userData.value.spot) {
                case 'city':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.city.money += s
                  chat.reply(`You got $${s} (city) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'beach':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.beach.money += s
                  chat.reply(`You got $${s} (beach) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'dank':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.dank.money += s
                  chat.reply(`You got $${s} (dank) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'space':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.space.money += s
                  chat.reply(`You got $${s} (space) from ${quantity} Legendary Crate(s)`)
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
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.city.customers += s
                  chat.reply(`You got ${s} customer(s) (city) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'beach':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.beach.customers += s
                  chat.reply(`You got ${s} customer(s) (beach) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'dank':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.dank.customers += s
                  chat.reply(`You got ${s} customer(s) (dank) from ${quantity} Legendary Crate(s)`)
                  break;
                case 'space':
                  s = getRandomInt(1, parseInt(c[1])) * quantity
                  userData.value.space.customers += s
                  chat.reply(`You got ${s} customer(s) (space) from ${quantity} Legendary Crate(s)`)
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
              s = getRandomInt(1, parseInt(c[1])) * quantity
              userData.value.exp += s
              chat.reply(`You got ${s} exp from ${quantity} ${SeasonName} Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'money':
              s = getRandomInt(1, parseInt(c[1])) * quantity
              userData.value.city.money += s//*******
              chat.reply(`You got $${s} (${SeasonName}) from ${quantity} ${SeasonName} Crate(s)`)
              setTimeout(function( ) {
                userData.update()
              }, 2500)
              break;
            case 'custom':
              s = getRandomInt(1, parseInt(c[1])) * quantity
              userData.value.city.customers += s//*****
              chat.reply(`You got ${s} customer(s) (${SeasonName}) from ${quantity} ${SeasonName} Crate(s)`)
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