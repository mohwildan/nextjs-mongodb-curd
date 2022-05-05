import mongoose from "mongoose";

const connection = {}


async function dbConnections() {
    if (connection.isConnected) {

return;

}

const db = await mongoose.connect("mongodb://localhost:27017/Baru_db", {

useNewUrlParser: true,

});

connection.isConnected = db.connections[0].readyState;
}

export default dbConnections

