import { model, models, Schema } from "mongoose";

export interface IRecord {
	movement: String;
	stepCount: Number;
	heartRate: Number;
	fallDetection: Boolean,
	time: String;
}
const RecordSchema = new Schema<IRecord>(
	{
		movement: String,
		stepCount: Number,
		heartRate: Number,
		fallDetection: Boolean,
		time: {
            type: Date,
            default: Date.now
        },
	},
	{
		timestamps: true,
		toJSON: {
			versionKey: false,
			virtuals: true,
			transform: (_, ret) => {
				delete ret._id;
			},
		},
	}
);
const Record = models.Record || model("Record", RecordSchema);
export default Record;
