import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    // })
    const dbURI = process.env.MONGO_URI

    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      autoIndex: true,
      poolSize: 10, // Maintain up to 10 socket connections. If not connected, return errors immediately rather than waiting for reconnect
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    };

    // Create the database connection
    mongoose
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
    mongoose.connection.on("connected", () => {
      console.log("Mongoose default connection open to " + dbURI);
    });

    // If the connection throws an error
    mongoose.connection.on("error", (err) => {
      console.log("Mongoose default connection error: " + err);
    });

    // When the connection is disconnected
    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose default connection disconnected");
    });

    // If the Node process ends, close the Mongoose connection
    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log(
          "Mongoose default connection disconnected through app termination"
        );
        process.exit(0);
      });
    });

    // console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (err) {
    console.log('MongoDB connection error: ' + err)
    console.error(err)
    process.exit(1)
  }
}

export default connectDB
