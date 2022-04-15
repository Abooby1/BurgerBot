import Database from "@replit/database";
import {DATABASE_PREFIX} from "./constants.js";

const db = new Database();

/*
ranks: 
1. Owner (4)
2. Mod (3)
3. Special (2)
3. Normal (1)
4. Banned (0)
*/

const specialRanks = {
  "6154f0d0a8d6d106c5b869b6": ["Owner", "Mod", "Special"],//3
  
  "61f9afa941a9e239b62ec6f5": ["Bot"],
  "624884d0a95b113f10356a47": ["Bot"],
  
  "621cf9c163790d5ac3c2f938": ["Mod", "Special"],//2
  "61998d154ef0457408274fd6": ["Mod", "Special"],
  "609d5b5a772544002e4beb25": ["Mod", "Special"],
  "6231fe600c9eb906137b6d98": ["Mod", "Special"],
  "6203c9db3f99d655b9aa81cb": ["Mod", "Special"],
  "61dc68a1d1975678cc267bc6": ["Mod", "Special"],

  "61fd694edf4668762c1c8fbc": ["Special"],
  "621e5255aa5d4a6b281e9387": ["Special"],
  "624f2ddea95b113f103a3800": ["Special"],
  "620afe8ea5d85736c7480a36": ["Special"],
  "62465bdda95b113f103322d2": ["Special"],
  "62221daff1c22c29f8629977": ["Special"],
  "6255aa3c434000065016fb6f": ["Special"],
}

export const defaultData = {
  rank: ["Normal"],
  daily: 0,

  money: 5, 
  customers: 1,
  workers: 0,
  wage: 0, 
  prestige: 1,
};

export async function getDataForUserId(userid) {
  let result;
  try {
    result = JSON.parse(await db.get(`${DATABASE_PREFIX}${userid}`))
    if (!result) {
      result = {};
    }
  } catch (e) {
    result = {};
  }
  if (specialRanks[userid]) {
    result.rank = specialRanks[userid];
  }
  return {...defaultData, ...result};
}

const userDataPromises = {};
class UserDataManager {
  saveTimeout = setTimeout(()=>{
    this.save();
  }, 2_000)

  async pull(){
    this.value = await getDataForUserId(this.userid);
  }
  applyRanks(){
    if (specialRanks[this.userid]) {
        result.rank = specialRanks[this.userid];
    }
  }
  async save(){
    await saveDataForUserId(this.userid, this.value);
  }
  update(){
    this.saveTimeout.refresh();
  }
  constructor(id, value){
    this.userid = id;
    this.value = value;
  }
}

export async function getUserDataManager(userid){
  if (!userDataPromises[userid]) {
    userDataPromises[userid] = new Promise(async (res, rej)=>{
      const data = await getDataForUserId(userid);
      const obj = new UserDataManager(userid, data);
      res(obj);
    })
  }
  return userDataPromises[userid];
}

export async function saveDataForUserId(userid, data) {
  if (!data) throw new Error("Argument 2 'data' not specified.");
  const serialized = JSON.stringify(data);
  await db.set(`${DATABASE_PREFIX}${userid}`, serialized);
}