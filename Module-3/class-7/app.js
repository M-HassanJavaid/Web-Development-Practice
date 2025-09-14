import { GoogleGenAI }  from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: 'AIzaSyCA3qbhSzVPleRLdbcWwFxoCXFiQlX2698'
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Which  programming language is best to learn for Web development!",
  });
  console.log(response.text);
}

await main()
