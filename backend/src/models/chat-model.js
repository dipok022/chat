import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  chatList: [
    {
      chatId: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const chatModel = mongoose.model("Chat", chatSchema);
export default chatModel;
