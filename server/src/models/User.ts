import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	status: {
		type: Boolean,
		required: true,
	},
});

export default mongoose.model('users', UserSchema);
