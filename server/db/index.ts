import mongoose from "mongoose";
import { Nitro } from "nitropack"
const { MONGO_URI } = import.meta.env
export default async (_nitroApp: Nitro) => {
  //连接数据库
  // mongoose
  //   .connect('mongodb://localhost:27017/me')
  //   .then(() => console.log(`Connected to DB`))
  //   .catch((e) => console.log(e));
};