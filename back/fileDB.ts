import {promises as fs} from "fs";
import crypto from "crypto";
import {IComment, ICommentWithOutID} from './types';

const fileName = './db.json';
let data:IComment[] = [];

const fileDb={
  async init(){
    try{
      const fileContent = await fs.readFile(fileName);
      data = await JSON.parse(fileContent.toString());
    }catch(e){
      console.log(e)
    }
  },

  async getData(){
    return data
  },

  async addComment(item:ICommentWithOutID){
    const id = crypto.randomUUID();
    const newComment = {
      ...item,
      id
    }
    data.push(newComment);
    await this.save();
    return newComment
  },
  async save(){
    return await fs.writeFile(fileName, JSON.stringify(data));
  }
}

export default fileDb;