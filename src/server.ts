import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json())

app.post("/user", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) return res.sendStatus(400)

  const user = await prisma.user.create({
    data: {
        name,
        email,
        password
    }
  })

  return res.status(201).json({
    data: user
  })
});

app.listen(3333, () => console.log("RUNNING AT https://localhost:3333"));
