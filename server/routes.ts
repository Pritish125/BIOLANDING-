import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email and message'
      });
    }
    
    // In a real app, you would save the contact message to the database
    // and perhaps send an email notification
    
    return res.status(200).json({ 
      success: true, 
      message: 'Message received successfully' 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
