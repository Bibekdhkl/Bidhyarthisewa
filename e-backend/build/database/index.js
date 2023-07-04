"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
// Build the connection string
const dbURI = `mongodb+srv://${config_1.db.user}:${encodeURIComponent(config_1.db.password)}@${config_1.db.host}/${config_1.db.name}`;
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
};
console.log(dbURI);
// dotenv.config();
// const MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://localhost/ecommercedb";
// console.log("MONGODB_URI", MONGODB_URI);
// mongoose.set("strictQuery", true);
// Create the database connection
mongoose_1.default
    .connect(dbURI, options)
    .then(() => {
    console.log("Mongoose connection done");
})
    .catch((e) => {
    console.log("Mongoose connection error");
    console.log(e);
});
// CONNECTION EVENTS
// When successfully connected
mongoose_1.default.connection.on("connected", () => {
    console.log("Mongoose default connection open to " + dbURI);
});
// If the connection throws an error
mongoose_1.default.connection.on("error", (err) => {
    console.log("Mongoose default connection error: " + err);
});
// When the connection is disconnected
mongoose_1.default.connection.on("disconnected", () => {
    console.log("Mongoose default connection disconnected");
});
// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
    mongoose_1.default.connection.close(() => {
        console.log("Mongoose default connection disconnected through app termination");
        process.exit(0);
    });
});
//# sourceMappingURL=index.js.map