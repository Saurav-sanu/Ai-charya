import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "AIcharya" ,name:"AIcharya",
    credentials:{
        gemini:{
            apiKey:{
                apiKey:process.env.GEMINI_API_KEY,
            },
        },
    },
});
