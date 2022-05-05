import dbConnections from "../../../utils/dbConnection";
import Users from "../../../model/Users";

dbConnections();

export default async function Id(req, res) {
  const { method } = req;
  const { id } = req.query;

  if (method === "GET") {
    const user = await Users.findById(id);
    res.json(user);
  }

  if (method === "PATCH") {
    const user = await Users.updateOne({ _id: id }, req.body);
    res.json(user);
  }

  if (method === "DELETE") {
    const user = await Users.deleteOne({ _id: id });
    res.json(user)
  }
}
