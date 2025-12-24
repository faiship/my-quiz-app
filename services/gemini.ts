
import { GoogleGenAI } from "@google/genai";

// Use the API key directly from process.env.API_KEY as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getExplanation(question: string, options: string[], correctAnswer: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Direct technical explanation for Salesforce Revenue Cloud (RLM).
      
STRICT RULES:
- NO introduction or "the correct answer is"
- NO pleasantries
- USE 1-2 bullet points
- BOLD **technical objects/fields**
- Maximum 50 words

Question: ${question}
Correct Answer: ${correctAnswer}
Options: ${options.join(', ')}`,
    });
    // Use the .text property directly as per guidelines.
    return response.text?.trim() || "Explanation unavailable.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Service error.";
  }
}
