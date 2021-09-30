import * as Mongoose from "mongoose";

import { ConnectMongo } from "./service/connmongo";
import { KittySchema } from "./models/kitty-model";

export class KittyInsert {
  public static async kittyInsertFunction() {
    const connection = new ConnectMongo();
    connection.connectMongoFunction();

    const kittyModel = await KittySchema.kittySchemaFunction();
    const kitty1 = new kittyModel({
      name: "Zildjian",
      color: "White",
      age: 1,
    });
    await kitty1.save().then((doc: any) => {
      console.log("成功上传第一条数据" + doc);
    });

    const kitty2 = new kittyModel({
      name: "Charlotte",
      color: "Black",
      age: 2,
    });
    await kitty2.save((err: any, doc: any) => {
      if (err) {
        return err;
      }
      console.log("成功上传第二条数据" + doc);
      // 已保存
    });

    kittyModel.create(
      {
        name: "Ann",
        color: "black",
        age: 1,
      },
      (err: any, doc: any) => {
        if (err) {
          return err;
        }
        console.log("成功上传第三条数据" + doc);
        Mongoose.connection.close();
        // 已保存
      }
    ); // "kittyDocument" has no types
  }
}
KittyInsert.kittyInsertFunction();
