import React from "react";
import Chat from "@/components/Chat";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface ChatPageProps {}

const ChatPage = ({}: ChatPageProps) => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Chat />
    </HydrationBoundary>
  );
};

export default ChatPage;
