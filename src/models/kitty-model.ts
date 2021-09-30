// import { Schema, model } from "mongoose";
// import { getModelForClass, prop } from "@typegoose/typegoose";
import { getModelForClass, prop } from "@typegoose/typegoose";

export class KittySchema {
  public static async kittySchemaFunction() {
    // interface Kitty {
    //   name: string;
    //   color: string;
    //   age?: Number;
    // }
    // const kittySchema = new Schema<Kitty>({
    //   name: { type: String, required: true },
    //   color: { type: String, required: true },
    //   age: Number,
    // });
    // const KittyModel = model<Kitty>("Kitty", kittySchema);

    class KittyClass {
      @prop()
      public name: string;
      public color: string;
      public age?: Number;
    }

    const KittyModel = getModelForClass(KittyClass);
    console.log("==========");
    return KittyModel;
  }
}
//test
// KittySchema.kittySchemaFunction();
