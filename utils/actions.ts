"use server";

import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (
  chatMessages: ChatCompletionMessageParam[]
) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    return response.choices[0].message;
  } catch (error) {
    console.log(error);
    // throw error;
    return null;
  }
};

export interface ExistingTourProps {
  [k: string]: FormDataEntryValue;
}

export const getExistingTour = async ({ city, country }: ExistingTourProps) => {
  return null;
};

export type Tour = {
  city: string;
  country: string;
  title: string;
  description: string;
  stops: string[];
};

interface TourData {
  tour: Tour | null;
}

export const generateTourResponse = async ({
  city,
  country,
}: ExistingTourProps) => {
  const query = `Find a ${city} in this ${country}. If ${city} in this ${country} exists, create a list of things families can do in this ${city},${country}.
Once you have a list, create a one-day tour. Response should be in the following JSON format:
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "description of the city and tour",
    "stops": ["short paragraph on the stop 1", "short paragraph on the stop 2","short paragraph on the stop 3"]
  }
}
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country} return { "tour": null }, with no additional characters.`;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a tour guide" },
        { role: "user", content: query },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    const content = response.choices[0].message.content;
    if (!content) return null;

    const tourData = JSON.parse(content) as TourData;
    if (!tourData.tour) {
      return null;
    }

    return tourData.tour;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const createNewTour = async ({ tour }: { tour: string }) => {
  return null;
};
