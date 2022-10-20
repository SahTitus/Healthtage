import { connectToDb} from "../../../utils/mongodb";

export default async function handler(req, res) {
  const { method } = req;
  const {user} = req.body;

  console.log(method)

  const { db } = await connectToDb();
  if (method === "POST") {
    try {
      const users = await db
        .collection("users")

        const result = await users.insertOne(user)
        // console.log(users);
      res.status(200).json(users);
 
    } catch (error) {
    //   res.status(500).json(error);
    console.log(error)
    }
  }
}