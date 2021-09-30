import * as Mongoose from "mongoose";

import { ConnectMongo } from "./service/connmongo";
import { KittySchema } from "./models/kitty-model";

export class KittyQuery {
  public static async kittyQuery() {
    const connectMongo = new ConnectMongo();
    connectMongo.connectMongoFunction();

    console.log("----------查找年龄为2的数据----------");
    const kittyModel = await KittySchema.kittySchemaFunction();

    // 查找符合某字段要求的数据;
    try {
      const selectKitty = await kittyModel.find({ age: 2 });
      console.log(selectKitty);
    } catch (error) {
      console.log(error);
      Mongoose.connection.close();
    }

    // 计算符合要求的文档数;
    try {
      const selectDoc = await kittyModel.countDocuments({ age: 2 });
      console.log("年龄为2的数据有" + selectDoc + "个");
    } catch (error) {
      console.log(error);
      Mongoose.connection.close();
    }
    Mongoose.connection.close();
  }
}
KittyQuery.kittyQuery();
