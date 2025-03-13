import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // API endpoint for contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(validatedData);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof ZodError) {
        const validationError = fromZodError(err);
        res.status(400).json({ success: false, message: validationError.message });
      } else {
        res.status(500).json({ success: false, message: "An unknown error occurred" });
      }
    }
  });

  // Get all messages (for admin purposes)
  app.get("/api/messages", async (req, res) => {
    try {
      const messages = await storage.getMessages();
      res.status(200).json(messages);
    } catch (err) {
      res.status(500).json({ success: false, message: "Failed to retrieve messages" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
