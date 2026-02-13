import Groq from "groq-sdk";

export async function askAI(message: string) {
  if (!process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is not configured");
  }

  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
            You are the official AI assistant of ZENTIC Studio.
            Only provide information about our listed services.
            Maintain a premium professional tone.
        `,
      },
      {
        role: "user",
        content: message,
      },
    ],
    model: "llama-3.1-8b-instant",
  });

  return chatCompletion.choices[0]?.message?.content || "No response";
}
