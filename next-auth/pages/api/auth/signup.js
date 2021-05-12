import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";
function handler(req, res) {
  const { email, password } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid input" });
    return;
  }
  const client = await connectToDatabase();

  const db = client.db();

  const hashedPassword = hashPassword(password);

  const result = db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User created" });
}

export default handler;
