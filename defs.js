'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Mixed = Schema.Types.Mixed,
	ObjectId = Schema.ObjectId;

module.exports = {
	app : {
		appHash: { type: String },
		name: { type: String, index: true, lowercase: true, required: true },
		path: { type: String, required: true },
		main: { type: String },
		displayName: { type: String, required: true },

		checks: { type: [String]},
		controlledVisibility: { type: Boolean, default: false },
		description: { type: String },
		dateCreated: { type: Date, default: Date.now },
		files: { type: Object},
		index: { type: String, default: '/' },
		module: { type: Boolean, default: false },
		order: { type: Number, default: 0 },
		system: { type: Boolean, default: false },
		tags: { type: [String]},
		version: { type: String }
	},
	appRoleAssoc : {
		app: { type: String, required: true },
		app_id: { type: ObjectId, required: true },
		role: { type: String, required: true },
		role_id: { type: ObjectId, required: true },

		dateCreated: { type: Date, default: Date.now },
		permissions: { type: [String], default: [] }
	},
	appUserAssoc : {
		app: { type: String, required: true },
		app_id: { type: ObjectId, required: true },
		user: { type: String, required: true },
		user_id: { type: ObjectId, required: true },

		dateCreated: { type: Date, default: Date.now },
		starts: { type: Number, default: 0 },
		lastStart: { type: Date, default: Date.now }
	},
	boltSecret : {
		name: { type: String, index: true, lowercase: true, required: true },
		value: { type: String, required: true }
	},
	collection : {
		name: { type: String, lowercase: true, required: true, trim: true },
		app: { type: String, required: true },
		database: { type: String, required: true },
		guests: { type: Mixed },
		tenants: { type: Mixed }
	},
	extension : {
		path: { type: String, required: true },
		app: { type: String, required: true },
		isDefault: { type: Boolean, default: false },
		type: { type: String, required: true },
		route: { type: String, required: true }
	},
	hook : {
		event: { type: String, lowercase: true, required: true },
		publisher: { type: String, lowercase: true, required: true },
		route: { type: String, required: true },
		subscriber: { type: String, lowercase: true, required: true },
		transient: { type: Boolean, default: false },
		type: { type: String, default: "server" }
	},
	permission : {
		name: { type: String, lowercase: true, required: true, trim: true },
		app: { type: String, required: true },
		displayName: { type: String, required: true },

		description: { type: String }
	},
	role : {
		name: { type: String, index: true, lowercase: true, required: true },
		isAdmin: { type: Boolean, default: false },
		displayName: { type: String, required: true },

		description: { type: String },
		dateCreated: { type: Date, default: Date.now }
	},
	router : {
		name: { type: String, lowercase: true, required: true, trim: true },
		app: { type: String, required: true },
		path: { type: String, required: true },
		main: { type: String, required: true, trim: true },
		root: { type: String, trim: true },
		order: { type: Number, default: 0 }
	},
	user : {
		name: { type: String, index: true, lowercase: true, required: true },
		displayName: { type: String, required: true },
		passwordHash : { type: String, required: true },

		displayPic: { type: String },
		email: { type: String },
		dateCreated: { type: Date, default: Date.now },
		isBlocked: { type: Boolean, default: false },
		lastVisit: { type: Date, default: Date.now },
		phone: { type: String },
		roles: { type: [String], default: [] },
		visits: { type: Number, default: 0 }
	},
	userRoleAssoc : {
		role: { type: String, required: true },
		role_id: { type: ObjectId, required: true },
		user: { type: String, required: true },
		user_id: { type: ObjectId, required: true },
		dateCreated: { type: Date, default: Date.now }
	}
};