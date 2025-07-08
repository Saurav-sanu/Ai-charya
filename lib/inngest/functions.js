import { inngest } from "./client";
import { EventSchemas } from "inngest";

// Define a simple helloWorld function
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "app/hello.world" },
  async ({ event, step }) => {
    return { message: "Hello from Inngest!", event };
  }
);
