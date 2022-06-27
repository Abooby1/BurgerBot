const Team = {
  names: ["team"],
  func: ({chat, userData})=>{
    if (userData.value.team.name != '') {
      chat.reply(``)
    } else {
      chat.reply(`Your not in a team...`)
    }
  },
  description: "",
  permission: rank => rank != 'Banned'
};

export {Team};