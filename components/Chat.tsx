"use client";

import { generateChatResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

interface ChatProps {}

const Chat = ({}: ChatProps) => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const { mutate } = useMutation({
    mutationFn: (query: ChatCompletionMessageParam) =>
      generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong...");
        return;
      }
      setMessages((prev) => [...prev, data]);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = {
      role: "user",
      content: text,
    } as ChatCompletionMessageParam;
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        <h2 className="text-5xl">messages</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="message GPTGenius"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-primary join-item" type="submit">
            Ask Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
