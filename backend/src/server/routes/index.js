const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();

const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  try {
    const { title, date } = req.body;
    const event = await prisma.event.create({
      data: { title, date: new Date(date) },
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar evento" });
  }
});

router.get("/", async (req, res) => {
  try {
    const events = await prisma.event.findMany();
    if (events.length === 0) {
      return res.status(404).json({ messagem: "Nenhum evento encontrado" });
    }
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar eventos" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await prisma.event.findUnique({ where: { id } });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar evento" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date } = req.body;
    const event = await prisma.event.update({
      where: { id },
      data: { title, date: new Date(date) },
    });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar evento" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.event.delete({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar evento" });
  }
});

module.exports = router;
