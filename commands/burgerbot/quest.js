import {QuestW, QuestS} from '../../utils.js'

const Quest = {
  names: ["quest"],
  func: ({chat, args: [type], userData})=>{
    switch (type.toLowerCase()) {
      case 'weekly':
        chat.reply(`Current quest (weekly): ${QuestW.name} (${userData.value.quest.done}/${QuestW.max}) | How to complete: ${QuestW.desc}`)
        break;
      case 'season':
        chat.reply(`Current quest (seasonal): ${QuestS.name} (${userData.value.quest.done}/${QuestS.max}) | How to complete: ${QuestS.desc}`)
        break;

      default:
        chat.reply(`Thats not a quest category... ("weeky" or "season")`)
    }
  },
  description: "All about quests",
  permission: rank => rank != 'Banned'
};

export {Quest};