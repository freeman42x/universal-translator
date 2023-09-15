import { OpenAI } from "https://esm.sh/langchain/llms/openai";

console.log("hi");

const llm = new OpenAI({
    temperature: 0.9,
  });

const result = await llm.predict("What would be a good company name for a company that makes colorful socks?");

console.log(result);

console.log("bye");