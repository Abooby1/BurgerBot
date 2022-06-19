import {getUserDataManager} from '../../database.js'
import {getHour, getPlant} from '../../utils.js'

const Weed = {
  names: ['weed'],
  func: async ({client, chat, args: [person]}) => {
    if (person == undefined || '@me') {
      person = chat.author.id
    }
    const user = await client.getUserFromUsername(person)
    if (user != undefined) {
      person = user.id
      const data = await getUserDataManager(person)
      var gain = 0
      if (data.value.timezone != undefined) {
        if (data.value.plant.nextweed <= await getHour(data.value.timezone)) {
          data.value.plant.rank = getPlant(data.value.plant.rank, 'plantrank')
          if (await getHour(data.value.timezone) + getPlant(data.value.rank, 'planthour') > 12) {
            gain = 1 + await getHour(data.value.timezone) + getPlant(data.value.rank, 'planthour') - await getHour(data.value.timezone)
            if (gain > 12) {
              gain = 1 + await getHour(data.value.timezone) + getPlant(data.value.rank, 'planthour') - await getHour(data.value.timezone)
              if (gain > 12) {
                gain = 1 + await getHour(data.value.timezone) + getPlant(data.value.rank, 'planthour') - await getHour(data.value.timezone)
              }
            }
          } else {
            gain = await getHour(data.value.timezone) + getPlant(data.value.rank, 'planthour')
          }
          data.value.plant.nextweed = gain
        } else {
          chat.reply(`You cant weed this plant... (next weed: ${data.value.plant.nextweed} (hour form in the ${data.value.timezone} server))`)
        }
      } else {
        chat.reply(`You need to set your server to use this command... (b!change server <server id>)`)
      }
    } else {
      chat.reply(`Thats not a username...`)
    }
  },
  permission: rank => rank != 'Banned'
}