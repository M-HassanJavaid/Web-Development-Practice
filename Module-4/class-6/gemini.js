import { GoogleGenAI } from 'https://cdn.jsdelivr.net/npm/@google/genai@latest/dist/index.esm.js';

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

await main();