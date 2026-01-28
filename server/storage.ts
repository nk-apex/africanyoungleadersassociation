import { type ContactSubmission, type InsertContact } from "@shared/schema";

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private submissions: Map<number, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.submissions = new Map();
    this.currentId = 1;
  }

  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const id = this.currentId++;
    const submission: ContactSubmission = { ...contact, id, createdAt: new Date() };
    this.submissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
