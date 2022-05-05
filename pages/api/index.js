import dbConnections from "../../utils/dbConnection";
import Users from "../../model/Users";

dbConnections()


export default async function handler(req, res) {
    const {method} = req
    
    if(method === "GET") {
        const user = await Users.find()
        res.json(user)
    }
    if(method === "POST") {
        const user = await Users.create(req.body)
        res.json(user)
    }
}