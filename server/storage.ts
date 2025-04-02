import type { InsertMessage } from "@shared/schema";

const messages: InsertMessage[] = [];

export const storage = {
  createMessage: async (data: InsertMessage) => {
    messages.push(data);
    return data;
  },

  getMessages: async () => {
    return messages;
  },
};
