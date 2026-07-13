import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function generateSummary(data) {
  const prompt = `
Write a professional resume summary in 3-4 lines.

Candidate Details:
Name: ${data.name}

Skills:
${data.skills.join(", ")}

Projects:
${data.projects.map((p) => p.title).join(", ")}

Experience:
${data.experience
  .map((e) => `${e.role} at ${e.company}`)
  .join(", ")}

Return only the summary.
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}