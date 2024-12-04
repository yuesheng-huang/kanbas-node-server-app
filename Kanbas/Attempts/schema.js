import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
   {
      user: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
      quiz: {type: mongoose.Schema.Types.ObjectId, ref: "QuizModel"}
   },
   { collection: "attempts" }
);

export default attemptSchema;