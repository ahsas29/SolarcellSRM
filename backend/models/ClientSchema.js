import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  role: {
    type: String,
  },
});

export default mongoose.model("Client", ClientSchema);
