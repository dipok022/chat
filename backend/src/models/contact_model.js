import mongoose from "mongoose";

const contactSchema = new mongoose.Schema();

export default mongoose.model("Contact", contactSchema);
