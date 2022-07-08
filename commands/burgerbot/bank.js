import {p, getLet} from '../../utils.js'

const Loan = {
  names: ["loan"],
  func: async ({chat, args: [money], userData})=>{
    if (money != undefined) {
      switch (userData.value.spot) {
        case 'city':
          if (userData.value.city.accountant == true) {
            if (userData.value.city.loan == undefined) {
              const amount = parseInt(money) + await p(5, parseFloat(money) || 0)
              if (parseInt(money) >= 0) {
                userData.value.city.loan = amount
                userData.value.city.money += parseInt(money)
                chat.reply(`You got $${getLet(parseInt(money))} added to your account! (use "b!bank" to check how much you need to pay to the bank until you can get another loan!)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You need to get more than $0...`)
              }
            } else {
              chat.reply(`You already have a loan...`)
            }
          } else {
            chat.reply(`You need an accountant to unlock loans...`)
          }
          break;
        case 'beach':
          if (userData.value.beach.accountant == true) {
            if (userData.value.beach.loan == undefined) {
              const amount = parseInt(money) + await p(5, parseFloat(money) || 0)
              if (parseInt(money) >= 0) {
                userData.value.beach.loan = amount
                userData.value.beach.money += parseInt(money)
                chat.reply(`You got $${getLet(parseInt(money))} added to your account! (use "b!bank" to check how much you need to pay to the bank until you can get another loan!)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You need to get more than $0...`)
              }
            } else {
              chat.reply(`You already have a loan...`)
            }
          } else {
            chat.reply(`You need an accountant to unloack loans...`)
          }
          break;
        case 'dank':
          if (userData.value.dank.accountant == true) {
            if (userData.value.dank.loan == undefined) {
              const amount = parseInt(money) + await p(5, parseFloat(money) || 0)
              if (parseInt(money) >= 0) {
                userData.value.dank.loan = amount
                userData.value.dank.money += parseInt(money)
                chat.reply(`You got $${getLet(parseInt(money))} added to your account! (use "b!bank" to check how much you need to pay to the bank until you can get another loan!)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You need to get more than $0...`)
              }
            } else {
              chat.reply(`You already have a loan...`)
            }
          } else {
            chat.reply(`You need an accountant to unlock loans...`)
          }
          break;
        case 'space':
          if (userData.value.space.accountant == true) {
            if (userData.value.space.loan == undefined) {
              const amount = parseInt(money) + await p(5, parseFloat(money) || 0)
              if (parseInt(money) >= 0) {
                userData.value.space.loan = amount
                userData.value.space.money += parseInt(money)
                chat.reply(`You got $${getLet(parseInt(money))} added to your account! (use "b!bank" to check how much you need to pay to the bank until you can get another loan!)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You need to get more than $0...`)
              }
            } else {
              chat.reply(`You already have a loan...`)
            }
          } else {
            chat.reply(`You need an accountant to unlock loans...`)
          }
          break;
        case 'london':
          if (userData.value.london.accountant == true) {
            if (userData.value.london.loan == undefined) {
              const amount = parseInt(money) + await p(5, parseFloat(money) || 0)
              if (parseInt(money) >= 0) {
                userData.value.london.loan = amount
                userData.value.london.money += parseInt(money)
                chat.reply(`You got $${getLet(parseInt(money))} added to your account! (use "b!bank" to check how much you need to pay to the bank until you can get another loan!)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You need to get more than $0...`)
              }
            } else {
              chat.reply(`You already have a loan...`)
            }
          } else {
            chat.reply(`You need an accountant to unlock loans...`)
          }
          break;
        case 'birming':
          if (userData.value.birming.accountant == true) {
            if (userData.value.birming.loan == undefined) {
              const amount = parseInt(money) + await p(5, parseFloat(money) || 0)
              if (parseInt(money) >= 0) {
                userData.value.birming.loan = amount
                userData.value.birming.money += parseInt(money)
                chat.reply(`You got $${getLet(parseInt(money))} added to your account! (use "b!bank" to check how much you need to pay to the bank until you can get another loan!)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You need to get more than $0...`)
              }
            } else {
              chat.reply(`You already have a loan...`)
            }
          } else {
            chat.reply(`You need an accountant to unlock loans...`)
          }
          break;
        case 'kyiv':
          if (userData.value.kyiv.accountant == true) {
            if (userData.value.kyiv.loan == undefined) {
              const amount = parseInt(money) + await p(5, parseFloat(money) || 0)
              if (parseInt(money) >= 0) {
                userData.value.kyiv.loan = amount
                userData.value.kyiv.money += parseInt(money)
                chat.reply(`You got $${getLet(parseInt(money))} added to your account! (use "b!bank" to check how much you need to pay to the bank until you can get another loan!)`)
                setTimeout(function( ) {
                  userData.update()
                }, 2500)
              } else {
                chat.reply(`You need to get more than $0...`)
              }
            } else {
              chat.reply(`You already have a loan...`)
            }
          } else {
            chat.reply(`You need an accountant to unlock loans...`)
          }
          break;

        default:
          chat.reply(`The spot youre currently at cant get loans`)
      }
    } else {
      chat.reply(`Please complete the command... (b!loan <money>)`)
    }
  },
  description: "",
  permission: rank => rank != 'Banned'
};

const Payoff = {
  names: ["payoff"],
  func: ({chat, userData})=>{
    switch (userData.value.spot) {
      case 'city':
        if (userData.value.city.loan != undefined) {
          if (userData.value.city.money >= userData.value.city.loan) {
            userData.value.city.money -= userData.value.city.loan
            userData.value.city.loan = undefined
            chat.reply(`You paid off your loan!`)
            setTimeout(function() {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You dont have the money to pay off your loan...`)
          }
        } else {
          chat.reply(`You dont have a loan to pay off...`)
        }
        break;
      case 'beach':
        if (userData.value.beach.loan != undefined) {
          if (userData.value.beach.money >= userData.value.beach.loan) {
            userData.value.beach.money -= userData.value.beach.loan
            userData.value.beach.loan = undefined
            chat.reply(`You paid off your loan!`)
            setTimeout(function() {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You dont have the money to pay off your loan...`)
          }
        } else {
          chat.reply(`You dont have a loan to pay off...`)
        }
        break;
      case 'dank':
        if (userData.value.dank.loan != undefined) {
          if (userData.value.dank.money >= userData.value.dank.loan) {
            userData.value.dank.money -= userData.value.dank.loan
            userData.value.dank.loan = undefined
            chat.reply(`You paid off your loan!`)
            setTimeout(function() {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You dont have the money to pay off your loan...`)
          }
        } else {
          chat.reply(`You dont have a loan to pay off...`)
        }
        break;
      case 'space':
        if (userData.value.space.loan != undefined) {
          if (userData.value.space.money >= userData.value.space.loan) {
            userData.value.space.money -= userData.value.space.loan
            userData.value.space.loan = undefined
            chat.reply(`You paid off your loan!`)
            setTimeout(function() {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You dont have the money to pay off your loan...`)
          }
        } else {
          chat.reply(`You dont have a loan to pay off...`)
        }
        break;
      case 'london':
        if (userData.value.london.loan != undefined) {
          if (userData.value.london.money >= userData.value.london.loan) {
            userData.value.london.money -= userData.value.london.loan
            userData.value.london.loan = undefined
            chat.reply(`You paid off your loan!`)
            setTimeout(function() {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You dont have the money to pay off your loan...`)
          }
        } else {
          chat.reply(`You dont have a loan to pay off...`)
        }
        break;
      case 'birming':
        if (userData.value.birming.loan != undefined) {
          if (userData.value.birming.money >= userData.value.birming.loan) {
            userData.value.birming.money -= userData.value.birming.loan
            userData.value.birming.loan = undefined
            chat.reply(`You paid off your loan!`)
            setTimeout(function() {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You dont have the money to pay off your loan...`)
          }
        } else {
          chat.reply(`You dont have a loan to pay off...`)
        }
        break;
      case 'kyiv':
        if (userData.value.kyiv.loan != undefined) {
          if (userData.value.kyiv.money >= userData.value.kyiv.loan) {
            userData.value.kyiv.money -= userData.value.kyiv.loan
            userData.value.kyiv.loan = undefined
            chat.reply(`You paid off your loan!`)
            setTimeout(function() {
              userData.update()
            }, 2500)
          } else {
            chat.reply(`You dont have the money to pay off your loan...`)
          }
        } else {
          chat.reply(`You dont have a loan to pay off...`)
        }
        break;
    }
  },
  description: "",
  permission: rank => rank != 'Banned'
};

const Bank = {
  names: ["bank"],
  func: ({chat, userData})=>{
    switch (userData.value.spot) {
      case 'city':
        if (userData.value.city.accountant != false) {
          if (userData.value.city.loan != undefined) {
            chat.reply(`You have to pay $${getLet(userData.value.city.loan)} for your loan to be paid off`)
          } else {
            chat.reply(`You dont have a loan to pay!`)
          }
        } else {
          chat.reply(`You need an accountant to check loans...`)
        }
        break;
      case 'beach':
        if (userData.value.beach.accountant != false) {
          if (userData.value.beach.loan != undefined) {
            chat.reply(`You have to pay $${getLet(userData.value.beach.loan)} for your loan to be paid off`)
          } else {
            chat.reply(`You dont have a loan to pay!`)
          }
        } else {
          chat.reply(`You need an accountant to check loans...`)
        }
        break;
      case 'dank':
        if (userData.value.dank.accountant != false) {
          if (userData.value.dank.loan != undefined) {
            chat.reply(`You have to pay $${getLet(userData.value.dank.loan)} for your loan to be paid off`)
          } else {
            chat.reply(`You dont have a loan to pay!`)
          }
        } else {
          chat.reply(`You need an accountant to check loans...`)
        }
        break;
      case 'space':
        if (userData.value.space.accountant != false) {
          if (userData.value.space.loan != undefined) {
            chat.reply(`You have to pay $${getLet(userData.value.space.loan)} for your loan to be paid off`)
          } else {
            chat.reply(`You dont have a loan to pay!`)
          }
        } else {
          chat.reply(`You need an accountant to check loans...`)
        }
        break;
      case 'london':
        if (userData.value.london.accountant) {
          if (userData.value.london.loan != undefined) {
            chat.reply(`You have to pay $${getLet(userData.value.london.loan)} for your loan to be paid off`)
          } else {
            chat.reply(`You dont have a loan to pay!`)
          }
        } else {
          chat.reply(`You need an accountant to check loans...`)
        }
        break;
      case 'birming':
        if (userData.value.birming.accountant != undefined) {
          if (userData.value.birming.loan != undefined) {
            chat.reply(`You have to pay $${getLet(userData.value.birming.loan)} for your loan to be paid off`)
          } else {
            chat.reply(`You dont have a loan to pay!`)
          }
        } else {
          chat.reply(`You need an accountant to check loans...`)
        }
        break;
      case 'kyiv':
        if (userData.value.kyiv.accountant != undefined) {
          if (userData.value.kyiv.loan != undefined) {
            chat.reply(`You have to pay $${getLet(userData.value.kyiv.loan)} for your loan to be paid off`)
          } else {
            chat.reply(`You dont have a loan to pay!`)
          }
        } else {
          chat.reply(`You need an accountant to check loans...`)
        }
        break;

      default:
        chat.reply(`That spot doesnt support loans...`)
    }
  },
  description: "",
  permission: rank => rank != 'Banned'
};

export {Loan, Payoff, Bank};