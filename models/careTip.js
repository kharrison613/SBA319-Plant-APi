import mongoose from 'mongoose';

const careTipSchema = new mongoose.Schema({
  plant: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant', required: true },
  tip: { type: String, required: true }
}, { timestamps: true });

const CareTip = mongoose.model('CareTip', careTipSchema);
export default CareTip;
