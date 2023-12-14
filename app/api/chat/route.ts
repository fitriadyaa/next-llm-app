import { NextRequest, NextResponse } from "next/server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {

  // get prompt field from the request body
  const reqBody = await req.json();

  const { userPrompt } = reqBody;

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

  const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig: { maxOutputTokens: 100 }});

  const result = await model.generateContent(userPrompt);

  const response = await result.response;
  
  const text = response.text();

  return NextResponse.json({
    text
  });

}