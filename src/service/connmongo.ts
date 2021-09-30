import * as Mongoose from "mongoose";

import { Config } from "../constants/config";

export class ConnectMongo {
  public async connectMongoFunction() {
    const mongoUrl = `mongodb://${Config.MONGO_HOSTNAME}:${Config.MONGO_PORT}/${Config.MONGO_DBNAME}`;
    Mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: "admin",
      auth: {
        username: Config.MONGO_USER,
        password: Config.MONGO_PASSWORD,
      },
    } as Mongoose.ConnectOptions);
    // 解决插入选项报错 https://stackoverflow.com/questions/68917683/mongoose-connecturi-connectoptions-does-not-recognize-usenewurlparser-and-oth

    Mongoose.connection.on(
      "error",
      console.error.bind(console, "MongoDB 连接错误：")
    );
    Mongoose.connection.once("open", () => {
      console.log("MongoDB 连接建立成功");
    });
    Mongoose.connection.on("close", () => {
      console.log("MongoDB 连接断开成功");
    });
    return Mongoose.connection;
  }
}
// 测试
// const connectionMongo = new ConnectMongo();
// connectionMongo.connectMongoFunction();
