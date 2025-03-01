import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/posts", async (req, res) => {
  const result = await prisma.post.findMany();
  res.json(result);
});

router.post("/post", async (req, res) => {
  const { name, content } = req.body;
  const result = await prisma.post.create({
    data: {
      name,
      content,
    },
  });
  res.json(result);
});

export default router;